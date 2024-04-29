"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-03

      Project to retrieve date of last visit from web storage and mark new article
      Author: Desmon Neapollioun
      Date: 4/26/24

      Filename: project09-03.js
*/

/* Page Objects */

let lastVisitDate = document.getElementById("lastVisitDate");
let articleDates = document.getElementsByClassName("posttime");

/* Check if localStorage.sbloggerVisit exists */
if (localStorage.sbloggerVisit) {
   // Retrieve the value of sbloggerVisit from local storage
   let storedLastDate = localStorage.sbloggerVisit;

   // Display the value of storedLastDate as the text content of lastVisitDate
   lastVisitDate.textContent = storedLastDate;

   // Declare the lastDate variable and store within it a Date object using the value of storedLastDate variable
   let lastDate = new Date(storedLastDate);

   // Iterate through each item in the articleDates collection
   for (let date of articleDates) {
      // Declare the articleDate variable storing within it a Date object containing the date text of the current item in the loop
      let articleDate = new Date(date.textContent);

      // If articleDate is greater than lastDate, add "<strong>new</strong>" to the HTML content of the current item in the articleDates collection
      if (articleDate > lastDate) {
         date.innerHTML += "<strong>new</strong>";
      }
   }
} else {
   // Change the text content of lastVisitDate object to “Welcome to SBlogger!”
   lastVisitDate.textContent = "Welcome to SBlogger!";

   // Iterate through each item in the articleDates collection
   for (let date of articleDates) {
      // Add "<strong>new</strong>" to the HTML content of the current date item
      date.innerHTML += "<strong>new</strong>";
   }
}

/* Update the stored date value in the sbloggerVisit key */
let currentDate = new Date("9/12/2024");
localStorage.sbloggerVisit = currentDate.toLocaleDateString();
