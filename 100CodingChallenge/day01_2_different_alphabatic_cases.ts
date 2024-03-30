/*
Name Cases: Store a person’s name in a variable,
 and then print that person’s name in lowercase, uppercase, and titlecase.
*/


 import inquirer from "inquirer";

let answer = await inquirer.prompt([
    {
        type : "string",
        name : "name",
        message : "Please enter you name..."
    }
])
// Lower Case
console.log(answer.name.toLowerCase());

// Upper Case
console.log(answer.name.toUpperCase());

// Title Case
let firstChar: string = answer.name.charAt(0);

let remainingChar : string = answer.name.slice(1)

console.log(firstChar.toUpperCase()+remainingChar.toLowerCase());



