"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-04

      Project to store high scores from a game in a cookie
      Author: 
      Date:   

      Filename: project09-04.js
*/

/* Page Objects */
let bestText = document.getElementById("best");
let clockTimer = document.getElementById("timer");

// Custom event that runs when the puzzle is solved
window.addEventListener("puzzleSolved", updateRecord);

// Event listener that is run when the page loads
window.addEventListener("load", function() {
   // Check if the document.cookie object exists
   if (document.cookie) {
      // If it exists, set the bestText content to the best time from the cookie
      bestText.textContent = getBestTime() + " seconds";
   }
});

// Function to retrieve the user's best time from the cookie
function getBestTime() {
   // If document.cookie exists
   if (document.cookie) {
      // Split the cookie text at "=" and convert the value to an integer
      let cookieArray = document.cookie.split("=");
      return parseInt(cookieArray[1]);
   } else {
      // If document.cookie does not exist, return a default value of 9999
      return 9999;
   }
}

// Function to update the user's best time in the cookie
function updateRecord() {
   // Get the current time from the timer input
   let solutionTime = parseInt(clockTimer.value);

   // Get the current best time from the cookie
   let bestTime = getBestTime();

   // If the current time is less than the best time
   if (solutionTime < bestTime) {
      // Update the best time to the current time
      bestTime = solutionTime;

      // Change the text content of bestText to display the new best time
      bestText.textContent = bestTime + " seconds";

      // Set the cookie with the new best time and a max age of 90 days
      document.cookie = "puzzle8Best=" + bestTime + "; max-age=" + (90 * 24 * 60 * 60);
   }
}
