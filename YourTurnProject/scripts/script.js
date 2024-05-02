/*
    Student Name: Desmon Neapollioun
    File Name: script.js
    Date: 4/8/24
*/
// script.js

document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var mobileNav = document.querySelector('.mobile-nav ul');

    menuToggle.addEventListener('click', function() {
        mobileNav.classList.toggle('show');
    });
});
