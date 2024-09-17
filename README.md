# Harry Potter Quiz ⚡

[Live site](https://jahooli4.github.io/harry-potter-quiz/index.html)

The Harry Potter Quiz is a fun game for fans who wish to test their knowledge on wizarding world trivia. The questions are based on a combination of the books and films. 

The user is invited to select their Hogwarts house which will change the background colour of the game based on their choice.

The user can then select from three levels of difficulty: easy, medium or difficult. This ensures that the game is inclusive to all players, whether the user is new to the series or a long time fan.

![am I responsive screenshot](assets/images/readme/amiresponsive.png) 

## User Experience (UX)

### **User Stories:**

### User
  > - As a user I want to be able to play a fun and engaging game.
  > - As a user I want to test my knowledge on the Harry Potter series.
  > - As a user I want to intuitively navigate the site without confusion.
  > - As a user I want to be able to choose a difficulty level.
  > - As a user I want to be able to see a running score as the game progresses.
  > - As a user I want to see my final score when I have completed the quiz.

### Quiz site Owner
  > - As the site owner I want to provide a fun and engaging quiz for the user.
  > - As the site owner I want the user to be able to replay the game multiple times.
  > - As the site owner I want to be able to add or remove questions from the quiz.

### Scope Plane
  > - The website should have a link to the home page visible at all times so the user can reset the quiz without using browser navigation buttons.
  > - The website should have a welcome message for the user that concisely describes the purpose of the site.
  > - The website should be visually appealing to the user and be styled in a way that is relevant to the Harry Potter theme.
  > - The website background should change colour when the user selects their house.
  > - The website should give the user a choice in level difficulty for the quiz.
  > - The website should keep a running total of the user's score and display this to them.
  > - The website should let the user know whether they have selected the correct answer or not.
  > - The website should display the user's total score and an end of quiz message after 10 questions have been answered.

## Structure Plane 
### (All 'pages' are on one site page and are hidden or displayed via display: block/hidden css)

> - Site logo/title

Home page
> - Welcome message that briefly describes quiz
> - User is invited to choose their Hogwarts house via buttons (background changes colour once selected and Level options appear)
> - Level selection options (Easy, Medium, Difficult)
> - Photo of the main characters as background.

Quiz page
> - Level difficulty based on user selection
> - Randomly generated question
> - 4 answer buttons with hover effects
> - Running score (score/current question number)

End game page
> - Final score is displayed out of 10
> - End of game message is displayed (generated based on score)
> - 'Play again' button to encourage user to restart the game or try a new level.

### Wireframes:

Homepage:
![Home wireframes](assets/images/readme/home-wireframe.png)
Quiz page:
![Quiz wireframe](assets/images/readme/quiz-wireframe.png)
End game page:
![End game wireframe](assets/images/readme/endgame-wireframe.png)
