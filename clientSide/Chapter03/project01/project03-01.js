/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: [Your Name]
      Date: [Current Date]

      Filename: project03-01.js
*/

// Function to display a numeric value as a text string in the format $##.## 
function formatCurrency(value) {
    return "$" + value.toFixed(2);
}

// Declare a variable to store all menu items
var menuItems = document.getElementsByClassName("menuItem");

// Function to calculate the total cost of the order
function calcTotal() {
    // Initialize the order total
    var orderTotal = 0;

    // Loop through each menu item
    for (var i = 0; i < menuItems.length; i++) {
        // Check if the menu item is checked
        if (menuItems[i].checked) {
            // Add the value of the checked menu item to the order total
            orderTotal += Number(menuItems[i].value);
        }
    }

    // Update the total order cost displayed on the webpage
    document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

// Add event listeners to each menu item to trigger the calcTotal function when clicked
for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", calcTotal);
}
