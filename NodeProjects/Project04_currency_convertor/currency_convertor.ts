#! /usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';

const currency : any = {
    USD : 1,   // base currency
    EUR : 0.94,
    GBP : 0.80,
    CAD : 1.38,
    AUD : 1.54,
    JPY : 153.25,
    CHF : 0.91,
    PKR : 273.83,
    INR : 83.57
}

const answer = await inquirer.prompt([
    {
        type : 'list',
        name : 'from_currency',
        message : chalk.bold.gray('Select currency which you wanna convert'),
        choices : ['USD','EUR','GBP','CAD','AUD','JPY','CHF','PKR','INR']
    },

    {
        type : 'list',
        name : 'to_currency',
        message : chalk.bold.yellow('Select currency in which you wanna convert.'),
        choices : ['USD','EUR','GBP','CAD','AUD','JPY','CHF','PKR','INR']
    },

    {
        type : 'number',
        name : 'amount',
        message : 'Enter amount : '   
    }
])

let from_amount = currency[answer.from_currency];

let to_amount = currency[answer.to_currency];

let base_amount = answer.amount / from_amount;

let final_amount : any = base_amount * to_amount;

final_amount = final_amount.toFixed(2)

console.log(chalk.bold.green(`${answer.amount} ${answer.from_currency } = ${final_amount} ${answer.to_currency}`));

