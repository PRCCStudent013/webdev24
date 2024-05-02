/*
    Student Name: Desmon Neapollioun
    File Name: script.js
    Date: 4/8/24
*/
// Wait for the DOM content to load before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the menu toggle checkbox and the mobile navigation
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav ul');

    // Add an event listener to the menu toggle checkbox for the 'change' event
    menuToggle.addEventListener('change', function() {
        // Toggle the visibility of the mobile navigation based on the checked state of the menu toggle checkbox
        if (this.checked) {
            mobileNav.style.display = 'block';
        } else {
            mobileNav.style.display = 'none';
        }
    });
});

