const firebaseConfig = {
    apiKey: "AIzaSyCBrGKgHqPS_Q5q3ki2JxAEvcyKgcZaQHo",
    authDomain: "quizify-f8ca3.firebaseapp.com",
    projectId: "quizify-f8ca3",
    storageBucket: "quizify-f8ca3.firebasestorage.app",
    messagingSenderId: "1079669942998",
    appId: "1:1079669942998:web:026fb016de73602d02b777"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const questionCountSelect = document.getElementById('question-count');
const quizTypeSelect = document.getElementById('quiz-type');

const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const explanationDiv = document.getElementById('explanation');
const timerEl = document.getElementById('timer');
const progressBar = document.getElementById('progress-bar');

const finalScoreDiv = document.getElementById('final-score');
const tryAgainBtn = document.getElementById('try-again-btn');
const homeBtn = document.getElementById('home-btn');

let allQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 0;

let timerInterval;
let timePerQuestion = 0;
let timeLeft = 0;

// URL params
const urlParams = new URLSearchParams(window.location.search);
const selectedClass = urlParams.get('class');
const selectedSubject = urlParams.get('subject');
const selectedBook = urlParams.get('book');
const selectedChapter = urlParams.get('chapter');

async function fetchQuestions() {
    if (!selectedClass || !selectedSubject || !selectedBook || !selectedChapter) {
        alert("Missing required parameters in URL.");
        return [];
    }
    try {
        const questionsSnapshot = await db
            .collection(selectedClass)
            .doc(selectedSubject)
            .collection(selectedBook)
            .doc(selectedChapter)
            .collection("questions")
            .get();

        let questionsArray = [];
        questionsSnapshot.forEach(doc => questionsArray.push(doc.data()));
        return questionsArray;
    } catch (error) {
        console.error("Error fetching questions:", error);
        alert("Failed to load questions. Please try again later.");
        return [];
    }
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

startBtn.addEventListener('click', () => {
    const count = questionCountSelect.value;
    const type = quizTypeSelect.value;

    if (!count || !type) {
        alert("Please select both number of questions and quiz type.");
        return;
    }

    totalQuestions = parseInt(count);
    timePerQuestion = parseInt(type);

    startScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');

    fetchQuestions().then(questions => {
        if (questions.length === 0) {
            alert("No questions found for this chapter.");
            location.reload();
            return;
        }
        allQuestions = shuffleArray(questions).slice(0, totalQuestions);
        currentQuestionIndex = 0;
        score = 0;

        showQuestion();
    });
});

function showQuestion() {
    if (currentQuestionIndex >= totalQuestions) return showResult();

    const currentQuestion = allQuestions[currentQuestionIndex];
    questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';
    explanationDiv.classList.add('hidden');

    currentQuestion.options.forEach(option => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.innerHTML = `<i class="fa-solid fa-circle"></i> ${option}`;
        btn.addEventListener('click', () => handleAnswer(btn, option, currentQuestion));
        optionsContainer.appendChild(btn);
    });

    startQuestionTimer();
}

function startQuestionTimer() {
    clearInterval(timerInterval);
    timeLeft = timePerQuestion;
    updateTimerUI();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerUI();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            currentQuestionIndex++;
            showQuestion();
        }
    }, 1000);
}

function updateTimerUI() {
    timerEl.textContent = `${timeLeft}s`;
    const percent = (timeLeft / timePerQuestion) * 100;
    progressBar.style.width = `${percent}%`;

    if (percent <= 30) {
        progressBar.style.background = "linear-gradient(90deg, #f44336, #e57373)";
        timerEl.style.color = "#f44336";
        timerEl.style.transform = "scale(1.2)";
    } else if (percent <= 60) {
        progressBar.style.background = "linear-gradient(90deg, #ff9800, #ffc107)";
        timerEl.style.color = "#ff9800";
        timerEl.style.transform = "scale(1.1)";
    } else {
        progressBar.style.background = "linear-gradient(90deg, #4caf50, #81c784)";
        timerEl.style.color = "#4caf50";
        timerEl.style.transform = "scale(1)";
    }
}

function handleAnswer(button, selectedOption, currentQuestion) {
    const correct = selectedOption === currentQuestion.answer;
    if (correct) score++;
    button.classList.add(correct ? 'correct' : 'wrong');

    Array.from(optionsContainer.children).forEach(btn => {
        btn.disabled = true;
        if (btn.textContent.trim() === currentQuestion.answer) btn.classList.add('correct');
    });

    explanationDiv.textContent = currentQuestion.explanation;
    explanationDiv.classList.remove('hidden');

    clearInterval(timerInterval);
    setTimeout(() => {
        currentQuestionIndex++;
        showQuestion();
    }, 1500);
}

function showResult() {
    clearInterval(timerInterval);
    questionScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');

    let displayedScore = 0;
    const interval = setInterval(() => {
        if (displayedScore < score) {
            displayedScore++;
            finalScoreDiv.textContent = displayedScore;
        } else clearInterval(interval);
    }, 100);
}

tryAgainBtn.addEventListener('click', () => location.reload());
homeBtn.addEventListener('click', () => window.location.href = "index.html");
