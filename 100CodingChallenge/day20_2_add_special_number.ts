/*

Question 59: Add a Special Number: Make a program that creates 
custom adders. These adders can add a specific number to any other 
number you give them later.

Explain & TIP: Imagine you have a magic box that can add a specific 
number to any number you put in it. This program makes that magic box for you!

*/


// // This program makes a function that adds a specific number
// function makeAdder(number1: number): (number2:number) => number {
//     // This is the magic box. It takes a number and adds your special number to it
//     return function(number2: number): number {
//         return number2 + number1;
//     };
// }

// // Making a magic box that adds 5
// const addSix = makeAdder(6);
// console.log(addSix(10)); // If we put 10 in the box, it gives us 15
// // We made a function (magic box) that adds 5 to any number.




// doing same task with the help of arrow function.

function add(num1: number):(num2:number) => number{

    return (num2:number):number => num1+num2
}

const addEight = add(8);

console.log(addEight(10));

