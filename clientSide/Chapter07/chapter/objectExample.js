let deg = 45;
console.log(Math.sin(deg*Math.PI/180));

let rad = 20;
let area = Math.PI * Math.pow(rad, 2);
console.log("Area of the circle: " + area);

let x1 = [1, 2, 3];
let x2 = [4, 5];
let allX = [...x1, ...x2];
console.log("Allx = " + allX); //returns [1, 2, 3, 4, 5]

//Formula to generate random numbers:
//Math.floor(Math.random() * (max - min + 1) + min)
let max = 20;
let min = 10;
for(let i = 0; i < 20; i++)
{
    // console.log(Math.floor(101 * Math.random()));
    console.log(Math.floor(Math.random() * (max - min + 1) + min));
}


// let num = "12345";
let arr = [..."12345"];
console.log("arr = " + arr);

console.log("Randomly sorted array - " + arr.sort(randOrder));

function randOrder()
{
    return 0.5 - Math.random();
}
