/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Fahrenheit Converter
      Author: Desmon Neapollioun
      Date: 2/6/24

      Filename: project02-01.js
 */

function FahrenheitToCelsius(degree)
{
      return degree = (degree - 32) / 1.8;
}

function CelsiusToFahrenheit(degree)
{
      return degree = degree * 1.8 + 32;
}

document.getElementById("cValue").onchange = function(){
      CDegree = document.getElementById("cValue").value;
      document.getElementById("fValue").value = CelsiusToFahrenheit(CDegree)
};

document.getElementById("fValue").onchange = function(){
      FDegree = document.getElementById("fValue").value;
      document.getElementById("cValue").value = FahrenheitToCelsius(FDegree)
};