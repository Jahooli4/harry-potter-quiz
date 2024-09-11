

const home = document.getElementById("home-page");
const quizPage = document.getElementById("quiz-page");
const endGamePage = document.getElementById("end-game-page");
const pageTitle = document.getElementById("page-title");

const question = document.getElementById('question-text');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const levelTitle = document.getElementById('level-title');

// House selection banner
const houseBanner = document.getElementById("house-banner");
// House selection buttons
const hufflepuffBtn = document.getElementById("hufflepuff");
const ravenclawBtn = document.getElementById("ravenclaw");
const gryffindorBtn = document.getElementById("gryffindor");
const slytherinBtn = document.getElementById("slytherin");

// Level selection buttons
const easyBtn = document.getElementById("easy");
const mediumBtn = document.getElementById("medium");
const difficultBtn = document.getElementById("difficult");

// Play again button
const playAgainBtn = document.getElementById("play-again-btn");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// event listeners to alter the background color for the house banner buttons

    hufflepuffBtn.addEventListener('click', function (event) {
    document.body.style.backgroundColor = "#eeba30";
    pageTitle.style.color = "#000000";
    houseBanner.style.display = "none";
});

ravenclawBtn.addEventListener('click', function (event) {
    document.body.style.backgroundColor = "#0d6efd";
    pageTitle.style.color = "#cd7f32";
    houseBanner.style.display = "none";
});

gryffindorBtn.addEventListener('click', function (event) {
    document.body.style.backgroundColor = "#dc3545";
    pageTitle.style.color = "gold";
    houseBanner.style.display = "none";
});

slytherinBtn.addEventListener('click', function (event) {
    document.body.style.backgroundColor = "#198754";
    pageTitle.style.color = "silver";
    houseBanner.style.display = "none";
});


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
    question: "In The Goblet of Fire, Snape wrongly accuses Harry of stealing what from him?",
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


// Questions for the difficult level
let difficultQuestions = [{
    question: "What is the name of Albus Dumbledore's brother?",
    choice1: "Adrian",
    choice2: "Abernanthy",
    choice3: "Aberforth",
    choice4: "Alaric",
    answer: 3,
},
{
    question: "Which Weasley brother does Fleur Delacour marry?",
    choice1: "Fred",
    choice2: "Bill",
    choice3: "Charlie",
    choice4: "Percy",
    answer: 2,
},
{
    question: "Which Ravenclaw trinket does Tom Riddle turn into a horcrux?",
    choice1: "A ring",
    choice2: "A pearl mecklace",
    choice3: "A diadem",
    choice4: "A diamond",
    answer: 3,
},
{
    question: "Which of these is not a method for destroying horcruxes?",
    choice1: "Godric Gryffindor's sword",
    choice2: "Feindfyre",
    choice3: "Basilisk venom",
    choice4: "Dragon flame",
    answer: 4,
},
{
    question: "Who is the half blood prince?",
    choice1: "Remus Lupin",
    choice2: "Sirius Black",
    choice3: "Severus Snape",
    choice4: "James Potter",
    answer: 3,
},
{
    question: "Xenophilius Lovegood is the editor of which newspaper?",
    choice1: "The Daily Prophet",
    choice2: "The Quibbler",
    choice3: "The Wizards Voice",
    choice4: "The Hogwarts Herald",
    answer: 2,
},
{
    question: "How many siblings does Ron Weasley have?",
    choice1: "4",
    choice2: "5",
    choice3: "6",
    choice4: "7",
    answer: 3,
},
{
    question: "Which of these objects is not a Deathly Hallow?",
    choice1: "The deluminator",
    choice2: "The elder wand",
    choice3: "Marvolo Gaunt's ring",
    choice4: "The invisibility cloak",
    answer: 1,
},
{
    question: "What are the last 3 words of Harry Potter and the Deathly Hallows?",
    choice1: "That was it.",
    choice2: "Only you know.",
    choice3: "No, he said.",
    choice4: "All was well.",
    answer: 4,
},
{
    question: "Which of these characters is not an animagus?",
    choice1: "Minerva McGonagall",
    choice2: "James Potter",
    choice3: "Rita Skeeter",
    choice4: "Fenrir Greyback",
    answer: 4,
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


// Displays the quiz page when the difficult level button is clicked

difficultBtn.addEventListener("click", showQuiz);

// // function to start the game from the beginning, resets score and question 
// counter and pulls questions from the DIFFICULT array
difficultBtn.addEventListener("click", startDifficultGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...difficultQuestions];
    getNewQuestion();
    levelTitle.innerText = "Level: DIFFICULT";
});





// Function to display endgame message and total score once the quiz is complete
function endGame() {
    home.style.display = "none";
    quizPage.style.display = "none";
    endGamePage.style.display = "block";
    finalScore.innerText = `You scored ${score}/${questionCounter}`;
    if (score <= 4) {
        finishMessage.innerText = "It looks like someone needs extra tutoring..."
    } else if (score <= 6) {
        finishMessage.innerText = "Not bad, not bad, but a bit of extra studying wouldn't hurt!"
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
    document.getElementById("score").innerHTML = `Score: ${score}/${questionCounter}`;
};



// Function to add an event listener every time an answer is clicked
choices.forEach(function (choice) {
    choice.addEventListener('click', function (event) {
        if (!acceptingAnswers) return;
        acceptingAnswers = false;

        const selectedChoice = event.target;
        const selectedAnswer = selectedChoice.getAttribute('data-number');

// if function that displays an alert for right and wrong answers
        if (selectedAnswer == currentQuestion.answer) {
            alert("Well done, that's the right answer!");
            score++;
        } else {
            alert("Oops that's not quite right");
        };
        incrementScore();
        getNewQuestion();
    });
});





startEasyGame();