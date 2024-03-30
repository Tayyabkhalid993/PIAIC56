import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "string",
        name: "name",
        message: "What's your name?"
    }
]);
console.log(answer.name);
