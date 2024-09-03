const home = document.getElementById("home-page");
const quizPage = document.getElementById("quiz-page");

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
        choice1: "Slytherin",
        choice2: "Gryffindor",
        choice3: "Hufflepuff",
        choice4: "Ravenclaw",
        answer: 2,
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
        choice1: "Slytherin",
        choice2: "Gryffindor",
        choice3: "Ravenclaw",
        choice4: "Hufflepuff",
        answer: 1,
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
const maxQuestions = 6;


// Function to show quiz page and hide homepage when a level is selected
function showQuiz() {
    home.style.display = "none";
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



// Function to select a random question + choices from the questions array
getNewQuestion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    })
    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};


function rightAnswer() {
    if (selectedAnswer === currentQuestion.answer) {
        alert("Well done!");
    }
}

// Function to add an event listener every time an answer is clicked 
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        if (selectedAnswer == currentQuestion.answer) {
            alert("Well done, that's the right answer!")
        } else {
            alert("Oops that's not quite right")
        };
        getNewQuestion();
    });
});

function incrementScore() {

}

startGame();