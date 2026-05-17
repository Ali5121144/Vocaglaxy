const categories = {
    animals: {
        title: "Animals",
        image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80"
    },
    school: {
        title: "School",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
    },
    travel: {
        title: "Travel",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80"
    },
    food: {
        title: "Food",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
    },
    minecraft: {
        title: "Game / Minecraft",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
    },
    places: {
        title: "Famous Places",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80"
    }
};

const learningWords = {
    elementary: [
        { word: "Happy", meaning: "Feeling good", example: "I am happy today." },
        { word: "Big", meaning: "Large in size", example: "The elephant is big." },
        { word: "Small", meaning: "Little in size", example: "The mouse is small." },
        { word: "Clean", meaning: "Not dirty", example: "My room is clean." },
        { word: "Fast", meaning: "Moving quickly", example: "The car is fast." },
        { word: "Kind", meaning: "Nice to others", example: "My teacher is kind." },
        { word: "Cold", meaning: "Not warm", example: "The water is cold." },
        { word: "Easy", meaning: "Not difficult", example: "This lesson is easy." },
        { word: "Friend", meaning: "A person you like", example: "Ali is my friend." },
        { word: "Bright", meaning: "Full of light", example: "The sun is bright." }
    ],
    preIntermediate: [
        { word: "Journey", meaning: "A trip", example: "We had a long journey." },
        { word: "Brave", meaning: "Not afraid", example: "The brave boy helped his friend." },
        { word: "Improve", meaning: "Become better", example: "I want to improve my English." },
        { word: "Careful", meaning: "Doing something with attention", example: "Be careful on the road." },
        { word: "Valuable", meaning: "Important or useful", example: "This book is valuable." },
        { word: "Common", meaning: "Usual", example: "This is a common mistake." },
        { word: "Prepare", meaning: "Get ready", example: "I prepare for my exam." },
        { word: "Decide", meaning: "Choose", example: "I decided to study English." },
        { word: "Protect", meaning: "Keep safe", example: "Parents protect children." },
        { word: "Simple", meaning: "Easy to understand", example: "This answer is simple." }
    ],
    intermediate: [
        { word: "Confident", meaning: "Sure about yourself", example: "She is confident when speaking English." },
        { word: "Achievement", meaning: "Something successfully done", example: "Passing the test was a big achievement." },
        { word: "Challenge", meaning: "Something difficult to do", example: "Learning new words is a challenge." },
        { word: "Opportunity", meaning: "A chance", example: "This course is a good opportunity." },
        { word: "Responsible", meaning: "Having duty", example: "A teacher is responsible for students." },
        { word: "Consequence", meaning: "Result", example: "Every action has a consequence." },
        { word: "Efficient", meaning: "Working well without waste", example: "This method is efficient." },
        { word: "Accurate", meaning: "Correct", example: "Your answer is accurate." },
        { word: "Persuade", meaning: "Make someone agree", example: "He tried to persuade his friend." },
        { word: "Essential", meaning: "Very necessary", example: "Practice is essential for success." }
    ]
};

function q(question, correct, wrongAnswers, image) {
    return {
        question: question,
        correct: correct,
        answers: shuffle([correct, ...wrongAnswers]),
        image: image
    };
}

function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function makeWrongAnswers(correct, words) {
    return shuffle(
        words
            .map(item => capitalize(item.word))
            .filter(word => word.toLowerCase() !== correct.toLowerCase())
    ).slice(0, 3);
}

function makeWrongMeanings(correct, words) {
    return shuffle(
        words
            .map(item => item.meaning)
            .filter(meaning => meaning !== correct)
    ).slice(0, 3);
}

function makeCategory(words) {
    return {
        elementary: shuffle(words).map(item =>
            q(
                `Look at the picture. Which word is this?`,
                capitalize(item.word),
                makeWrongAnswers(item.word, words),
                item.image
            )
        ),

        preIntermediate: shuffle(words).map(item =>
            q(
                `Look at the picture. What does "${capitalize(item.word)}" mean?`,
                item.meaning,
                makeWrongMeanings(item.meaning, words),
                item.image
            )
        ),

        intermediate: shuffle(words).map(item =>
            q(
                `Choose the best vocabulary word for this meaning: "${item.meaning}"`,
                capitalize(item.word),
                makeWrongAnswers(item.word, words),
                item.image
            )
        )
    };
}

