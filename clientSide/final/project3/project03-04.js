/*    JavaScript 7th Edition
      Chapter 3
      Project 03-04

      Application to write a list of customer reviews
      Author: Desmon Neapollioun
      Date: April 29, 2024

      Filename: project03-04.js
*/

let reviewers = ["WillHa85", "GoldFry26", "Mittens41", "Tompkins8", "NewUser123"]; // Add a new reviewer
let reviewType = ["P", "N", "", "", ""]; // Adjust the array size accordingly
let stars = [5, 2, 1, 4, 5]; // Add a new star rating
let reviewDates = ["11/18/2024", "11/17/2024", "11/15/2024", "11/10/2024", "11/20/2024"]; // Adjust the array size accordingly
let reviews = [
   "I've owned all of the Dance Off games from the beginning. I have lost 6 pounds since I started playing.",
   "A so-so release of this well-established game. Where this release fails is in the choreography. Many of the moves follow predictable patterns. I hope the next release improves the choreography .",
   "The installation was buggy and kept crashing my gaming console. I spent several hours on tech support with no solution to my problem. I finally returned it and got my money back. I wish I could give it a zero star rating.",
   "The latest version of Dance Off improves upon the 8th Edition only slightly; still is one of the best dance-style games on the market.",
   "Awesome game! I love the new features and the improved graphics. Definitely a 5-star game!"
];
let reviewTitles = ["My Favorite Workout Game", "Poor Choreography", "Buggy with Poor Tech Support", "Nice Improvement", "Great Game"];

function starImages(rating) {
    let imageText = "";

    for (let i = 0; i < rating; i++) {
        imageText += "<img src='star.png' alt=''>";
    }

    return imageText;
}

// Sort the reviews in descending order of stars
let sortedIndices = stars.map((_, i) => i).sort((a, b) => stars[b] - stars[a]);

for (let i = 0; i < sortedIndices.length; i++) {
    let index = sortedIndices[i];
    let reviewCode = "";

    if (reviewType[index] == "P") {
        reviewCode += "<table class='prime'>";
    } else if (reviewType[index] == "N") {
        reviewCode += "<table class='new'>";
    } else {
        reviewCode += "<table>";
    }

    reviewCode += "<caption>Review Titles " + (index+1) + "</caption>";
    reviewCode += "<tr><th>By</th><td>" + reviewers[index] + "</td></tr>";
    reviewCode += "<tr><th>Review Date</th><td>" + reviewDates[index] + "</td></tr>";
    reviewCode += "<tr><td colspan='2'>" + starImages(stars[index]) + "</td></tr>";
    reviewCode += "<tr><td colspan='2'>" + reviews[index] + "</td></tr>";
    reviewCode += "</table>";

    document.getElementsByTagName("article")[0].insertAdjacentHTML("beforeend", reviewCode);
}
