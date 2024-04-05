"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Desmon Neapollioun
      Date: April 4, 2024

      Filename: project05-02.js
*/

// Declare variables
const images = document.getElementsByTagName('img');
const photoBucket = document.getElementById('photo_bucket');
const photoList = document.getElementById('photo_list');

// Create event handlers for images
for (let i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        if (this.parentElement.id === 'photo_bucket') {
            // Move image to photo list
            let newItem = document.createElement('li');
            newItem.appendChild(this);
            photoList.appendChild(newItem);
        } else {
            // Move image back to photo bucket
            let oldItem = this.parentElement;
            photoBucket.appendChild(this);
            oldItem.parentElement.removeChild(oldItem);
        }
    };
}
