// classes-Subjects → Books → Chapters
const data = {
    "6th": {
        "Science": {
            "Curiosity": ["Chapter 1  FOOD: WHERE DOES IT COME FROM?", "Chapter 2  COMPONENTS OF FOOD", "Chapter 3  FIBRE TO FABRIC", "Chapter 4  SORTING MATERIALS INTO GROUPS", "Chapter 5  SEPARATION OF SUBSTANCES", "Chapter 6  CHANGES AROUND US", "Chapter 7  GETTING TO KNOW PLANTS", "Chapter 8  BODY MOVEMENTS", "Chapter 9  THE LIVING ORGANISMS — CHARACTERISTICS AND HABITATS", "Chapter 10  MOTION AND MEASUREMENT OF DISTANCES ","Chapter 11  LIGHT, SHADOWS AND REFLECTIONS", "Chapter 12  ELECTRICITY AND CIRCUITS ", "Chapter 13 FUN WITH MAGNETS"]
        },
        "Mathematics": {
            "Ganit Prakash": ["Chapter 1  KNOWING OUR NUMBERS", "Chapter 2  WHOLE NUMBERS", "Chapter 3  PLAYING WITH NUMBERS", "Chapter 4  BASIC GEOMETRICAL IDEAS", "Chapter 5  UNDERSTANDING ELEMENTARY SHAPES", "Chapter 6  INTEGERS", "Chapter 7  FRACTIONS", "Chapter 8  DECIMALS", "Chapter 9  DATA HANDLING", "Chapter 10  MENSURATION ","Chapter 11  ALGEBRA", "Chapter 12  RATIO AND PROPORTION ", "Chapter 13  SYMMETRY", "Chapter 14  PRACTICAL GEOMETRY"]
        },
        "English": {
            "Honeysuckle": ["Chapter 1  Who Did Patrick’s Homework?", "Chapter 2  How the Dog Found Himself", "Chapter 3  Taros Reward", "Chapter 4  An Indian American Woman in Space", "Chapter 5  A Different Kind of School", "Chapter 6  Who I Am", "Chapter 7   Fair Play", "Chapter 8  A Game of Chance", "Chapter 9  Desert Animals", "Chapter 10  The Banyan Tree","A House, A Home","The Kite","The Quarrel","Beauty","Where Do All the Teachers Go?","The Wonderful Words","Vocation","Whatif"],
            "A Pact with the Sun": ["Chapter 1  A Tale of Two Birds", "Chapter 2  The Friendly Mongoose", "Chapter 3  The Shepherd’s Treasure", "Chapter 4  The Old-Clock Shop", "Chapter 5  Tansen", "Chapter 6  The Monkey and the Crocodile", "Chapter 7  The Wonder Called Sleep", "Chapter 8  A Pact with the Sun", "Chapter 9  What Happened to the Reptiles", "Chapter 10  A Strange Wrestling march "]
        },
        "Social Science": {
            "Our Past-1": ["Chapter 1  WHAT, WHERE, HOW AND WHEN? ", "Chapter 2  FROM HUNTING–GATHERING TO GROWING FOOD", "Chapter 3  IN THE EARLIEST CITIES ", "Chapter 4  WHAT BOOKS AND BURIALS TELL US", "Chapter 5  SKINGDOMS, KINGS AND AN EARLY REPUBLIC", "Chapter 6  NEW QUESTIONS AND IDEAS", "Chapter 7  ASHOKA, THE EMPEROR WHO GAVE UP WAR", "Chapter 8  VITAL VILLAGES, THRIVING TOWNS", "Chapter 9  TRADERS, KINGS AND PILGRIMS", "Chapter 10  NEW EMPIRES AND KINGDOMS ","Chapter 11  BUILDINGS, PAINTINGS AND BOOKS"],
            "The Earth Our Habitat": ["Chapter 1  The Earth in the Solar System", "Chapter 2  Globe : Latitudes and Longitudes", "Chapter 3  Motions of the Earth", "Chapter 4  Maps", "Chapter 5  Major Domains of the Earth", "Chapter 6  Major Landforms of the Earth", "Chapter 7  Our Country – India", "Chapter 8  India : Climate, Vegetation and Wildlife", "Chapter 9  Jammu, Kashmir & Ladakh at A Glance"],
            "Social and Political Life-1": ["Chapter 1  Diversity", "Chapter 2  Diversity and Discrimination", "Chapter 3  What is Government", "Chapter 4  Panchayati Raj", "Chapter 5  Rural Administration", "Chapter 6  Urban Administration", "Chapter 7  Rural Livelihoods", "Chapter 8  Urban Livelihoods"]
        },
        "Hindi": {
            "Vasant": ["Chapter 1  वह चिड़िया जो (कविता)", "Chapter 2  बचपन (संस्मरण)", "Chapter 3  नादान दोस्त (कहानी)", "Chapter 4  चाँद से थोड़ी-सी गप्पे (कविता)", "Chapter 5  अक्षरों का महत्व (निबंध)", "Chapter 6  पार नज़र के (कहानी)", "Chapter 7  साथी हाथ बढ़ाना (गीत)", "Chapter 8 ऐसे-ऐसे (एकांकी)", "Chapter 9  ऐसे-ऐसे (एकांकी)", "Chapter 10  झांसी की रानी (कविता) ","Chapter 11  जो देखकर भी नहीं देखते (निबंध)", "Chapter 12  संसार पुस्तक है (पत्र) ", "Chapter 13  मैं सबसे छोटी होऊं (कविता)"],
            "Bal Ram Katha": ["Bal Ram Katha"]
        },
        "Sanskrit": {
            "Ruchira part-1": []
        }
    },
    "7th": {
        "Science": {
            "Curiosity": ["Chapter 1  Nutrition in Plants", "Chapter 2  Nutrition in Animals", "Chapter 3  Heat", "Chapter 4  Acids, Bases and Salts", "Chapter 5  Physical and Chemical Changes", "Chapter 6  Respiration in Organisms", "Chapter 7  Transportation in Animals and Plants", "Chapter 8  Reproduction in Plants", "Chapter 9  Motion and Time", "Chapter 10  Electric Current and its Effects","Chapter 11  Light", "Chapter 12  Forests: Our Lifeline", "Chapter 13  Wastewater Story "]
        },
        "Mathematics": {
            "Ganit Prakash": ["Chapter 1  Integers", "Chapter 2  Fractions and Decimals", "Chapter 3  Data Handling", "Chapter 4  Simple Equations", "Chapter 5  Lines and Angles", "Chapter 6  The Triangle and its Properties", "Chapter 7  Comparing Quantities", "Chapter 8  Rational Numbers", "Chapter 9  Perimeter and Area", "Chapter 10  Algebraic Expressions ","Chapter 11  Exponents and Powers", "Chapter 12  Symmetry", "Chapter 13  Visualising Solid Shapes"]
        },
        "English": {
            "Honeycomb": ["Chapter 1  Three Questions ", "Chapter 2  A Gift of Chappals ", "Chapter 3  Gopal and the Hilsa Fish ", "Chapter 4  The Ashes that Made Trees Bloom 7 ", "Chapter 5  Quality ", "Chapter 6  Expert Detectives ", "Chapter 7  The Invention of Vita – Wonk   ", "Chapter 8  A Homage to Our Brave Soldiers  "],
            "An Alien Hand": ["Chapter 1  The Tiny Teacher", "Chapter 2  The Desert", "Chapter 3  Bringing up Kari", "Chapter 4  The Cop and the Anthem", "Chapter 5  I want something in a Cage", "Chapter 6  Golu Grows a Nose", "Chapter 7  Chandni", "Chapter 8  A Tiger in the House", "Chapter 9  The Bear Story", "Chapter 10  An Alien Hand"]
        },
        "Social Science": {
            "History": ["Chapter 1  Tracing Changes Through a Thousand Years","Chapter 2  New Kings and Kingdoms","Chapter 3  The Delhi Sultans","Chapter 4  The Mughal Empire","Chapter 5  Rulers and Buildings","Chapter 6  Towns, Traders and Craftspersons","Chapter 7  Tribes, Nomads and Settled Communities","Chapter 8  Devotional Paths to the Divine","Chapter 9  The Making of Regional Cultures","Chapter 10  Eighteenth-Century Political Formations"],
            "Geography": ["Chapter 1  Environment","Chapter 2  Inside Our Earth","Chapter 3  Our Changing Earth","Chapter 4  Air","Chapter 5  Water","Chapter 6  Natural Vegetation and Wildlife","Chapter 7  Human Environment – Settlement, Transport and Communication","Chapter 8  Human Environment Interactions – The Tropical and the Subtropical Region"],
            "Political Science": ["Chapter 1  On Equality","Chapter 2  Role of the Government in Health","Chapter 3  How the State Government Works","Chapter 4  Growing Up as Boys and Girls","Chapter 5  Women Change the World","chapter 6  Understanding Media", "Chapter 7   Markets Around Us", "Chapter 8  A Shirt in the Market"]
        },
        "Hindi": {
            "Vasant": ["Chapter 1  सूरज की पहली किरण","Chapter 2  मख़मली सूती कमीज़","Chapter 3  मछली पकड़ने वाला","Chapter 4  बर्फ की चादर","Chapter 5  बड़े भाई की साँस","Chapter 6  राम और रावण","Chapter 7  रानी लक्ष्मीबाई","Chapter 8  भोर का तारा","Chapter 9  बकरी और बाघ","Chapter 10  परी की भेट"],
            "Bal Mahabharat Katha": ["Chapter 1  अर्जुन की प्रतिज्ञा","Chapter 2  द्रौपदी का चीर हरण","Chapter 3  भीष्म और द्रोण का संघार","Chapter 4  कर्ण की कहानी","Chapter 5  अभिमन्यु की वीरता","Chapter 6  युद्ध के दिन","Chapter 7  महाभारत का समापन","Chapter 8  धर्मराज युधिष्ठिर","Chapter 9  शांति की स्थापना","Chapter 10  महाभारत से शिक्षा"]
        },
        "Sanskrit": {
            "Ruchira Part-2": []
        }
    },
    "8th": {
        "Science": {
            "Science": ["Chapter 1  Crop Production and Management", "Chapter 2  Microorganisms: Friend and Foe", "Chapter 3  Synthetic Fibres and Plastics", "Chapter 4  Materials: Metals and Non-metals", "Chapter 5  Coal and Petroleum", "Chapter 6  Combustion and Flame", "Chapter 7  Conservation of Plants and Animals", "Chapter 8  Cell – Structure and Functions", "Chapter 9  Reproduction in Animals", "Chapter 10  Reaching the Age of Adolescence", "Chapter 11  Force and Pressure", "Chapter 12  Friction", "Chapter 13  Sound", "Chapter 14  Chemical Effects of Electric Current", "Chapter 15  Some Natural Phenomena", "Chapter 16  Light", "Chapter 17  Stars and the Solar System", "Chapter 18  Pollution of Air and Water"]
        },
        "Mathematics": {
            "Mathematics": ["Chapter 1  Rational Numbers", "Chapter 2  Linear Equations in One Variable", "Chapter 3  Understanding Quadrilaterals", "Chapter 4  Practical Geometry", "Chapter 5  Data Handling", "Chapter 6  Squares and Square Roots", "Chapter 7  Cubes and Cube Roots", "Chapter 8  Comparing Quantities", "Chapter 9  Algebraic Expressions and Identities", "Chapter 10  Visualizing Solid Shapes", "Chapter 11  Mensuration", "Chapter 12  Exponents and Powers", "Chapter 13  Direct and Inverse Proportions", "Chapter 14  Factorization", "Chapter 15  Introduction to Graphs", "Chapter 16  Playing with Numbers"]
        },
        "English": {
            "HoneyDew": ["Chapter 1  The Best Christmas Present in the World", "Chapter 2  The Tsunami", "Chapter 3  Glimpses of the Past", "Chapter 4  The Road Not Taken", "Chapter 5  The Lost Child", "Chapter 6  Weathering the Storm in Ersama", "Chapter 7  The Last Leaf", "Chapter 8  A House is Not a Home", "Chapter 9  The Accidental Tourist", "Chapter 10  The Beggar", "Chapter 11  The Balloon Man", "Chapter 12  The Tale of Custard the Dragon"],
            "It so Happened": ["Chapter 1  The Lost Child", "Chapter 2  The Adventures of Toto", "Chapter 3  Iswaran the Storyteller", "Chapter 4  In the Kingdom of Fools", "Chapter 5  The Happy Prince", "Chapter 6  Weathering the Storm in Ersama", "Chapter 7  The Last Leaf", "Chapter 8  The Accidental Tourist", "Chapter 9  The Beggar", "Chapter 10  The Ball Poem"]
        },
        "Social Science": {
            "History": ["Chapter 1  How, When and Where", "Chapter 2  From Trade to Territory", "Chapter 3  Ruling the Countryside", "Chapter 4  Tribals, Dikus and the Vision of a Golden Age", "Chapter 5  When People Rebel", "Chapter 6  Colonialism and the City", "Chapter 7  Weavers, Iron Smelters and Factory Owners", "Chapter 8  Civilising the “Native”, Educating the Nation", "Chapter 9  Women, Caste and Reform"],
            "Geography": ["Chapter 1  Resources", "Chapter 2  Land, Soil, Water, Natural Vegetation and Wildlife Resources", "Chapter 3  Mineral and Power Resources", "Chapter 4  Agriculture", "Chapter 5  Industries", "Chapter 6  Human Resources"],
            "Political Science": ["Chapter 1  The Indian Constitution", "Chapter 2  Understanding Secularism", "Chapter 3  Why Do We Need a Parliament?", "Chapter 4  Understanding Laws", "Chapter 5  Judiciary"]
        },
        "Hindi": {
            "Vasant": ["अध्याय 1  सों गुनहगार", "अध्याय 2  अमर की कसम", "अध्याय 3  दो बहनों की कहानी", "अध्याय 4  मेरा भरत देश", "अध्याय 5  हम सब", "अध्याय 6  चाँद", "अध्याय 7  चाँद की प्यासी लड़की", "अध्याय 8  पतझड़", "अध्याय 9  सपनों का गाँव", "अध्याय 10  मुक्तक"],
            "Bharat Ki Khoj": []
        },
        "Sanskrit": {
            "Ruchira part-3": []
        }
    },
    "9th": {
        "Science": {
            "Science": ["Chapter 1  Matter in Our Surroundings", "Chapter 2  Is Matter Around Us Pure?", "Chapter 3  Atoms and Molecules", "Chapter 4  Structure of the Atom", "Chapter 5  The Fundamental Unit of Life", "Chapter 6  Tissues", "Chapter 7  Diversity in the Living Organisms", "Chapter 8  Motion", "Chapter 9  Force and Laws of Motion", "Chapter 10  Gravitation", "Chapter 11  Work and Energy", "Chapter 12  Sound", "Chapter 13  Why Do We Fall Ill?", "Chapter 14  Natural Resources", "Chapter 15  Improvement in Food Resources"]
        },
        "Mathematics": {
            "Mathematics": ["Chapter 1  Number Systems", "Chapter 2  Polynomials", "Chapter 3  Coordinate Geometry", "Chapter 4  Linear Equations in Two Variables", "Chapter 5  Introduction to Euclid’s Geometry", "Chapter 6  Lines and Angles", "Chapter 7  Triangles", "Chapter 8  Quadrilaterals", "Chapter 9  Circles", "Chapter 10  Areas of Parallelograms and Triangles", "Chapter 11  Surface Areas and Volumes", "Chapter 12  Statistics", "Chapter 13  Probability"]
        },
        "English": {
            "Beehive": ["Chapter 1  The Fun They Had", "Chapter 2  The Sound of Music", "Chapter 3  The Little Girl", "Chapter 4  A Truly Beautiful Mind", "Chapter 5  The Snake and the Mirror", "Chapter 6  My Childhood", "Chapter 7  Packing", "Chapter 8  Reach for the Top", "Chapter 9  The Bond of Love", "Chapter 10  Kathmandu", "Chapter 11  If I Were You", "Chapter 12  Madam Rides the Bus", "Chapter 13  The Sermon at Benares", "Chapter 14  The Proposal"],
            "Moments": ["Chapter 1  The Lost Child", "Chapter 2  The Adventures of Toto", "Chapter 3  Iswaran the Storyteller", "Chapter 4  In the Kingdom of Fools", "Chapter 5  The Happy Prince", "Chapter 6  Weathering the Storm in Ersama", "Chapter 7  The Last Leaf", "Chapter 8  The Accidental Tourist", "Chapter 9  The Beggar", "Chapter 10  The Ball Poem"]
        },
        "Social Science": {
            "History": ["Chapter 1  The French Revolution", "Chapter 2  Socialism in Europe and the Russian Revolution", "Chapter 3  Nazism and the Rise of Hitler", "Chapter 4  Forest Society and Colonialism", "Chapter 5  Pastoralists in the Modern World", "Chapter 6  Peasants and Farmers", "Chapter 7  History and Sport: The Story of Cricket", "Chapter 8  Clothing: A Social History"],
            "Geography": ["Chapter 1  India – Size and Location", "Chapter 2  Physical Features of India", "Chapter 3  Drainage", "Chapter 4  Climate", "Chapter 5  Natural Vegetation", "Chapter 6  Population"],
            "Political Science": ["Chapter 1  Democracy in the Contemporary World", "Chapter 2  What is Democracy? Why Democracy?", "Chapter 3  Constitutional Design", "Chapter 4  Electoral Politics", "Chapter 5  Working of Institutions", "Chapter 6  Democratic Rights"],
            "Economics": []
        },
        "Hindi": {
            "Kshitij": ["अध्याय 1  प्राची", "अध्याय 2  दादी Amma", "अध्याय 3  सागर की यात्रा", "अध्याय 4  श्रम की पूजा", "अध्याय 5  मन की शांति", "अध्याय 6  खेतों की ओर", "अध्याय 7  पानी", "अध्याय 8  सूरज की कहानी", "अध्याय 9  पतझड़", "अध्याय 10  संगीत"],
            "Kritika": []
        },
    },
    "10th": {
        "Science": {
            "Science": ["Chapter 1  Chemical Reactions and Equations", "Chapter 2  Acids, Bases and Salts", "Chapter 3  Metals and Non-metals", "Chapter 4  Carbon and Its Compounds", "Chapter 5  Periodic Classification of Elements", "Chapter 6  Life Processes", "Chapter 7  Control and Coordination", "Chapter 8  How do Organisms Reproduce?", "Chapter 9  Heredity and Evolution", "Chapter 10  Light – Reflection and Refraction", "Chapter 11  The Human Eye and the Colourful World", "Chapter 12  Electricity", "Chapter 13  Magnetic Effects of Electric Current", "Chapter 14  Sources of Energy", "Chapter 15  Our Environment", "Chapter 16  Management of Natural Resources"]
        },
        "Mathematics": {
            "Mathematics": ["Chapter 1  Real Numbers", "Chapter 2  Polynomials", "Chapter 3  Pair of Linear Equations in Two Variables", "Chapter 4  Quadratic Equations", "Chapter 5  Arithmetic Progressions", "Chapter 6  Triangles", "Chapter 7  Coordinate Geometry", "Chapter 8  Introduction to Trigonometry", "Chapter 9  Some Applications of Trigonometry", "Chapter 10  Circles", "Chapter 11  Constructions", "Chapter 12  Areas Related to Circles", "Chapter 13  Surface Areas and Volumes", "Chapter 14  Statistics", "Chapter 15  Probability"]
        },
        "English": {
            "First Flight": ["Chapter 1  A Letter to God", "Chapter 2  Nelson Mandela: Long Walk to Freedom", "Chapter 3  Two Stories About Flying", "Chapter 4  From the Diary of Anne Frank", "Chapter 5  The Hundred Dresses – I", "Chapter 6  The Hundred Dresses – II", "Chapter 7  Glimpses of India", "Chapter 8  Mijbil the Otter", "Chapter 9  Madam Rides the Bus", "Chapter 10  The Sermon at Benares", "Chapter 11  The Proposal"],
            "Footprints Without Feet": ["Chapter 1  The Necklace", "Chapter 2  The Hack Driver", "Chapter 3  Bholi", "Chapter 4  The Book That Saved the Earth", "Chapter 5  The Gift of Chappals", "Chapter 6  The Journey", "Chapter 7  The Desert", "Chapter 8  The Trees", "Chapter 9  The Adventure of Toto", "Chapter 10  The Happy Prince"]
        },
        "Social Science": {
            "History": ["Chapter 1  The Rise of Nationalism in Europe", "Chapter 2  Nationalism in India", "Chapter 3  The Making of a Global World", "Chapter 4  The Age of Industrialisation", "Chapter 5  Work, Life and Leisure"],
            "Geography": ["Chapter 1  Resources and Development", "Chapter 2  Forest and Wildlife", "Chapter 3  Water Resources", "Chapter 4  Agriculture", "Chapter 5  Minerals and Energy Resources", "Chapter 6  Manufacturing Industries", "Chapter 7  Lifelines of National Economy"],
            "Political Science": ["Chapter 1  Power Sharing", "Chapter 2  Federalism", "Chapter 3  Democracy and Diversity", "Chapter 4  Gender, Religion and Caste", "Chapter 5  Popular Struggles and Movements", "Chapter 6  Political Parties", "Chapter 7  Outcomes of Democracy", "Chapter 8  Challenges to Democracy"]
        },
        "Hindi": {
            "Kshitij": ["अध्याय 1  पाँच नदियाँ", "अध्याय 2  जो सपने देखे", "अध्याय 3  हम सब", "अध्याय 4  बुद्ध और सच्चाई", "अध्याय 5  शीलता की मिसाल", "अध्याय 6  लाल बहादुर शास्त्री", "अध्याय 7  स्नेह की भाषा", "अध्याय 8  अंतर्मन", "अध्याय 9  एक नया देश", "अध्याय 10  देश का मान"],
            "Kritika": ["अध्याय 1  एक कुत्ता और एक घोड़ा", "अध्याय 2  सत्या के बारे में", "अध्याय 3  झूठ की सजा", "अध्याय 4  मेरा भारत", "अध्याय 5  भविष्य का भारत", "अध्याय 6  जीवन का अर्थ", "अध्याय 7  जीवन में अनुशासन", "अध्याय 8  मेरा देश", "अध्याय 9  संघर्ष की कहानी", "अध्याय 10  वीरता की कहानियाँ"]
        },
    },
    "11th Science": {
        "Physics": {
            "Physics Part 1": ["Chapter 1  Physical world and Measurement", "Chapter 2  Kinematics", "Chapter 3  Laws of Motion", "Chapter 4  Work, Energy and Power"],
            "Physics Part 2": ["Chapter 5  Motion of System of Particles and Rigid Body", "Chapter 6  Gravitation", "Chapter 7  Properties of Bulk Matter", "Chapter 8  Thermodynamics", "Chapter 9  Behaviour of Perfect Gas and Kinetic Theory", "Chapter 10  Oscillations and Waves"]
        },
        "Chemistry": {
            "Chemistry Part 1": ["Chapter 1  Some Basic Concepts of Chemistry", "Chapter 2  Structure of Atom", "Chapter 3  Classification of Elements and Periodicity in Properties", "Chapter 4  Chemical Bonding and Molecular Structure", "Chapter 5  States of Matter: Gases and Liquids", "Chapter 6  Thermodynamics", "Chapter 7  Equilibrium", "Chapter 8  Redox Reactions"],
            "Chemistry Part 2": ["Chapter 9  The Hydrogen", "Chapter 10  The s-Block Element", "Chapter 11  The p-Block Elements", "Chapter 12  The d-Block and f-Block Elements", "Chapter 13  The Organic Chemistry – Some Basic Principles and Techniques", "Chapter 14  Hydrocarbons", "Chapter 15  Environmental Chemistry"]
        },
        "English": {
            "Hornbill": ["Chapter 1  The Portrait of a Lady", "Chapter 2  We’re Not Afraid to Die... If We Can All Be Together", "Chapter 3  Discovering Tut: The Saga Continues", "Chapter 4  The Ailing Planet: The Green Movement’s Role", "Chapter 5  The Browning Version", "Chapter 6  The Adventure", "Chapter 7  Silk Road", "Chapter 8  Father to Son"],
            "Snapshots": ["Chapter 1  The Summer of the Beautiful White Horse", "Chapter 2  The Address", "Chapter 3  Ranga’s Marriage", "Chapter 4  Albert Einstein at School", "Chapter 5  Mother's Day", "Chapter 6  The Tale of Melon City", "Chapter 7  The Midnight Visitor", "Chapter 8  The Hack Driver", "Chapter 9  The Proposal"]
        },
        "Mathematics": {
            "Mathematics": ["Chapter 1  Sets", "Chapter 2  Relations and Functions", "Chapter 3  Trigonometric Functions", "Chapter 4  Principle of Mathematical Induction", "Chapter 5  Complex Numbers and Quadratic Equations", "Chapter 6  Linear Inequalities", "Chapter 7  Permutations and Combinations", "Chapter 8  Binomial Theorem", "Chapter 9  Sequence and Series", "Chapter 10  Straight Lines", "Chapter 11  Conic Sections", "Chapter 12  Introduction to Three-dimensional Geometry", "Chapter 13  Limits and Derivatives", "Chapter 14  Mathematical Reasoning", "Chapter 15  Statistics", "Chapter 16  Probability"]
        },
        "Biology": {
            "Biology": ["Chapter 1  The Living World", "Chapter 2  Biological Classification", "Chapter 3  Plant Kingdom", "Chapter 4  Animal Kingdom", "Chapter 5  Morphology of Flowering Plants", "Chapter 6  Anatomy of Flowering Plants", "Chapter 7  Structural Organisation in Animals", "Chapter 8  Cell Structure and Function", "Chapter 9  Biomolecules", "Chapter 10  Cell Cycle and Cell Division", "Chapter 11  Transport in Animals and Plants", "Chapter 12  Mineral Nutrition", "Chapter 13  Photosynthesis in Higher Plants", "Chapter 14  Respiration in Plants", "Chapter 15  Plant Growth and Development", "Chapter 16  Digestion and Absorption", "Chapter 17  Breathing and Exchange of Gases", "Chapter 18  Body Fluids and Circulation", "Chapter 19  Excretory Products and Their Elimination", "Chapter 20  Locomotion and Movement", "Chapter 21  Neural Control and Coordination", "Chapter 22  Chemical Coordination and Integration"]
        }
    },
    "11th Commerce": {
        "Accountancy": {
            "Accountancy": ["Chapter 1  Introduction to Accounting", "Chapter 2  Theory Base of Accounting", "Chapter 3  Recording of Transactions – I", "Chapter 4  Recording of Transactions – II", "Chapter 5  Bank Reconciliation Statement", "Chapter 6  Trial Balance and Rectification of Errors", "Chapter 7  Depreciation, Provisions and Reserves", "Chapter 8  Bills of Exchange"]
        },
        "Business Studies": {
            "Business Studies": ["Chapter 1  Business Environment", "Chapter 2  Forms of Business Organisations", "Chapter 3  Public, Private and Global Enterprises", "Chapter 4  Business Services", "Chapter 5  Emerging Modes of Business", "Chapter 6  Social Responsibility of Business and Business Ethics"]
        },
        "Economics": {
            "Indian Economic Development": [],
            "Statistics for Economics": []
        },
        "English": {
            "Hornbill": ["Chapter 1  The Portrait of a Lady", "Chapter 2  We’re Not Afraid to Die... If We Can All Be Together", "Chapter 3  Discovering Tut: The Saga Continues", "Chapter 4  The Ailing Planet: The Green Movement’s Role", "Chapter 5  The Browning Version", "Chapter 6  The Adventure", "Chapter 7  Silk Road", "Chapter 8  Father to Son"],
            "Snapshots": ["Chapter 1  The Summer of the Beautiful White Horse", "Chapter 2  The Address", "Chapter 3  Ranga’s Marriage", "Chapter 4  Albert Einstein at School", "Chapter 5  Mother's Day", "Chapter 6  The Tale of Melon City", "Chapter 7  The Midnight Visitor", "Chapter 8  The Hack Driver", "Chapter 9  The Proposal"]
        },
        "Mathematics": {
            "Mathematics": ["Chapter 1  Sets", "Chapter 2  Relations and Functions", "Chapter 3  Trigonometric Functions", "Chapter 4  Principle of Mathematical Induction", "Chapter 5  Complex Numbers and Quadratic Equations", "Chapter 6  Linear Inequalities", "Chapter 7  Permutations and Combinations", "Chapter 8  Binomial Theorem", "Chapter 9  Sequence and Series", "Chapter 10  Straight Lines", "Chapter 11  Conic Sections", "Chapter 12  Introduction to Three-dimensional Geometry", "Chapter 13  Limits and Derivatives", "Chapter 14  Mathematical Reasoning", "Chapter 15  Statistics", "Chapter 16  Probability"]
        },
    },
    "11th Humanities": {
        "History": {
            "Themes in World History": ["Chapter 1  From the Beginning of Time", "Chapter 2  Writing and City Life", "Chapter 3  An Empire Across Three Continents", "Chapter 4  The Central Islamic Lands", "Chapter 5  Nomadic Empires", "Chapter 6  The Three Orders", "Chapter 7  Changing Cultural Traditions", "Chapter 8  Confrontation of Cultures", "Chapter 9  The Industrial Revolution", "Chapter 10  Displacing Indigenous Peoples"]
        },
        "Geography": {
            "Geography": ["Chapter 1  Fundamentals of Physical Geography", "Chapter 2  The Earth’s Interior", "Chapter 3  Plate Tectonics and Associated Phenomena", "Chapter 4  Climate", "Chapter 5  Water", "Chapter 6  Natural Vegetation and Wildlife"]
        },
        "Economics": {
            "Introductory Microeconomics": ["Chapter 1  Introduction", "Chapter 2  Consumer’s Equilibrium and Demand", "Chapter 3  Producer Behaviour and Supply", "Chapter 4  Forms of Market and Price Determination"],
            "Indian Economic Development": ["Chapter 1  Indian Economy on the Eve of Independence", "Chapter 2  Structure of the Indian Economy", "Chapter 3  Poverty", "Chapter 4  Human Capital Formation", "Chapter 5  Rural Development", "Chapter 6  Employment", "Chapter 7  Infrastructure", "Chapter 8  Environment and Sustainable Development"]
        },
        "English": {
            "Hornbill": ["Chapter 1  The Portrait of a Lady", "Chapter 2  We’re Not Afraid to Die... If We Can All Be Together", "Chapter 3  Discovering Tut: The Saga Continues", "Chapter 4  The Ailing Planet: The Green Movement’s Role", "Chapter 5  The Browning Version", "Chapter 6  The Adventure", "Chapter 7  Silk Road", "Chapter 8  Father to Son"],
            "Snapshots": ["Chapter 1  The Summer of the Beautiful White Horse", "Chapter 2  The Address", "Chapter 3  Ranga’s Marriage", "Chapter 4  Albert Einstein at School", "Chapter 5  Mother's Day", "Chapter 6  The Tale of Melon City", "Chapter 7  The Midnight Visitor", "Chapter 8  The Hack Driver", "Chapter 9  The Proposal"]
        },
        "Political Science": {
            "Indian Constitution at Work": ["Chapter 1  Constitution: Why and How?", "Chapter 2  Rights in the Indian Constitution", "Chapter 3  Election and Representation", "Chapter 4  Executive", "Chapter 5  Legislature", "Chapter 6  Judiciary", "Chapter 7  Federalism", "Chapter 8  Local Governments", "Chapter 9  Constitution as a Living Document", "Chapter 10  The Philosophy of the Constitution"]
        }
    },
    "12th Science": {
        "Physics": {
            "Physics part-1": ["Chapter 1  Electric Charges and Fields","Chapter 2  Electrostatic Potential and Capacitance","Chapter 3  Current Electricity","Chapter 4  Moving Charges and Magnetism","Chapter 5  Magnetism and Matter","Chapter 6  Electromagnetic Induction","Chapter 7  Alternating Currents","Chapter 8  Electromagnetic Waves","Chapter 9  Ray Optics and Optical Instruments","Chapter 10  Wave Optics"],
            "Physics part-2": ["Chapter 11  Dual Nature of Matter and Radiation","Chapter 12  Atoms","Chapter 13  Nuclei","Chapter 14  Semiconductor Electronics: Materials, Devices and Simple Circuits"]
        },
        "Chemistry": {
            "Chemistry Part 1": ["Chapter 1  Solid State","Chapter 2  ","Chapter 3  Electrochemistry","Chapter 4  Chemical Kinetics","Chapter 5  Surface Chemistry"],
            "Chemistry Part 2": ["Chapter 6  The General Principles and Processes of Isolation of Elements","Chapter 7  The p-Block Elements","Chapter 8  The d- and f-Block Elements","Chapter 9  The Coordination Compounds","Chapter 10  The Haloalkanes and Haloarenes","Chapter 11  The Alcohols, Phenols and Ethers","Chapter 12  The Aldehydes, Ketones and Carboxylic Acids","Chapter 13  Organic Compounds Containing Nitrogen","Chapter 14  Biomolecules","Chapter 15  Polymers","Chapter 16  Chemistry in Everyday Life"]
        },
        "English": {
            "Flamingo": ["Chapter 1  The Last Lesson","Chapter 2  Lost Spring","Chapter 3  Deep Water","Chapter 4  The Rattrap","Chapter 5  Indigo","Chapter 6  Poets and Pancakes","Chapter 7  The Interview","Chapter 8  Going Places"],
            "Vistas": ["Chapter 1  The Third Level","Chapter 2  The Tiger King","Chapter 3  Journey to the End of the Earth","Chapter 4  The Enemy","Chapter 5  Should Wizard Hit Mommy?"]
        },
        "Mathematics": {
            "Mathematics1": ["Chapter 1  Relations and Functions","Chapter 2  Inverse Trigonometric Functions","Chapter 3  Matrices","Chapter 4  Determinants","Chapter 5  Continuity and Differentiability","Chapter 6  Application of Derivatives"],
            "Mathematics2": ["Chapter 7  Integrals","Chapter 8  Application of Integrals","Chapter 9  Differential Equations","Chapter 10  Vector Algebra","Chapter 11  Three-Dimensional Geometry","Chapter 12  Linear Programming","Chapter 13  Probability"],
        },
        "Biology": {
            "Biology": ["Chapter 1  Reproduction in Organisms","Chapter 2  Sexual Reproduction in Flowering Plants","Chapter 3  Human Reproduction","Chapter 4  Reproductive Health","Chapter 5  Principles of Inheritance and Variation","Chapter 6  Molecular Basis of Inheritance","Chapter 7  Evolution","Chapter 8  Human Health and Disease","Chapter 9  Strategies for Enhancement in Food Production","Chapter 10  Microbes in Human Welfare"]
        }
    },
    "12th Commerce": {
        "Accountancy": {
            "Accountancy1": ["Chapter 1  Accounting for Partnership Firms – Fundamentals","Chapter 2  Reconstitution of Partnership – Admission of a Partner","Chapter 3  Reconstitution of Partnership – Retirement and Death of a Partner","Chapter 4  Dissolution of Partnership Firm","Chapter 5  Accounting for Companies – Issue and Redemption of Shares","Chapter 6  Accounting for Companies – Issue and Redemption of Debentures","Chapter 7  Financial Statements of Companies","Chapter 8  Analysis of Financial Statements","Chapter 9  Computerised Accounting System (Optional)","Chapter 10  Project Work (Practical)"],
            "Accountancy2": []
        },
        "Business Studies": {
            "Business Studies Part-1": [],
            "Business Studies Part-2": []
        },
        "Economics ": {
            "Introductory Microeconomics": [],
            "Introductory Macroeconomics": ["Chapter 1  National Income and Related Aggregates","Chapter 2  Money and Banking","Chapter 3  Determination of Income and Employment","Chapter 4  Government Budget and the Economy","Chapter 5  Balance of Payments"]
        },
        "English": {
            "Flamingo": ["Chapter 1  The Last Lesson","Chapter 2  Lost Spring","Chapter 3  Deep Water","Chapter 4  The Rattrap","Chapter 5  Indigo","Chapter 6  Poets and Pancakes","Chapter 7  The Interview","Chapter 8  Going Places"],
            "Vistas": ["Chapter 1  The Third Level","Chapter 2  The Tiger King","Chapter 3  Journey to the End of the Earth","Chapter 4  The Enemy","Chapter 5  Should Wizard Hit Mommy?"]
        },
        "Mathematics": {
            "Mathematics": ["Chapter 1  Relations and Functions","Chapter 2  Inverse Trigonometric Functions","Chapter 3  Matrices","Chapter 4  Determinants","Chapter 5  Continuity and Differentiability","Chapter 6  Application of Derivatives","Chapter 7  Integrals","Chapter 8  Application of Integrals","Chapter 9  Differential Equations","Chapter 10  Vector Algebra","Chapter 11  Three Dimensional Geometry","Chapter 12  Linear Programming","Chapter 13  Probability"]
        },
    },
    "12th Humanities": {
        "History": {
            "Themes in World History-1": [],
            "Themes in World History-2": ["Chapter 1  The Industrial Revolution","Chapter 2  The Age of Revolutions","Chapter 3  Print Culture and the Modern World","Chapter 4  The Early 20th Century: Political and Social Developments","Chapter 5  The Rise of Nationalism in Europe","Chapter 6  The Nationalist Movement in Indo-China","Chapter 7  The Age of Democracies","Chapter 8  The World Between the Wars","Chapter 9  The Making of a Global World","Chapter 10  The Cold War Era and Decolonisation"],
            "Themes in World History-2": []
        },
        "Geography": {
            "Fundamentals of Human Geography": ["Chapter 1  Human Geography: Nature and Scope","Chapter 2  People"],
            "India People & Economy": []
        },
        "Economics": {
            "Introductory Macroeconomics": ["Chapter 1  National Income and Related Aggregates","Chapter 2  Money and Banking","Chapter 3  Determination of Income and Employment","Chapter 4  Government Budget and the Economy","Chapter 5  Balance of Payments"],
            "Indian Economic Development": ["Chapter 1  Development Policies and Experience (1947–1990)","Chapter 2  Economic Reforms since 1991","Chapter 3  Current Challenges facing the Indian Economy","Chapter 4  Development Experience of India – A Comparison with Neighbours"]
        },
        "English": {
            "Flamingo": ["Chapter 1  The Last Lesson","Chapter 2  Lost Spring","Chapter 3  Deep Water","Chapter 4  The Rattrap","Chapter 5  Indigo","Chapter 6  Poets and Pancakes","Chapter 7  The Interview","Chapter 8  Going Places"],
            "Vistas": ["Chapter 1  The Third Level","Chapter 2  The Tiger King","Chapter 3  Journey to the End of the Earth","Chapter 4  The Enemy","Chapter 5  Should Wizard Hit Mommy?"]
        },
        "Political Science": {
            "Contemporary world politics": [],
            "Politics in India Since Independence": []
        },
    }
};

