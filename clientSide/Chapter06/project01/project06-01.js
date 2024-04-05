"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Desmon Neapollioun
      Date: April 4, 2024

      Filename: project06-01.js
*/

// Declare variables
let submitButton = document.getElementById("submitButton");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");

// Add event listener for submit button click
submitButton.addEventListener("click", function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Check password pattern
    if (!pwd.checkValidity()) {
        alert("Your password must be at least 8 characters with at least one letter and one number.");
    }
    // Check if passwords match
    else if (pwd.value !== pwd2.value) {
        alert("Your passwords must match.");
    } else {
        // Reset validation message
        alert(""); // Empty alert to clear any existing messages
    }
});
