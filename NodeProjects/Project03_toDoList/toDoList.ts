#! /usr/bin/env node

import inquirer from 'inquirer';

let list = [];

let condition = true;

while (condition){
const answer = await inquirer.prompt([
    {
        type : "input",
        name : "addSomeThing",
        message : "What do you wanna add in your to do list? "
    },
    {
        type : "confirm",
        name : "addingMore",
        message : "Do you wanna add more task?",
        default : "true"
    }
])

list.push(answer.addSomeThing);

condition = answer.addingMore;

}

console.log(list);