const quizData = {
    animals: makeCategory([
        { word: "lion", meaning: "A large wild cat", image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80" },
        { word: "zebra", meaning: "An animal with black and white stripes", image: "https://images.unsplash.com/photo-1526095179574-86e545346ae6?auto=format&fit=crop&w=800&q=80" },
        { word: "bird", meaning: "An animal that can fly", image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80" },
        { word: "cow", meaning: "A farm animal that gives milk", image: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=800&q=80" },
        { word: "dog", meaning: "A common pet", image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80" },
        { word: "elephant", meaning: "A large animal with a trunk", image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=80" },
        { word: "cat", meaning: "A pet that says meow", image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80" },
        { word: "fish", meaning: "An animal that lives in water", image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80" },
        { word: "turtle", meaning: "A slow animal with a shell", image: "https://images.unsplash.com/photo-1556203928-1d35735ff7fd?auto=format&fit=crop&w=800&q=80" },
        { word: "rabbit", meaning: "An animal with long ears", image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80" }
    ]),

    school: makeCategory([
        { word: "book", meaning: "A thing students read", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80" },
        { word: "teacher", meaning: "A person who teaches", image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=800&q=80" },
        { word: "classroom", meaning: "A room for learning", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80" },
        { word: "pencil", meaning: "A tool for writing", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80" },
        { word: "library", meaning: "A place with books", image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80" },
        { word: "assignment", meaning: "A school task", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80" },
        { word: "subject", meaning: "An area of study", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80" },
        { word: "revise", meaning: "Study again", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80" },
        { word: "knowledge", meaning: "Information you know", image: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&w=800&q=80" },
        { word: "attendance", meaning: "Being present in class", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" }
    ]),

    travel: makeCategory([
        { word: "passport", meaning: "A travel identity document", image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80" },
        { word: "ticket", meaning: "Paper or digital travel pass", image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800&q=80" },
        { word: "airport", meaning: "Place where planes arrive", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80" },
        { word: "luggage", meaning: "Travel bags", image: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&w=800&q=80" },
        { word: "destination", meaning: "Place you go to", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" },
        { word: "departure", meaning: "Leaving", image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&w=800&q=80" },
        { word: "arrival", meaning: "Reaching a place", image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80" },
        { word: "tourist", meaning: "Person visiting a place", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80" },
        { word: "accommodation", meaning: "Place to stay", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" },
        { word: "sightseeing", meaning: "Visiting interesting places", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80" }
    ]),

    food: makeCategory([
        { word: "apple", meaning: "A fruit", image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=80" },
        { word: "bread", meaning: "Food made from flour", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80" },
        { word: "water", meaning: "A drink", image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80" },
        { word: "rice", meaning: "Small white grains eaten as food", image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80" },
        { word: "vegetable", meaning: "Healthy plant food", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80" },
        { word: "delicious", meaning: "Very tasty", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80" },
        { word: "ingredient", meaning: "Food part used in a recipe", image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80" },
        { word: "recipe", meaning: "Cooking instructions", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80" },
        { word: "spicy", meaning: "Hot taste", image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80" },
        { word: "nutritious", meaning: "Good for health", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80" }
    ]),

    minecraft: makeCategory([
        { word: "block", meaning: "Cube-shaped object", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80" },
        { word: "craft", meaning: "Make something", image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=800&q=80" },
        { word: "mine", meaning: "Dig for materials", image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=80" },
        { word: "build", meaning: "Create a structure", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80" },
        { word: "tool", meaning: "Object used to do work", image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80" },
        { word: "shelter", meaning: "Safe place to stay", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80" },
        { word: "survive", meaning: "Stay alive", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80" },
        { word: "resource", meaning: "Useful material", image: "https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=800&q=80" },
        { word: "inventory", meaning: "Place to keep items", image: "https://images.unsplash.com/photo-1524564965825-5d1b7f8f93d1?auto=format&fit=crop&w=800&q=80" },
        { word: "spawn", meaning: "Appear in a game", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80" }
    ]),

    places: makeCategory([
        { word: "Eiffel Tower", meaning: "A famous tower in Paris", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80" },
        { word: "Great Wall", meaning: "A famous wall in China", image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80" },
        { word: "Colosseum", meaning: "A famous ancient building in Rome", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80" },
        { word: "Pyramids", meaning: "Famous ancient buildings in Egypt", image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80" },
        { word: "Statue of Liberty", meaning: "A famous statue in New York", image: "https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?auto=format&fit=crop&w=800&q=80" },
        { word: "Big Ben", meaning: "A famous clock tower in London", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80" },
        { word: "Taj Mahal", meaning: "A famous building in India", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80" },
        { word: "Burj Khalifa", meaning: "A very tall building in Dubai", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80" },
        { word: "Machu Picchu", meaning: "A famous place in Peru", image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80" },
        { word: "Mount Fuji", meaning: "A famous mountain in Japan", image: "https://images.unsplash.com/photo-1570459027562-4a916cc6113f?auto=format&fit=crop&w=800&q=80" }
    ])
};

let currentUser = "";
let selectedCategory = "";
let currentLevel = "";
let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let timeLeft = 15;
let timerInterval;
let learningLevel = "";
let userXP = 0;
let userCoins = 0;
let userStreak = 0;
let currentQuizQuestions = [];

const loginPage = document.getElementById("loginPage");
const homePage = document.getElementById("homePage");
const levelPage = document.getElementById("levelPage");
const learnLevelPage = document.getElementById("learnLevelPage");
const learningPage = document.getElementById("learningPage");
const quizPage = document.getElementById("quizPage");
const resultPage = document.getElementById("resultPage");

const userName = document.getElementById("userName");
const bestScore = document.getElementById("bestScore");
const categoryGrid = document.getElementById("categoryGrid");
const selectedCategoryTitle = document.getElementById("selectedCategoryTitle");
const wordCards = document.getElementById("wordCards");
const learningTitle = document.getElementById("learningTitle");

const quizCategory = document.getElementById("quizCategory");
const quizLevel = document.getElementById("quizLevel");
const questionImage = document.getElementById("questionImage");
const questionText = document.getElementById("questionText");
const answerButtons = document.getElementById("answerButtons");
const scoreText = document.getElementById("score");
const questionNumber = document.getElementById("questionNumber");
const nextBtn = document.getElementById("nextBtn");
const finalScore = document.getElementById("finalScore");
const timerText = document.getElementById("timer");
const timerFill = document.getElementById("timerFill");

const xpText = document.getElementById("xpText");
const coinText = document.getElementById("coinText");
const streakText = document.getElementById("streakText");

function createCategories() {
    categoryGrid.innerHTML = "";

    Object.keys(categories).forEach(key => {
        const card = document.createElement("div");
        card.className = "category-card";
        card.onclick = () => chooseCategory(key);

        card.innerHTML = `
            <img src="${categories[key].image}" alt="${categories[key].title}">
            <div class="category-card-content">
                <h2>${categories[key].title}</h2>
                <p>Choose level and start picture quiz</p>
            </div>
        `;

        categoryGrid.appendChild(card);
    });
}

function playSound(type) {
    try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        const audio = new AudioContextClass();

        function tone(freq, start, duration, volume, wave) {
            const oscillator = audio.createOscillator();
            const gain = audio.createGain();

            oscillator.type = wave;
            oscillator.frequency.setValueAtTime(freq, audio.currentTime + start);

            oscillator.connect(gain);
            gain.connect(audio.destination);

            gain.gain.setValueAtTime(volume, audio.currentTime + start);
            gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + start + duration);

            oscillator.start(audio.currentTime + start);
            oscillator.stop(audio.currentTime + start + duration);
        }

        if (type === "correct") {
            tone(600, 0, 0.08, 0.08, "square");
            tone(900, 0.08, 0.10, 0.08, "square");
            tone(1200, 0.18, 0.12, 0.08, "square");
        } else if (type === "wrong") {
            tone(260, 0, 0.15, 0.08, "sawtooth");
            tone(170, 0.15, 0.20, 0.08, "sawtooth");
        } else if (type === "time") {
            tone(500, 0, 0.08, 0.07, "square");
            tone(350, 0.10, 0.08, 0.07, "square");
            tone(220, 0.20, 0.12, 0.07, "square");
        } else if (type === "click") {
            tone(800, 0, 0.06, 0.04, "square");
        } else if (type === "finish") {
            tone(500, 0, 0.08, 0.08, "square");
            tone(700, 0.10, 0.08, 0.08, "square");
            tone(900, 0.20, 0.08, 0.08, "square");
            tone(1200, 0.30, 0.18, 0.08, "square");
        }
    } catch (error) {
        console.log("Sound not supported.");
    }
}

function showPage(page) {
    clearInterval(timerInterval);

    loginPage.classList.remove("active");
    homePage.classList.remove("active");
    levelPage.classList.remove("active");
    learnLevelPage.classList.remove("active");
    learningPage.classList.remove("active");
    quizPage.classList.remove("active");
    resultPage.classList.remove("active");

    page.classList.add("active");
}

function loginUser() {
    const name = document.getElementById("usernameInput").value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    currentUser = name;
    localStorage.setItem("englishUser", currentUser);

    userName.textContent = currentUser;
    loadBestScore();
    loadRewards();
    createCategories();
    showPage(homePage);
}

function logoutUser() {
    localStorage.removeItem("englishUser");
    currentUser = "";
    showPage(loginPage);
}

function scrollToCategories() {
    document.getElementById("categoriesTitle").scrollIntoView({ behavior: "smooth" });
}

function chooseCategory(category) {
    playSound("click");
    selectedCategory = category;
    selectedCategoryTitle.textContent = categories[category].title + " - Choose Level";
    showPage(levelPage);
}

function openLearnLevelPage() {
    playSound("click");
    showPage(learnLevelPage);
}

function openLearningPage(level) {
    playSound("click");

    learningLevel = level;
    learningTitle.textContent = "Vocabulary Learning - " + formatLevel(level);
    wordCards.innerHTML = "";

    learningWords[level].forEach(item => {
        const card = document.createElement("div");
        card.className = "word-card";

        card.innerHTML = `
            <h2>${item.word}</h2>
            <p><strong>Meaning:</strong> ${item.meaning}</p>
            <p class="example"><strong>Example:</strong> ${item.example}</p>
            <button onclick="speakWord('${item.word}')">🔊 Listen</button>
        `;

        wordCards.appendChild(card);
    });

    showPage(learningPage);
}

function speakWord(word) {
    const speech = new SpeechSynthesisUtterance(word);
    speech.lang = "en-US";
    speech.rate = 0.85;
    speechSynthesis.speak(speech);
}

function startLearningQuiz() {
    selectedCategory = "learning";
    currentLevel = learningLevel;

    categories.learning = {
        title: "Vocabulary Learning",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
    };

    quizData.learning = {};
    quizData.learning[currentLevel] = learningWords[currentLevel].map(item => {
        return q(
            `What does "${item.word}" mean?`,
            item.meaning,
            makeLearningWrongMeanings(item.meaning, learningWords[currentLevel]),
            categories.learning.image
        );
    });

    startQuiz(currentLevel);
}

function makeLearningWrongMeanings(correctMeaning, words) {
    return shuffle(words.map(item => item.meaning).filter(meaning => meaning !== correctMeaning)).slice(0, 3);
}

function startQuiz(level) {
    playSound("click");

    currentLevel = level;
    currentQuestionIndex = 0;
    score = 0;
    answered = false;

    currentQuizQuestions = shuffle(quizData[selectedCategory][currentLevel]).slice(0, 10);

    quizCategory.textContent = categories[selectedCategory].title;
    quizLevel.textContent = formatLevel(level);
    scoreText.textContent = score;

    showPage(quizPage);
    loadQuestion();
}

function loadQuestion() {
    clearInterval(timerInterval);
    answered = false;
    nextBtn.style.display = "none";

    const data = currentQuizQuestions[currentQuestionIndex];

    questionImage.src = data.image;
    questionImage.alt = data.correct;
    questionText.textContent = data.question;
    questionNumber.textContent = currentQuestionIndex + 1;
    answerButtons.innerHTML = "";

    data.answers.forEach(answer => {
        const button = document.createElement("button");
        button.className = "answer-btn";
        button.textContent = answer;
        button.onclick = () => checkAnswer(button, answer);
        answerButtons.appendChild(button);
    });

    startTimer();
}

function startTimer() {
    timeLeft = 15;
    timerText.textContent = timeLeft;
    timerFill.style.width = "100%";
    timerFill.style.background = "#43a047";

    timerInterval = setInterval(() => {
        timeLeft--;
        timerText.textContent = timeLeft;

        const widthPercent = (timeLeft / 15) * 100;
        timerFill.style.width = widthPercent + "%";

        if (timeLeft <= 5) {
            timerFill.style.background = "#e53935";
        } else if (timeLeft <= 10) {
            timerFill.style.background = "#f9a825";
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeUp();
        }
    }, 1000);
}

function checkAnswer(button, selectedAnswer) {
    if (answered) return;

    answered = true;
    clearInterval(timerInterval);

    const data = currentQuizQuestions[currentQuestionIndex];
    const allButtons = document.querySelectorAll(".answer-btn");

    allButtons.forEach(btn => btn.classList.add("disabled"));

    if (selectedAnswer === data.correct) {
        button.classList.add("correct");
        score++;
        scoreText.textContent = score;
        addCorrectReward();
        playSound("correct");
    } else {
        button.classList.add("wrong");
        playSound("wrong");

        allButtons.forEach(btn => {
            if (btn.textContent === data.correct) {
                btn.classList.add("correct");
            }
        });
    }

    nextBtn.style.display = "block";
}

function timeUp() {
    if (answered) return;

    answered = true;
    playSound("time");

    const data = currentQuizQuestions[currentQuestionIndex];
    const allButtons = document.querySelectorAll(".answer-btn");

    allButtons.forEach(btn => {
        btn.classList.add("disabled");

        if (btn.textContent === data.correct) {
            btn.classList.add("correct");
        }
    });

    nextBtn.style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < currentQuizQuestions.length) {
        loadQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    clearInterval(timerInterval);
    playSound("finish");

    finalScore.textContent = score;
    addFinishReward();
    saveBestScore();
    loadBestScore();
    showPage(resultPage);
}

function saveBestScore() {
    const key = `best_${currentUser}_${selectedCategory}_${currentLevel}`;
    const oldScore = Number(localStorage.getItem(key)) || 0;

    if (score > oldScore) {
        localStorage.setItem(key, score);
    }
}

function loadBestScore() {
    let best = 0;

    Object.keys(localStorage).forEach(key => {
        if (key.startsWith(`best_${currentUser}_`)) {
            best = Math.max(best, Number(localStorage.getItem(key)));
        }
    });

    bestScore.textContent = best;
}

function loadRewards() {
    userXP = Number(localStorage.getItem(`xp_${currentUser}`)) || 0;
    userCoins = Number(localStorage.getItem(`coins_${currentUser}`)) || 0;
    userStreak = Number(localStorage.getItem(`streak_${currentUser}`)) || 0;
    updateRewardDisplay();
}

function updateRewardDisplay() {
    xpText.textContent = userXP;
    coinText.textContent = userCoins;
    streakText.textContent = userStreak;
}

function saveRewards() {
    localStorage.setItem(`xp_${currentUser}`, userXP);
    localStorage.setItem(`coins_${currentUser}`, userCoins);
    localStorage.setItem(`streak_${currentUser}`, userStreak);
}

function addCorrectReward() {
    userXP += 10;
    userCoins += 2;
    saveRewards();
    updateRewardDisplay();
}

function addFinishReward() {
    userXP += score * 5;
    userCoins += score;

    if (score >= 7) {
        userStreak += 1;
    } else {
        userStreak = 0;
    }

    saveRewards();
    updateRewardDisplay();
}

function restartQuiz() {
    startQuiz(currentLevel);
}

function goHome() {
    createCategories();
    showPage(homePage);
}

function formatLevel(level) {
    if (level === "elementary") return "Elementary";
    if (level === "preIntermediate") return "Pre-Intermediate";
    if (level === "intermediate") return "Intermediate";
    return level;
}

window.onload = function () {
    const savedUser = localStorage.getItem("englishUser");

    if (savedUser) {
        currentUser = savedUser;
        userName.textContent = currentUser;
        loadBestScore();
        loadRewards();
        createCategories();
        showPage(homePage);
    } else {
        showPage(loginPage);
    }
};