#! /usr/bin/env node

/*
This project is a simple console based Student Management System. 
In this project you will be learning how to add new students, how 
to generate a 5 digit unique studentID for each student, how to 
enroll students in the given courses. Also, you will be implementing 
the following operations enroll, view balance, pay tuition fees, show 
status, etc. The status will show all the details of the student 
including name, id, courses enrolled and balance.This is one of the 
best projects to implement the Object Oriented Programming concepts.

*/

import inquirer from "inquirer";

const userID : number = Math.floor(10000 + Math.random() * 90000);

let balance : number = 0;

const answer = await inquirer.prompt([
    {
        name : "userName",
        type : "string",
        message : "Please enter you name : ",
        validate : function (value){
            if(value.trim() !== ""){
                return true;
            }

            return "Please enter a non-empty value."
        }
    },

    {
        name : "courses",
        type : "list",
        message : "Please select your favorite course.",
        choices : ["Web Development", "C++", "Php", "Python"]
    }
]);


const tuitionFee : {[key : string] : number} = {

    "Web Development" : 2000,
    "C++" : 2500,
    "Php" : 3000, 
    "Python" : 4000
}

console.log(`\n ${tuitionFee[answer.courses]}/-\n`);


const payment = await inquirer.prompt([
    {
        name : "paymentMethod",
        type : "list",
        message : "Which medium you wanna use to pay? ",
        choices : ["Cash", "Easypaisa", "JazzCash", "Bank"]
    },

    {
        name : "amount",
        type : "input",
        message : "Type amount you wanna pay : ",
        validate : function(value){
            if (value.trim() !== ""){
                return true;
            }
            return "Please enter amount. "
        }
    }
])


if (payment.amount == tuitionFee[answer.courses]) {
    console.log(`Congratulation! You get enrolled in ${answer.courses}`);

    const ans = await inquirer.prompt([
        {
            name : "findingStatus",
            type : "list",
            message : "Please select anyone from the given below : ",
            choices : ["Status", "Exit"]
        }
    ])

    if (ans.findingStatus == "Status"){
        console.log("\n>>>>>>>>>>>>>>>>>Status<<<<<<<<<<<<<<\n");
        console.log(`Student Name : ${answer.userName}`);
        console.log(`Student ID : ${userID}`);
        console.log(`Course Name : ${answer.courses}`);
        console.log(`Tuition Fee paid : ${tuitionFee[answer.courses]}`);
        console.log(`Balance : ${balance = payment.amount}`);

    }

    else {
        console.log(`Exit`);
    }
}

else {
    console.log("Please enter valid amount.");
}


