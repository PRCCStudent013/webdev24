"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Chapter case

      Order Form Code
      Author: Desmon Neapollioun
      Date: 3/26/24

      Filename: js06a.js
 */

window.addEventListener("load", function() {
      let orderForm = document.forms.orderForm;
      let model = orderForm.elements.model;

      // Select Model selection list when form opens
      model.focus();

      // Add an event listener for every form element
      for (let i = 0; i < orderForm.elements.length; i++) {
            orderForm.elements[i].addEventListener("change", calcOrder);
      }

      // Calculate the cost of the order
      calcOrder();

      function calcOrder() {
            // Determine the selected model
            let mIndex = model.selectedIndex;
            let mValue = model.options[mIndex].value;

            // Determine the selected quantity
            let qIndex = orderForm.elements.qty.selectedIndex;
            let quantity = orderForm.elements.qty[qIndex].value;

            // Model cost = model cost times quantity
            let modelCost = mValue*quantity;
            orderForm.elements.modelCost.value = formatValue(modelCost);

            // Retrieve the cost of the protection plan
            let planValue = 
            document.querySelector('input[name="plan"]:checked').value;

            // Charge the plan to each item ordered
            let planCost = planValue * quantity;
            orderForm.elements.planCost.value = formatValue(planCost);
            
            
            // Calculate the other subtotal
            let subtotal = modelCost + planCost;
            orderForm.elements.subtotal.value = formatValue(subtotal);

            // Calculate the 5% sales tax
            let salesTax = subtotal * 0.05;
            orderForm.elements.salesTax.value = formatValue(salesTax);

            // Calculate the total cost of the order
            let totalCost = subtotal + salesTax;
            orderForm.elements.totalCost.value = formatValue(totalCost);

            orderForm.elements.modelName.value = model.options[nIdex].text;
            let selectedPlan = document.querySelector('input[name="plan"]:checked');
            orderForm.elements.planName.value = selectedPlan.labels[0].textContent;
      }
});

function formatValue(value)
{
      return value.toLocaleString("en-US", {style: "currency", currency: "USD"});
}