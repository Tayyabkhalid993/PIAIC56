#! /usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';

const answers : {
    number1 : number,
    number2 : number,
    operator: string
} = await inquirer.prompt([
    {
        type : "number",
        name: "number1",
        message : "Enter 1st number:"
    },
    {
        type : "number",
        name : "number2",
        message : "Enter 2nd number:"
    },
    {
        type : "list",
        name : "operator",
        message : "Choose any operator:",
        choices : ["addition","subtraction","multiplication","division"]
    }
])

const {number1,number2,operator} = answers;


if(number1 && number2 && operator){

    let result : number = 0;

    if(operator === "addition"){
        result = number1 + number2;
    }
   else if(operator === "subtraction"){
    result = number1 - number2;
    }
    else if(operator === "multiplication"){
        result = number1 * number2;
    }
    else if(operator === "division"){
      result = number1 /number2;
    }
    console.log(chalk.green.bold(`Answer = ${result}`));
}
else
{
    console.log("Please enter valid input");
}
