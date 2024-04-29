/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from a query string
      Author: [Your Name]
      Date: [Current Date]

      Filename: project09-01b.js
*/

"use strict";

// Step 4
let query = location.search.slice(1);

// Step 5
query = query.replace(/\+/g, ' ');
query = decodeURIComponent(query);

// Step 6
let cardFields = query.split('&');

// Step 7
for (let field of cardFields) {
   let nameValue = field.split('=');
   let name = nameValue[0];
   let value = nameValue[1];
   document.getElementById(name).textContent = value;
}
