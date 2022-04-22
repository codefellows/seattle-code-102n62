// loops

// for loop & while loop 
    // initial  // condition  // increment
for (let i = 0;     i < 10;        i = i+5){
    // execute some code here
    console.log(i);
}

// 1st execution i = 0
// 2nd i = 5

let age;
while (age < 21) {
    age = prompt("How old are you?");

}

// -------------------------------------------------
// functions
// are to repeat steps of code
// info in parenthesis is called parameters
function addNumbers(number1, number2){
    let total = number1 + number2;
    return total;
}
// info in parenthesis is called arguments
addNumbers(2, 5);

// -------------------------------------------------
// basic JS 

// How to declare variables
// let --> changeable
// const --> not supposed to change
// var --> Outdated - don't use it

let x = 20;
let y = "20";

// -------------------------------------------------