const imagesMap = {
  class: {
    "6th": "media/class6.jpeg",
    "7th": "media/class7.jpg",
    "8th": "media/class8.jpeg",
    "9th": "media/class9.jpeg",
    "10th": "media/class10.jpeg",
    "11th Science": "media/class11science.jpeg",
    "11th Commerce": "media/class11commerce.jpeg",
    "11th Humanities": "media/class11arts.jpeg",
    "12th Science": "media/class12science.jpeg",
    "12th Commerce": "media/class12commerce.jpeg",
    "12th Humanities": "media/class12arts.jpeg"
  },
  subject: {
    "6th": {
      "Science": "media/class6Science.webp",
      "Mathematics": "media/class6Maths.webp",
      "English": "media/6thEnglish.jpeg",
      "Social Science": "media/6thSocialScience.jpg",
      "Hindi": "media/6thHindi.jpeg",
      "Sanskrit": "media/class6Sanskrit.webp",
    },
    "7th": {
      "Science": "media/class7Science.webp",
      "Mathematics": "media/class7maths.webp",
      "English": "media/7thEnglish.jpeg",
      "Social Science": "media/7thSocialScience.jpeg",
      "Hindi": "media/7thHindi.jpeg",
      "Sanskrit": "media/class7Sanskrit.webp"
    },
    "8th": {
      "Science": "media/8thScience.jpg",
      "Mathematics": "media/8thMaths.jpeg",
      "English": "media/8thEnglish.jpeg",
      "Social Science": "media/8thSocialScience.jpeg",
      "Hindi": "media/8thHindi.jpeg",
      "Sanskrit": "media/8thSanskrit.jpeg"
    },
    "9th": {
      "Science": "media/9thScience.jpeg",
      "Mathematics": "media/9thmaths.jpeg",
      "English": "media/9thEnglish.jpeg",
      "Social Science": "media/9thSST.jpeg",
      "Hindi": "media/9thHindi.jpeg"
    },
    "10th": {
      "Science": "media/10thScience.jpeg",
      "Mathematics": "media/10thMaths.jpeg",
      "English": "media/10thEnglish.jpeg",
      "Social Science": "media/10thSST.jpeg",
      "Hindi": "media/10thHindi.jpeg"
    },
    "11th Science": {
        "Physics": "media/11thSPhysics.jpeg",
        "Chemistry": "media/11thChemistry.jpeg",
        "English": "media/11thSEnglish.jpeg",
        "Mathematics": "media/11thMaths.jpeg",
        "Biology": "media/11thSBiology.jpeg"
    },
    "11th Commerce": {
        "Accountancy": "media/11thCAccountancy.jpg",
        "Business Studies": "media/11thBusinessStudies.jpg",
        "Economics": "media/11thEconomics.jpg",
        "English": "media/11thSEnglish.jpeg",
        "Mathematics": "media/11thMaths.jpeg"
    },
    "11th Humanities": {
         "History": "media/11thHistory.jpg",
         "Geography": "media/11thGeography.jpg",
         "Economics": "media/11thEconomics.jpg",
         "English": "media/11thSEnglish.jpeg",
         "Political Science": "media/11thPoliticalScience.jpg",     
    },
    "12th Science": {
        "Physics": "media/12thPhysics.jpg",
        "Chemistry": "media/12th chemistry.jpg",
        "English": "media/12thEnglish.jpg",
        "Mathematics": "media/12thMaths.jpg",
        "Biology": "media/12thBiology.jpg"
    },
    "12th Commerce": {
        "Accountancy": "media/12thAccountancy.jpg",
        "Business Studies": "media/12thBusiness.jpg",
        "Economics": "media/12thEconomics.jpg",
        "English": "media/12thEnglish.jpg",
        "Mathematics": "media/12thMaths.jpg"
    },
    "12th Humanities": {
         "History": "media/11thHistory.jpg",
         "Geography": "media/11thGeography.jpg",
         "Economics": "media/11thEconomics.jpg",
         "English": "media/12thEnglish.jpg",
         "Political Science": "media/11thPoliticalScience.jpg",     
    },
  },
  book: {
    "6th": {
      "Science": {
        "Curiosity": "media/class6Science.webp"
      },
      "Mathematics": {
        "Ganit Prakash": "media/class6Maths.webp"
      },
      "English": {
        "Honeysuckle": "media/class6EngHoneySuckle.webp",
        "A Pact with the Sun": "media/class6EngAPactWithTheSun.webp"
      },
      "Social Science": {
        "Our Past-1": "media/class6History.webp",
        "The Earth Our Habitat": "media/class6Geography.webp",
        "Social and Political Life-1": "media/class6PolScience.webp"
      },
      "Hindi": {
        "Vasant": "media/class6HindiVasant.webp",
        "Bal Ram Katha": "media/class6HindiRamKatha.webp"
      },
      "Sanskrit": {
        "Ruchira part-1": "media/class6Sanskrit.webp"
      }
    },
    "7th": {
      "Science": {
        "Curiosity": "images/curiosity7th.jpg"
      },
      "Mathematics": {
        "Ganit Prakash": "media/class7maths.webp",
      },
      "English": {
         "Honeycomb": "media/class7EngHoneyComb.webp",
         "An Alien Hand": "media/class7EngAnAlienHand.webp"
      },
      "Social Science": {
        "History": "media/class7History.webp",
        "Geography": "media/class7Geography.webp",
        "Political Science": "media/class7Polscience.webp"
      },
      "Hindi": {
        "Vasant": "media/class7HindiVasant.webp",
        "Bal Mahabharat Katha": "media/class7Mahabharat.webp"
      },
      "Sanskrit": {
        "Ruchira Part-2": "media/class7Sanskrit.webp"
      }
    },
    "8th": {
        "Science": {
            "Science": "media/8thScience.jpg"
        },
        "Mathematics": {
            "Mathematics": "media/8thMaths.jpeg"
        },
        "English": {
            "HoneyDew": "media/8thHoneyDew.jpeg",
            "It so Happened": "media/8thItSoHappend.jpeg"
        },
        "Social Science": {
            "History": "media/8thHistory.jpeg",
            "Geography": "media/8thGeography.jpeg",
            "Political Science": "media/8thPolScience.jpeg"
        },
        "Hindi": {
            "Vasant": "media/8thvasant.jpeg",
            "Bharat Ki Khoj": "media/8thBharatKiKhoj.jpeg"
        },
        "Sanskrit": {
            "Ruchira part-3": "media/8thSanskrit.jpeg"
        }
    },
    "9th": {
        "Science": {
            "Science": "media/9thScience.jpeg"
        },
        "Mathematics": {
            "Mathematics": "media/9thmaths.jpeg"
        },
        "English": {
            "Beehive": "media/9thBeehive.jpeg",
            "Moments": "media/9thmoments.jpeg"
        },
        "Social Science": {
            "History": "media/9thhistory.jpeg",
            "Geography": "media/9thgeography.jpeg",
            "Political Science": "media/9thcivics.jpeg",
            "Economics": "media/9thEconomics.jpeg"
        },
        "Hindi": {
            "Kshitij": "media/9thKshitij.jpeg",
            "Kritika": "media/9thKritika.jpeg"
        },
    },
    "10th": {
        "Science": {
            "Science": "media/10thScience.jpeg"
        },
        "Mathematics": {
            "Mathematics": "media/10thMaths.jpeg"
        },
        "English": {
            "First Flight": "media/10thFirstFlight.jpeg",
            "Footprints Without Feet": "media/10thFootprints.jpeg"
        },
        "Social Science": {
            "History": "media/10thHistory.jpeg",
            "Geography": "media/10thgeography.jpeg",
            "Political Science": "media/10thCivics.jpeg",
            "Economics": "media/10theconomics.jpeg"
        },
        "Hindi": {
            "Kshitij": "media/10thKshitij.jpeg",
            "Kritika": "media/10thKritika.jpeg"
        },
    },
    "11th Science": {
        "Physics": {
            "Physics Part 1": "media/11thSPhysics.jpeg",
            "Physics Part 2": "media/11thSPhysics.jpeg"
        },
        "Chemistry": {
            "Chemistry Part 1": "media/11thChemistry1.jpeg",
            "Chemistry Part 2": "media/11thChemistry2.jpeg"
        },
        "English": {
            "Hornbill": "media/11thHornbill.jpeg",
            "Snapshots": "media/11thsnapshots.jpeg"
        },
        "Mathematics": {
            "Mathematics": "media/11thMaths.jpeg"
        },
        "Biology": {
            "Biology": "media/11thSBiology.jpeg"
        }
    },
    "11th Commerce": {
        "Accountancy": {
            "Accountancy": "media/11thCAccountancy.jpg"
        },
        "Business Studies": {
            "Business Studies": "media/11thBusinessStudies.jpg"
        },
        "Economics": {
            "Indian Economic Development": "media/11thIndianEconomicDevelopment.jpg",
            "Statistics for Economics": "media/11thStatisticsForEconomics.jpg"
        },
        "English": {
            "Hornbill": "media/11thHornbill.jpeg",
            "Snapshots": "media/11thsnapshots.jpeg"
        },
        "Mathematics": {
            "Mathematics": "media/11thMaths.jpeg"
        },
    },
    "11th Humanities": {
        "History": {
            "Themes in World History": "media/11thHistory.jpg"
        },
        "Geography": {
            "Geography": "media/11thGeography.jpg"
        },
        "Economics": {
            "Indian Economic Development": "media/11thIndianEconomicDevelopment.jpg",
            "Statistics for Economics": "media/11thStatisticsForEconomics.jpg"
        },
        "English": {
            "Hornbill": "media/11thHornbill.jpeg",
            "Snapshots": "media/11thsnapshots.jpeg"
        },
        "Political Science": {
            "Indian Constitution at Work": "media/11thPoliticalScience.jpg"
        }
    },
    "12th Science": {
        "Physics": {
            "Physics part-1": "media/12thPhysics.jpg",
            "Physics part-2": "media/12thPhysics.jpg"
        },
        "Chemistry": {
            "Chemistry Part 1": "media/12th chemistry.jpg",
            "Chemistry Part 2": "media/12th chemistry.jpg"
        },
        "English": {
            "Flamingo": "media/12thFlamingo.jpg",
            "Vistas": "media/12thVistas.jpg"
        },
        "Mathematics": {
            "Mathematics1": "media/12thMaths1.jpg",
            "Mathematics2": "media/12thMaths2.jpg"
        },
        "Biology": {
            "Biology": "media/12thBiology.jpg"
        }
    },
    "12th Commerce": {
        "Accountancy": {
            "Accountancy1": "media/12thAccounts1.jpg",
            "Accountancy2": "media/12thAccounts2.jpg"
        },
        "Business Studies": {
            "Business Studies Part-1": "media/12thBusiness1.jpg",
            "Business Studies Part-2": "media/12thBusiness2.jpg"
        },
        "Economics": {
            "Introductory Microeconomics": "media/12thEcoMicro.jpg",
            "Introductory Macroeconomics": "media/12thEcomacro.jpg"
        },
        "English": {
            "Flamingo": "media/12thFlamingo.jpg",
            "Vistas": "media/12thVistas.jpg"
        },
        "Mathematics": {
            "Mathematics1": "media/12thMaths1.jpg",
            "Mathematics2": "media/12thMaths2.jpg"
        },
    },
    "12th Humanities": {
        "History": {
            "Themes in World History-1": "media/12History1.jpg",
            "Themes in World History-2": "media/12thHistory2.jpg",
            "Themes in World History-3": "media/12thHistory3.jpg"
        },
        "Geography": {
            "Fundamentals of Human Geography": "media/12thGeo1.jpg",
            "India People & Economy": "media/12thGeo2.jpg"
        },
        "Economics": {
            "Introductory Microeconomics": "media/12thEcoMicro.jpg",
            "Introductory Macroeconomics": "media/12thEcomacro.jpg"
        },
        "English": {
            "Hornbill": "media/11thHornbill.jpeg",
            "Snapshots": "media/11thsnapshots.jpeg"
        },
        "Political Science": {
            "Contemporary world politics": "media/12thcivics1.jpg",
            "Politics in India Since Independence": "media/12thcivics2.jpg"
        }
    }
  }
};

