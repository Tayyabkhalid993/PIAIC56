/*

Adding Comments: Choose two of the programs you’ve written, and add at 
least one comment to each. If you don’t have anything specific to write 
because your programs are too simple at this point, just add your name and 
the current date at the top of each program file. Then write one sentence 
describing what the program does.

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



