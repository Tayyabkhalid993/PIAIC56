/*


Personal Message: Store a person’s name in a variable, and print a message to that person. 
Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

*/


import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {
        type : "string",
        name : "name",
        message: "What's your name?"
    }
])

console.log("Hello "+answer.name+", would you like to learn some Python today?");