// Current Selection State
let currentLevel = "class";
let selectedClass = "";
let selectedSubject = "";
let selectedBook = "";

const selectionGrid = document.getElementById("selection-grid");
const loaderOverlay = document.getElementById("loader-overlay");

displayClasses();

function displayClasses() {
    currentLevel = "class";
    document.querySelector('.page-title').textContent = "Select Your Class";
    selectionGrid.innerHTML = "";
    Object.keys(data).forEach(cls => {
        addGridItem(cls, "class");
    });
}

function displaySubjects(cls) {
    currentLevel = "subject";
    selectedClass = cls;
    document.querySelector('.page-title').textContent = "Select Your Subject"; 
    selectionGrid.innerHTML = "";
    Object.keys(data[cls]).forEach(subject => {
        addGridItem(subject, "subject");
    });
}

function displayBooks(subject) {
    currentLevel = "book";
    selectedSubject = subject;
    document.querySelector('.page-title').textContent = "Select Your Book"; 
    selectionGrid.innerHTML = "";
    Object.keys(data[selectedClass][subject]).forEach(book => {
        addGridItem(book, "book");
    });
}

function displayChapters(book) {
    currentLevel = "chapter";
    selectedBook = book;
    document.querySelector('.page-title').textContent = "Select Your Chapter"; 
    selectionGrid.innerHTML = "";
    
    data[selectedClass][selectedSubject][book].forEach(chapter => {
        addGridItem(chapter, "chapter");
    });
}

