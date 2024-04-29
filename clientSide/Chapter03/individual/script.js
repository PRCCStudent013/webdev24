function calculateSum() {
    try {
        var num1 = parseFloat(document.getElementById('num1').value);
        var num2 = parseFloat(document.getElementById('num2').value);
        
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Please enter valid numbers.');
        }
        
        var sum = num1 + num2;
        
        document.getElementById('result').innerHTML = 'The sum is: ' + sum + '<br>';
        
        if (num1 > num2) {
            document.getElementById('result').innerHTML += num1 + ' is greater than ' + num2 + '.';
        } else if (num1 < num2) {
            document.getElementById('result').innerHTML += num1 + ' is less than ' + num2 + '.';
        } else {
            document.getElementById('result').innerHTML += 'Both numbers are equal.';
        }
    } catch (error) {
        document.getElementById('result').innerHTML = error.message;
    }
}
