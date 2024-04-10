import inquirer from 'inquirer';

let username : string[] = ['Tayyab'];
let userpass : string[] = ['123'];

const atm = await inquirer.prompt([
    {
        type : 'list',
        name:'login',
        message:'Choose an option from given blow :',
        choices : ['Sign in', 'Sign up']   
    }
    
])

if(atm.login === 'Sign in'){
    const signIn = await inquirer.prompt([
        {
            type : 'string',
            name : 'userName',
            message : 'Enter user name'
        },
        {
            type : 'password',
            name : 'pass',
            message : 'enter your password : '
        }
    ])  
    if(signIn.userName==username[0] && (signIn.pass == userpass[0])){
        const moreOption = await inquirer.prompt([
            {
                type : 'list',
                name : 'options',
                message : "Select any of them",
                choices : ['Fast cash','Cash withdraw','cash transfer']
            }
        ])
    }

    else {
        console.log("Please enter correct user name or Password")
    }
}


