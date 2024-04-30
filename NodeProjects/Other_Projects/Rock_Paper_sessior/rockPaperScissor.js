#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.blue("\n\n\t>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Rock Paper Scissor game by Tayyab <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\n\n"));
let name = await inquirer.prompt([
    {
        type: 'input',
        name: 'userName',
        message: chalk.gray.bold("Please enter you complete name : ")
    }
]);
let condition = true;
while (condition) {
    let computerGuess = Math.floor((Math.random() * 3) + 1);
    console.log("\n Press 1 for 'Rock'\n Press 2 for 'Scissor'\n Press 3 for 'Paper'\n");
    const answer = await inquirer.prompt([
        {
            type: 'list',
            name: 'userInput',
            message: chalk.magenta('Please choose a number from following : \n'),
            choices: [1, 2, 3]
        }
    ]);
    if (computerGuess == 1 && answer.userInput == 2 || computerGuess == 2 && answer.userInput == 3 || computerGuess == 3 && answer.userInput == 1) {
        console.log(chalk.red("You lose\n"));
    }
    else if (computerGuess == 1 && answer.userInput == 3 || computerGuess == 2 && answer.userInput == 1 || computerGuess == 3 && answer.userInput == 2) {
        console.log(chalk.bold.green(`Congratulation! ${name.userName} won\n`));
    }
    else {
        console.log(chalk.yellow("Match draw.\n"));
    }
    console.log(`Computer chose = ${computerGuess}\n\n You chose = ${answer.userInput}\n`);
    const playAgain = await inquirer.prompt([
        {
            type: 'list',
            name: 'askingForPlay',
            message: `${name.userName}, Do you wanna play again ?\n`,
            choices: ["Yes", "No"]
        }
    ]);
    if (playAgain.askingForPlay == 'Yes') {
        condition = true;
    }
    else {
        condition = false;
    }
}
