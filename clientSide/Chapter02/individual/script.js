function calculateSum() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    
    var sum = num1 + num2;
    
    document.getElementById('result').innerHTML = 'The sum is: ' + sum;
}
