// Page and title variables
const home = document.getElementById("home-page");
const quizPage = document.getElementById("quiz-page");
const endGamePage = document.getElementById("end-game-page");
const pageTitle = document.getElementById("page-title");

const question = document.getElementById('question-text');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const levelTitle = document.getElementById('level-title');
// Final score and finish message
let finishMessage = document.getElementById("finish-message");
let finalScore = document.getElementById("total-score");

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
const levelButtons = document.getElementById("level-options");

// Level selection text
const levelSelectionText = document.getElementById("select-level-text");

// Get the modals
var correctModal = document.getElementById("correct-modal");
var incorrectModal = document.getElementById("incorrect-modal");

// right answer text for incorrect modal
var rightAnswer = document.getElementById("right-answer");

// Get the <span> element that closes the modal
var correctClose = document.getElementsByClassName("correct-close")[0];
var incorrectClose = document.getElementsByClassName("incorrect-close")[0];

// Variables for the get new question function
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
    levelSelectionText.style.display = "block";
    levelButtons.style.display = "block";
    endGamePage.style.backgroundColor = "#198754";
});

ravenclawBtn.addEventListener('click', function (event) {
    document.body.style.backgroundColor = "#0041c2";
    pageTitle.style.color = "gold";
    levelSelectionText.style.display = "block";
    levelButtons.style.display = "block";
    houseBanner.style.display = "none";
});

gryffindorBtn.addEventListener('click', function (event) {
    document.body.style.backgroundColor = "#b22222";
    pageTitle.style.color = "gold";
    levelSelectionText.style.display = "block";
    levelButtons.style.display = "block";
    houseBanner.style.display = "none";
});

