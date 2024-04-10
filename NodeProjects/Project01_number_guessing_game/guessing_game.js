#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
const randomNumber = Math.floor((Math.random() * 10) + 1);
console.log(randomNumber);
let guess = false;
while (!guess) {
    const answer = await inquirer.prompt([
        {
            type: 'number',
            name: 'userNumber',
            message: chalk.bgGreen('Please choose a number between 1 to 10'),
        }
    ]);
    if (answer.userNumber === randomNumber) {
        console.log(chalk.greenBright("Congrats! Your guess is right."));
        guess = true;
    }
    else if (answer.userNumber > randomNumber) {
        console.log(chalk.gray("your number is higher. Try again"));
        answer.userNumber;
    }
    else if (answer.userNumber < randomNumber) {
        console.log(chalk.gray("your number is low. Try again"));
        answer.userNumber;
    }
}
