#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
console.log(`\n\t>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<\n`);
console.log(chalk.bold.yellowBright("Welcome to the word counter program by Tayyab Khalid\n"));
console.log(`\t>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<\n`);
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.bold.bgBlue("Write any sentence for count the word.  "),
        default: "I love typescript."
    }
]);
// trim() is remove the white spaces from the start and end of the paragraph
//split() is remove the from the sentence.
const word = answer.sentence.trim().split(" ");
console.log(word);
console.log(chalk.bold.green(`Your sentence or paragraph are consist of ${word.length} words`));
