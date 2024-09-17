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

The site has been designed to be as user friendly as possible, utilising a classic layout style with the title/logo at the top that links to the home page, central main content, and footer with external social media links at the bottom. The layout has been made as consistent as possible across devices of different sizes, with elements only rearranging to provide optimised viewing.

### Surface plane

**Color**
With regards to the main colour scheme of the site I have decided to opt for the classic red, green, blue and yellow colours of the Hogwarts houses for the optional background colours, aswell as for the answer selection buttons. To ensure these colours pop I have chosen a classic purple colour for the background as I think this allows sufficient contrast without being aesthetically jarring.
> - #fafafa (white)
> - #800080 (purple)
> - #eeba30 (yellow)
> - #0041c2 (blue)
> - #b22222 (red)
> - #198754 (green)

![Colour palette](assets/images/readme/coolors-palette.png)
Colour palette generated from coolors.co

**Font:**
The main font for the quiz will be "Old Standard TT" and for the main page title/logo and other smaller headings I will use "MedievalSharp" as this is the closest I could find to the fonts used on the Harry Potter book covers. I think the two fonts complement eachother nicely and are easily legible.

## Existing Features
> - Title/logo

Linked to homepage so user may refresh the quiz whenever they please, visible throughout the quiz.

> - House selection

User is invited to select their Hogwarts house of choice.

![Landing page screenshot](assets/images/readme/landing-page.png)

The background and logo change colour accordingly using JS.

![Level selection page showing diferent background colour examples](assets/images/readme/level-page.png)

User can then choose level difficulty for the quiz from the buttons.

> - Quiz questions and answers

Questions are pulled from the relevant array (easy, medium, difficult).

Answer buttons highlight when hovered over (large devices) to create positive UX.

![Quiz page screenshot](assets/images/readme/quiz-page.png)

Score increments +1 with every correct answer, scored out of the current question number (score/question number)

![Score screenshot](assets/images/readme/score-screenshot.png)

After user has selected an answer, the alert box appears to let user knopw whether their choice was correct or not.

![Alert screenshot](assets/images/readme/alert-screenshot.png)

> - Endgame page 

After 10 questions in any of the levels, the user's score is displayed with the relevent message based on how well they did.

The 'play again' button appears to invite the user to attempt another level.

![Endgame screenshot](assets/images/readme/endgame-screenshot.png)

> - Footer section

Minimal in design so as not to distract from the main quiz. I have included basic social media links in a place that is intuitive to the user.

![Footer section](assets/images/readme/footer-screenshot.png)


## Future Features
### Home page
> - I would like to include some sort of animation on page load to add a more 3d feel to the site.
### Quiz section
> - Given more time I would like to add some sort of audio when the user selects an answer, with different noises based on whether the answer is correct or not.
### Additional pages
> - In the future I would plan to add a leaderboard feature that would allow users to create a username and appear on a page of high scorers.

## Languages used

> - HTML5
> - CSS3
> - Javascript