#! /usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer'

// Finding BMI using matic system


console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> BMI Calculator by Tayyab <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\n")

const height = await inquirer.prompt ([
    {
        type : 'number',
        name : 'heightInMeters',
        message : "Please enter height in meters : "
    }
])


const weight = await inquirer.prompt([
    {
        type : 'number',
        name : 'weightInKilograms',
        message : 'Please enter weight in kilograms : '
    }
])

let bmi = weight.weightInKilograms / (height.heightInMeters**2);

  bmi = Math.floor(bmi)


console.log(`BMI = ${bmi}`);

if (bmi < 18) {
    console.log(chalk.bold.yellow("Sorry! You're under"));
}

else if (bmi > 17 && bmi < 26){
    console.log(chalk.bold.green("Congratulation!, You're healthy"));
}

else{
    console.log(chalk.bold.red("You're overweight"));
}