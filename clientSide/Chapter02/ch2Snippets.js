let user = "Desmon";    //global scope - global variable
const PERCENTAGE = 0.05;

function showUser()
{
    let user = "Reynolds";  //local scope - local variable
    console.log("In showUser - local scope")
    console.log(user);

    {
        var name = "Dawson";
    }
    console.log("In show user, name is " + name);
}

console.log("Global Scope")
console.log(user);  //print the global variable user
showUser();

//PERCENTAGE = 0.10; //constants cannot be changed!
//console.log(PERCENTAGE);

console.log("Welcome to \"JavaScript Programming\"" + "\n" + "\tYou will enjoy this!");

let x = 10;
x = 10 * 2 + 4 - 25 / 2;
console.log(x);
x++;                //x++ is the same as x = x + 1
console.log(x);
x--;                //x-- is the same as x = x - 1
console.log(x);
x = x**2;           //x is raised to the power of two; x squared
console.log(x);

let y = 15;
console.log(y);     //15

console.log(y++);   //15
console.log(y);     //16

console.log(++y);   //17
console.log(y);     //17