/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01 Modified

      Application to calculate total order cost with quantity, subtotal, tax, and total amount
      Author: [Your Name]
      Date: [Today's Date]

      Filename: project03-01.js
*/

// Declare variable to hold the collection of HTML elements with class 'menuItem'
var menuItems = document.getElementsByClassName('menuItem');

// Declare variable to hold the collection of HTML elements with class 'quantityInput'
var quantityInputs = document.getElementsByClassName('quantityInput');

// Loop through the menuItems collection and add event listeners
for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', updateOrder);
}

// Loop through the quantityInputs collection and add event listeners
for (var i = 0; i < quantityInputs.length; i++) {
    quantityInputs[i].addEventListener('input', updateOrder);
}

// Function to update the order details
function updateOrder() {
    // Initialize variables
    var subtotal = 0;
    var taxRate = 0.07;
    var taxAmount = 0;
    var total = 0;

    // Loop through the menuItems collection
    for (var i = 0; i < menuItems.length; i++) {
        // Check if the item is checked
        if (menuItems[i].checked) {
            // Get the quantity input value
            var quantity = parseInt(document.getElementById('quantity' + (i + 1)).value);
            // Add the value of the checked item multiplied by quantity to subtotal
            subtotal += Number(menuItems[i].value) * quantity;
        }
    }

    // Calculate tax amount
    taxAmount = subtotal * taxRate;

    // Calculate total amount
    total = subtotal + taxAmount;

    // Update the display
    document.getElementById('subtotal').innerHTML = "Subtotal: $" + subtotal.toFixed(2);
    document.getElementById('tax').innerHTML = "Tax (7%): $" + taxAmount.toFixed(2);
    document.getElementById('total').innerHTML = "Total: $" + total.toFixed(2);
}
