let number = 9;
if (number < 0) throw "Attempt to calculate the square root of a negative value.";
let sqrt = number**0.5;
window.alert("The square root of " + number + " is " + sqrt);