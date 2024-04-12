#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';

let userName : string[] = ['Tayyab'];
let userPass : any[] = ['123'];
let balance  : Number = 50000;

const atm = await inquirer.prompt([
    {
        type : 'list',
        name:'login',
        message:'Choose an option from given blow :',
        choices : ['Sign in', 'Sign up']   
    }   
    
])

if(atm.login == "Sign up"){
    console.log(chalk.yellowBright("Sorry! this feature is not available"))
}

if(atm.login === 'Sign in'){
    const signIn = await inquirer.prompt([
        {
            type : 'string',
            name : 'userName',
            message :chalk.green( 'Enter user name : ')
        },
        {
            type : 'password',
            name : 'pass',
            message :chalk.green('enter your password :')
        }
    ])  
    
    if(signIn.userName==userName[0] && (signIn.pass == userPass[0])){
        const operations = await inquirer.prompt([
            {
                type : 'list',
                name : 'options',
                message : "Select any of them : ",
                choices : ['Fast cash','Cash withdraw','Check Balance']
            }
        ])

        if(operations.options == "Check Balance"){

            console.log(chalk.green(`your balance is ${balance}`));
        }

        if(operations.options == 'Cash withdraw'){

            const withdraw = await inquirer.prompt([
                {
                    name : "withdrawAmount",
                    type : "number",
                    message : "Enter withdraw amount : "
                }
            ])
            if(withdraw.withdrawAmount <= balance){
                console.log(chalk.greenBright("Your remaining balance is ",+ balance - withdraw.withdrawAmount));
            }
            else{
                console.log(chalk.red("You can't withdraw more than your balance."));

            }
        }

        if(operations.options == "Fast cash"){
            const fastCash = await inquirer.prompt([
                {
                    name : "fastAmount",
                    type : "list",
                    message : "Choose any amount : ",
                    choices :[500,1000,5000,10000]
                }
            ])
            if(fastCash.fastAmount <= balance ){

                console.log(chalk.green("your remaining balance is ",+balance -fastCash.fastAmount));

        }
    }
    }

    else {
        console.log(chalk.red("Please enter correct user name or Password"))
    }
}
