// Redirect to quiz selection
function startQuiz() {
  window.location.href = "selection.html";
}

// Animate elements on page load
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo");
  const quote = document.querySelector(".quote");
  const button = document.querySelector(".start-btn");

  // Fade-in effect for logo, quote, button
  [logo, quote, button].forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    setTimeout(() => {
      el.style.transition = "all 0.8s ease";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, index * 400);
  });

  // Typing effect for quote
  const text = quote.textContent;
  quote.textContent = "";
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      quote.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 40);
    }
  }
  setTimeout(typeWriter, 1200); // starts typing after fade-in
});

// Button hover animation (pulse effect)
const btn = document.querySelector(".start-btn");
btn.addEventListener("mouseenter", () => {
  btn.style.transition = "transform 0.2s ease";
  btn.style.transform = "scale(1.1)";
});
btn.addEventListener("mouseleave", () => {
  btn.style.transform = "scale(1)";
});
