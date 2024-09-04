const home = document.getElementById("home-page");
const quizPage = document.getElementById("quiz-page");
const endGamePage = document.getElementById("end-game-page");

const question = document.getElementById('question-text');
const choices = Array.from(document.getElementsByClassName('choice-text'));




// Level selection buttons
const easyBtn = document.getElementById("easy");
const mediumBtn = document.getElementById("medium");
const hardBtn = document.getElementById("hard");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [{
        question: "In which Hogwarts house is Harry Potter?",
        choice1: "Ravenclaw",
        choice2: "Slytherin",
        choice3: "Gryffindor",
        choice4: "Hufflepuff",
        answer: 3,
    },
    {
        question: "The juice of which fruit or vegetable is commonly served at Hogwarts?",
        choice1: "Apple",
        choice2: "Cucumber",
        choice3: "Orange",
        choice4: "Pumpkin",
        answer: 4,
    },
    {
        question: "Neville Longbottom can often be found looking for what sort of pet?",
        choice1: "Frog",
        choice2: "Dog",
        choice3: "Rat",
        choice4: "Toad",
        answer: 4,
    },
    {
        question: "Ron Weasley is very good at which game?",
        choice1: "Snap",
        choice2: "Scrabble",
        choice3: "Chess",
        choice4: "Boggle",
        answer: 3,
    },
    {
        question: "Hermione's parents are described as what?",
        choice1: "Weird",
        choice2: "Muggles",
        choice3: "Old",
        choice4: "Gnomes",
        answer: 2,
    },
    {
        question: "What sort of pet has Hagrid always wanted?",
        choice1: "A snake",
        choice2: "A spider",
        choice3: "A unicorn",
        choice4: "A dragon",
        answer: 4,
    },
    {
        question: "Professor Snape is head of which Hogwarts house?",
        choice1: "Ravenclaw",
        choice2: "Slytherin",
        choice3: "Gryffindor",
        choice4: "Hufflepuff",
        answer: 2,
    },
    {
        question: "Professor Quirrell wears what sort of headwear?",
        choice1: "A baseball cap",
        choice2: "A bonnet",
        choice3: "A turban",
        choice4: "A swimming cap",
        answer: 3,
    },
    {
        question: "Harry can talk to what kind of animals?",
        choice1: "Snakes",
        choice2: "Cats",
        choice3: "Dolphins",
        choice4: "Crows",
        answer: 1,
    },
    {
        question: "What sort of creature is Dobby?",
        choice1: "Goblin",
        choice2: "Gnome",
        choice3: "House elf",
        choice4: "Dementor",
        answer: 3,
    },
];

const correctAnswerPoints = 1;
const maxQuestions = 10;

let finishMessage = document.getElementById("finish-message");
let finalScore = document.getElementById("total-score");


// Function to show quiz page and hide homepage when a level is selected
function showQuiz() {
    home.style.display = "none";
    endGamePage.style.display = "none";
    quizPage.style.display = "block";
}

// Displays the quiz page when level button is clicked
easy.addEventListener("click", showQuiz);


// function to start the game from the beginning, resets score and question counter
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

// Function to display endgame message and total score once the quiz is complete
function endGame() {
    if (maxQuestions == questionCounter) {
        home.style.display = "none";
        quizPage.style.display = "none";
        endGamePage.style.display = "block";
    };
    finalScore.innerText = `You scored ${score}/${questions.length}`;
    if (score <= 4) {
        finishMessage.innerText = "It looks like someone needs extra tutoring..."
    } else if (score <= 6) {
        finishMessage.innerText = "Not bad, not bad, but a but of extra studying wouldn't hurt!"
    } else {
        finishMessage.innerText = "Well done, you really do know your way around the wizarding world!"
    };
};

// Function to select a random question + choices from the questions array
getNewQuestion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });
    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;

    if (questions.length == maxQuestions) {
        endGame();
    };
};

// Function to increment the score value during the quiz
function incrementScore() {
    document.getElementById("score").innerHTML = `Score: ${score}/${questions.length}`;
};



// Function to add an event listener every time an answer is clicked 
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        if (selectedAnswer == currentQuestion.answer) {
            alert("Well done, that's the right answer!");
            score++;
        } else {
            alert("Oops that's not quite right")
        };
        incrementScore();
        getNewQuestion();
    });
});




startGame();