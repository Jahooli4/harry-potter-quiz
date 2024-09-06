const home = document.getElementById("home-page");
const quizPage = document.getElementById("quiz-page");
const endGamePage = document.getElementById("end-game-page");

const question = document.getElementById('question-text');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const levelTitle = document.getElementById('level-title');




// Level selection buttons
const easyBtn = document.getElementById("easy");
const mediumBtn = document.getElementById("medium");
const hardBtn = document.getElementById("hard");

// Play again button
const playAgainBtn = document.getElementById("play-again-btn");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Questions for the easy level
let easyQuestions = [{
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

// Questions for the medium level
let mediumQuestions = [{
    question: "Harry's patronus takes what form?",
    choice1: "A goat",
    choice2: "A stag",
    choice3: "A moose",
    choice4: "A doe",
    answer: 2,
},
{
    question: "What is the Hogwarts poltergeist called?",
    choice1: "Peeves",
    choice2: "Peter",
    choice3: "Pesky",
    choice4: "Pablo",
    answer: 1,
},
{
    question: "What is the name of Voldemort's father?",
    choice1: "Tony Riddle",
    choice2: "Tom Riddle",
    choice3: "Ted Riddle",
    choice4: "Tim Riddle",
    answer: 2,
},
{
    question: "Which quidditch team does Viktor Krum play for?",
    choice1: "Romania",
    choice2: "Hungary",
    choice3: "Serbia",
    choice4: "Bulgaria",
    answer: 4,
},
{
    question: "What was Sirius Black's nickname at Hogwarts?",
    choice1: "Moony",
    choice2: "Padfoot",
    choice3: "Prongs",
    choice4: "Wormtail",
    answer: 2,
},
{
    question: "Which spell would you use to summon an object?",
    choice1: "Lumos",
    choice2: "Reparo",
    choice3: "Episkey",
    choice4: "Accio",
    answer: 4,
},
{
    question: "Fred and George Weasley play which positions on the Hogwarts quidditch team?",
    choice1: "Chasers",
    choice2: "Keepers",
    choice3: "Beaters",
    choice4: "They aren't on the team!",
    answer: 3,
},
{
    question: "Ron's pet rat turns out to be who?",
    choice1: "Peter Pettigrew",
    choice2: "Pansy Parkinson",
    choice3: "Sirius Black",
    choice4: "Padma Patil",
    answer: 1,
},
{
    question: "In The Goblet of Fire, Snape wrongly accuses HArry of stealing what from him?",
    choice1: "Money",
    choice2: "Gillyweed",
    choice3: "Veritaserum",
    choice4: "Polyjuice potion ingredients",
    answer: 4,
},
{
    question: "Professor Karkaroff used to be what?",
    choice1: "A werewolf",
    choice2: "A deatheater",
    choice3: "A Horwarts student",
    choice4: "An auror",
    answer: 2,
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



// Displays the quiz page when the easy level button is clicked

easyBtn.addEventListener("click", showQuiz);

// function to start the game from the beginning, resets score and question 
// counter and pulls from the EASY QUESTIONS array
easyBtn.addEventListener("click", startEasyGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...easyQuestions];
    getNewQuestion();
    levelTitle.innerText = "Level: EASY";
});

// Displays the quiz page when the medium level button is clicked

mediumBtn.addEventListener("click", showQuiz);

// // function to start the game from the beginning, resets score and question 
// counter and pulls questions from the MEDIUM array
mediumBtn.addEventListener("click", startMediumGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...mediumQuestions];
    getNewQuestion();
    levelTitle.innerText = "Level: MEDIUM";
});





// Function to display endgame message and total score once the quiz is complete
function endGame() {
    home.style.display = "none";
    quizPage.style.display = "none";
    endGamePage.style.display = "block";
    finalScore.innerText = `You scored ${score}/${easyQuestions.length}`;
    if (score <= 4) {
        finishMessage.innerText = "It looks like someone needs extra tutoring..."
    } else if (score <= 6) {
        finishMessage.innerText = "Not bad, not bad, but a but of extra studying wouldn't hurt!"
    } else {
        finishMessage.innerText = "Well done, you really do know your way around the wizarding world!"
    };
};

// Function to select a random question + choices from the easyQuestions array
getNewQuestion = () => {
    if (availableQuestions.length === 0) {
        endGame();
    } else {
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
    };
};

// Function to increment the score value during the quiz
function incrementScore() {
    document.getElementById("score").innerHTML = `Score: ${score}/${easyQuestions.length}`;
};



// Function to add an event listener every time an answer is clicked (learned from Jack Quick on Youtube)
choices.forEach(function (choice) {
    choice.addEventListener('click', function (event) {
        if (!acceptingAnswers) return;
        acceptingAnswers = false;

        const selectedChoice = event.target;
        const selectedAnswer = selectedChoice.getAttribute('data-number');

        if (selectedAnswer == currentQuestion.answer) {
            alert("Well done, that's the right answer!");
            score++;
        } else {
            alert("Oops that's not quite right");
        }

        incrementScore();
        getNewQuestion();
    });
});





startEasyGame();