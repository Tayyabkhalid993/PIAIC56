#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.bold.blue("Write any sentence for count the word.  ")
    }
]);
// trim() is remove the white spaces from the start and end of the paragraph
//split() is remove the from the sentence.
const word = answer.sentence.trim().split(" ");
console.log(word);
console.log(chalk.bold.green(`Your sentence or paragraph are consist of ${word.length} words`));
