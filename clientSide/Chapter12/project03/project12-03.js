"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Desmon Neapollioun
      Date: 4/26/24

      Filename: project12-03.js
*/

$(document).ready(function() {
    // Step 3
    $("article > h2").click(function() {
        // Step 4
        var heading = $(this);
        var list = heading.next();
        var headingImage = heading.find("img");

        // Step 5
        list.slideToggle(500);

        // Step 6
        var srcAttr = headingImage.attr("src");
        if (srcAttr === "plus.png") {
            headingImage.attr("src", "minus.png");
        } else {
            headingImage.attr("src", "plus.png");
        }
    });
});