function addGridItem(name, type) {
    const div = document.createElement("div");
    div.classList.add("grid-item");

    let imgSrc = "images/sample.jpg";

    if (type === "class") {
        imgSrc = imagesMap.class[name] || imgSrc;
    }
    else if (type === "subject") {
        if (imagesMap.subject[selectedClass] && imagesMap.subject[selectedClass][name]) {
            imgSrc = imagesMap.subject[selectedClass][name];
        }
    }
    else if (type === "book") {
        if (
            imagesMap.book[selectedClass] &&
            imagesMap.book[selectedClass][selectedSubject] &&
            imagesMap.book[selectedClass][selectedSubject][name]
        ) {
            imgSrc = imagesMap.book[selectedClass][selectedSubject][name];
        }
    }
    else if (type === "chapter") {
        // No image for chapters
        imgSrc = null;
    }

    // Set innerHTML conditionally
    div.innerHTML = imgSrc
        ? `<img src="${imgSrc}" alt="${name}"><p>${name}</p>`
        : `<p>${name}</p>`;

    div.addEventListener("click", () => {
        if (type === "class") displaySubjects(name);
        else if (type === "subject") displayBooks(name);
        else if (type === "book") displayChapters(name);
        else if (type === "chapter") startQuiz(name);
    });

    selectionGrid.appendChild(div);
}



function startQuiz(chapter) {
    loaderOverlay.classList.add("show");
    setTimeout(() => {
        // encodeURIComponent to handle spaces & special chars safely
        window.location.href = `quizmain.html?class=${encodeURIComponent(selectedClass)}&subject=${encodeURIComponent(selectedSubject)}&book=${encodeURIComponent(selectedBook)}&chapter=${encodeURIComponent(chapter)}`;
    }, 1500);
}
