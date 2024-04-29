/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Desmon Neapollioun
      Date: 4/29/2024
      Filename: project02-04.js
 */

      const CHICKEN_PRICE = 10.95,
      HALIBUT_PRICE = 13.95,
      BURGER_PRICE = 9.95,
      SALMON_PRICE = 18.95,
      SALAD_PRICE = 7.95,
      SALES_TAX = 0.07;

// Function to display a numeric value as a text string in the format $##.## 
function formatCurrency(value) {
    return "$" + value.toFixed(2);
}

// Function to calculate total cost and update HTML
function calcTotal() {
    let cost = 0;

    let chickenQty = parseInt(document.getElementById("chickenQty").value);
    let halibutQty = parseInt(document.getElementById("halibutQty").value);
    let burgerQty = parseInt(document.getElementById("burgerQty").value);
    let salmonQty = parseInt(document.getElementById("salmonQty").value);
    let saladQty = parseInt(document.getElementById("saladQty").value);

    cost += chickenQty * CHICKEN_PRICE;
    cost += halibutQty * HALIBUT_PRICE;
    cost += burgerQty * BURGER_PRICE;
    cost += salmonQty * SALMON_PRICE;
    cost += saladQty * SALAD_PRICE;

    document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

    let tax = cost * SALES_TAX;
    document.getElementById("foodTax").innerHTML = formatCurrency(tax);

    let totalCost = cost + tax;
    document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}

// Event handlers for input changes
document.getElementById("chickenQty").addEventListener("change", calcTotal);
document.getElementById("halibutQty").addEventListener("change", calcTotal);
document.getElementById("burgerQty").addEventListener("change", calcTotal);
document.getElementById("salmonQty").addEventListener("change", calcTotal);
document.getElementById("saladQty").addEventListener("change", calcTotal);
