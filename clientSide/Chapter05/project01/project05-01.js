"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Desmon Neapollioun
      Date: April 4, 2024

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions
let timeID;
const questionList = document.querySelectorAll('div#quiz input');

/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

// Add onclick event handler to startQuiz object
startQuiz.onclick = function() {
    // Set class attribute of overlay object to "showquiz"
    overlay.className = "showquiz";

    // Repeat the countdown function every 1 second
    timeID = setInterval(countdown, 1000);
};

// Create the countdown function
function countdown() {
    // If timeLeft is equal to 0
    if (timeLeft === 0) {
        // Cancel the timed command
        clearInterval(timeID);

        // Declare totalCorrect variable and set it equal to the value returned by checkAnswers() function
        let totalCorrect = checkAnswers();

        // If totalCorrect is equal to the length of the correctAnswers array
        if (totalCorrect === correctAnswers.length) {
            // Display congratulatory message
            alert("Congratulations! You got 100%.");
        } else {
            // Display number of incorrect answers out of total questions
            alert("You got " + (questionList.length - totalCorrect) + " out of " + questionList.length + " questions incorrect.");

            // Reset timeLeft variable to quizTime
            timeLeft = quizTime;

            // Set quizClock value to timeLeft
            quizClock.value = timeLeft;

            // Change class attribute of overlay object to "hidequiz"
            overlay.className = "hidequiz";
        }
    } else {
        // Decrease timeLeft by 1
        timeLeft--;

        // Set quizClock value to timeLeft
        quizClock.value = timeLeft;
    }
}

// Increase timeLimit variable to 90
let timeLimit = 90;
