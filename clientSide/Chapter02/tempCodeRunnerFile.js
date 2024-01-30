let user = "Desmon";    //global scope - global variable

function showUser()
{
    let user = "Reynolds";  //local scope - local variable
    console.log(user);
}

console.log(user);