slytherinBtn.addEventListener('click', function (event) {
    document.body.style.backgroundColor = "#198754";
    pageTitle.style.color = "silver";
    levelSelectionText.style.display = "block";
    levelButtons.style.display = "block";
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
        trivia: "The sorting hat originally wanted to put Harry in Slytherin but he chose Gryffindor.",
    },
    {
        question: "The juice of which fruit or vegetable is commonly served at Hogwarts?",
        choice1: "Apple",
        choice2: "Cucumber",
        choice3: "Orange",
        choice4: "Pumpkin",
        answer: 4,
        trivia: "It's pumpkin ofcourse! Freshly grown in Hagrid's pumpkin patch.",
    },
    {
        question: "Neville Longbottom can often be found looking for what sort of pet?",
        choice1: "Frog",
        choice2: "Dog",
        choice3: "Rat",
        choice4: "Toad",
        answer: 4,
        trivia: "Neville has a pet toad and his name is Trevor.",
    },
    {
        question: "Ron Weasley is very good at which game?",
        choice1: "Snap",
        choice2: "Scrabble",
        choice3: "Chess",
        choice4: "Boggle",
        answer: 3,
        trivia: "The answer is ofcourse: chess! Ron plays the best game of chess Hogwarts has ever seen in The Philosopher's Stone.",
    },
    {
        question: "Hermione's parents are described as what?",
        choice1: "Weird",
        choice2: "Muggles",
        choice3: "Old",
        choice4: "Gnomes",
        answer: 2,
        trivia: "Hermione is muggle born, this means her parents are non magical folk.",
    },
    {
        question: "What sort of pet has Hagrid always wanted?",
        choice1: "A snake",
        choice2: "A spider",
        choice3: "A unicorn",
        choice4: "A dragon",
        answer: 4,
        trivia: "Hagrid is well known for having a soft spot for all creatures, the more dangerous the better. Dragons are his favourite!",
    },
    {
        question: "Professor Snape is head of which Hogwarts house?",
        choice1: "Ravenclaw",
        choice2: "Slytherin",
        choice3: "Gryffindor",
        choice4: "Hufflepuff",
        answer: 2,
        trivia: "Snape is head of the Slytherin house, the same house he himself was in when he atttended the school.",
    },
    {
        question: "Professor Quirrell wears what sort of headwear?",
        choice1: "A baseball cap",
        choice2: "A bonnet",
        choice3: "A turban",
        choice4: "A swimming cap",
        answer: 3,
        trivia: "Quirell's turban was an object of intrigue for many students, until it turned out he was hiding Voldemort underneath!",
    },
    {
        question: "Harry can talk to what kind of animals?",
        choice1: "Snakes",
        choice2: "Cats",
        choice3: "Dolphins",
        choice4: "Crows",
        answer: 1,
        trivia: "Harry's ability to talk to snakes means he is a 'Parselmouth'.",
    },
    {
        question: "What sort of creature is Dobby?",
        choice1: "Goblin",
        choice2: "Gnome",
        choice3: "House elf",
        choice4: "Dementor",
        answer: 3,
        trivia: "Dobby is a house elf who makes it his mission to save Harry Potter's life in The Chamber of Secrets, however he doesn't always go about this in the best way!",
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
        trivia: "His patronus takes the form of a stag, the same as his father",
    },
    {
        question: "What is the Hogwarts poltergeist called?",
        choice1: "Peeves",
        choice2: "Peter",
        choice3: "Pesky",
        choice4: "Pablo",
        answer: 1,
        trivia: "Peeves is one of the few characters that never appears in the films! In the books he notoriously causes trouble whenever he can.",
    },
    {
        question: "What is the name of Voldemort's father?",
        choice1: "Tony Riddle",
        choice2: "Tom Riddle",
        choice3: "Ted Riddle",
        choice4: "Tim Riddle",
        answer: 2,
        trivia: "Voldemort and his father share the same name, Tom Riddle.",
    },
    {
        question: "Which quidditch team does Viktor Krum play for?",
        choice1: "Romania",
        choice2: "Hungary",
        choice3: "Serbia",
        choice4: "Bulgaria",
        answer: 4,
        trivia: "Krum plays for Bulgaria! He also dated Hermione for a while.",
    },
    {
        question: "What was Sirius Black's nickname at Hogwarts?",
        choice1: "Moony",
        choice2: "Padfoot",
        choice3: "Prongs",
        choice4: "Wormtail",
        answer: 2,
        trivia: "Sirius' nickname Padfoot comes from his animagus form as a big dog.",
    },
    {
        question: "Which spell would you use to summon an object?",
        choice1: "Lumos",
        choice2: "Reparo",
        choice3: "Episkey",
        choice4: "Accio",
        answer: 4,
        trivia: "With help from Hermione, Harry masters the Accio charm just in time to use it to summon his broom during the dragon task in the Triwizard tournament.",
    },
    {
        question: "Fred and George Weasley play which positions on the Hogwarts quidditch team?",
        choice1: "Chasers",
        choice2: "Keepers",
        choice3: "Beaters",
        choice4: "They aren't on the team!",
        answer: 3,
        trivia: "It was said that Fred and George were the best beaters the Gryffindor team had seen.",
    },
    {
        question: "Ron's pet rat turns out to be who?",
        choice1: "Peter Pettigrew",
        choice2: "Pansy Parkinson",
        choice3: "Sirius Black",
        choice4: "Padma Patil",
        answer: 1,
        trivia: "Harry discovers Ron's rat to be Peter Pettigrew after spotting him on the Marauder's map",
    },
    {
        question: "In The Goblet of Fire, Snape wrongly accuses Harry of stealing what from him?",
        choice1: "Money",
        choice2: "Gillyweed",
        choice3: "Veritaserum",
        choice4: "Polyjuice potion ingredients",
        answer: 4,
        trivia: "Based on their track record Snape assumes Harry has stolen Polyjuice potion ingredients from him, however it was Barty Crouch Jnr in the guise of Professor Moody.",
    },
    {
        question: "Professor Karkaroff used to be what?",
        choice1: "A werewolf",
        choice2: "A Deatheater",
        choice3: "A Hogwarts student",
        choice4: "An auror",
        answer: 2,
        trivia: "Professor Karkaroff is a well known ex Deatheater, he earned his freedom by handing over inside information to the Ministry of Magic.",
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
        trivia: "There were originally 3 Dunbledore siblings; Albus, Aberforth and Ariana.",
    },
    {
        question: "Which Weasley brother does Fleur Delacour marry?",
        choice1: "Fred",
        choice2: "Bill",
        choice3: "Charlie",
        choice4: "Percy",
        answer: 2,
        trivia: "Fleur marries Bill in the 7th book.",
    },
    {
        question: "Which Ravenclaw trinket does Tom Riddle turn into a horcrux?",
        choice1: "A ring",
        choice2: "A pearl mecklace",
        choice3: "A diadem",
        choice4: "A diamond",
        answer: 3,
        trivia: "Voldemort persuades the ghost of Ravenclaw to tell him the whereabouts of the long lost diadem. The tiara is said to grant wisdom to the wearer.",
    },
    {
        question: "Which of these is not a method for destroying horcruxes?",
        choice1: "Godric Gryffindor's sword",
        choice2: "Fiendfyre",
        choice3: "Basilisk venom",
        choice4: "Dragon flame",
        answer: 4,
        trivia: "Dragon flame is never used to destroy a Horcrux, however Fiendfyre is a cursed flame with enough power to destroy nearly anything in it's path.",
    },
    {
        question: "Who is the half blood prince?",
        choice1: "Remus Lupin",
        choice2: "Sirius Black",
        choice3: "Severus Snape",
        choice4: "James Potter",
        answer: 3,
        trivia: "The half blood prince is none other than Severus Snape. Harry comes to posess an old potions book of his and as a result excels at his potions classes that year.",
    },
    {
        question: "Xenophilius Lovegood is the editor of which newspaper?",
        choice1: "The Daily Prophet",
        choice2: "The Quibbler",
        choice3: "The Wizards Voice",
        choice4: "The Hogwarts Herald",
        answer: 2,
        trivia: "The Quibbler is owned, printed and edited by Luna Lovegood's father, Xenophilius.",
    },
    {
        question: "How many siblings does Ron Weasley have?",
        choice1: "4",
        choice2: "5",
        choice3: "6",
        choice4: "7",
        answer: 3,
        trivia: "Ron's 6 siblings are as follows: Bill, Charlie, Percy, Fred, George and Ginny Weasley. Charlie Weasley is never featured in the films, though he is mentioned.",
    },
    {
        question: "Which of these objects is not a Deathly Hallow?",
        choice1: "The deluminator",
        choice2: "The elder wand",
        choice3: "Marvolo Gaunt's ring",
        choice4: "The invisibility cloak",
        answer: 1,
        trivia: "The deluminator is an invention of Albus Dumbledor and not a Deathly Hallow.",
    },
    {
        question: "What are the last 3 words of Harry Potter and the Deathly Hallows?",
        choice1: "That was it.",
        choice2: "Only you know.",
        choice3: "No, he said.",
        choice4: "All was well.",
        answer: 4,
        trivia: "'The scar had not pained Harry for 19 years. All was well.'",
    },
    {
        question: "Which of these characters is not an animagus?",
        choice1: "Minerva McGonagall",
        choice2: "James Potter",
        choice3: "Rita Skeeter",
        choice4: "Fenrir Greyback",
        answer: 4,
        trivia: "Fenrir Greyback is in fact a werewolf and not an animagus. Minerva McGonagall has the ability to transform into a cat, Rita Skeeter a beetle, and James Potter a stag.",
    },
];

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
        finishMessage.innerText = "It looks like someone needs extra tutoring...";
    } else if (score <= 6) {
        finishMessage.innerText = "Not bad, not bad, but a bit of extra studying wouldn't hurt!";
    } else {
        finishMessage.innerText = "Well done, you really do know your way around the wizarding world!";
    }
}

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
    }
};

// Function to increment the score value during the quiz
function incrementScore() {
    document.getElementById("score").innerHTML = `Score: ${score}/${questionCounter}`;
}

// Function to add an event listener every time an answer is clicked
choices.forEach(function (choice) {
    choice.addEventListener('click', function (event) {
        if (!acceptingAnswers) return;
        acceptingAnswers = false;

        const selectedChoice = event.target;
        const selectedAnswer = selectedChoice.getAttribute('data-number');

        // if function that displays an alert for right and wrong answers
        if (selectedAnswer == currentQuestion.answer) {
            correctModal.style.display = "block";
            score++;
        } else {
            incorrectModal.style.display = "block";
            rightAnswer.innerText = `${currentQuestion.trivia}`
        }
        incrementScore();
        getNewQuestion();
    });
});

// When the user clicks on <span> (x), close the modal
correctClose.onclick = function () {
    correctModal.style.display = "none";
};

incorrectClose.onclick = function () {
    incorrectModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == correctModal) {
        correctModal.style.display = "none";
    }
};

window.onclick = function (event) {
    if (event.target == incorrectModal) {
        incorrectModal.style.display = "none";
    }
};

startEasyGame();