/*
Question 78: Function Expressions vs. Function Declarations: Compare function 
expressions and declarations by creating one of each that performs the same 
task, such as squaring a number.

Explain & TIP: JavaScript allows you to create functions in two ways: declarations 
that name the function and can be called before they're defined, and expressions 
that are stored in variables and are called using the variable name.

*/

function fun1 (num1: number):number {
    return num1*num1;
}



const fun2 = function (num2:number):number   {
    return num2*num2;
}


console.log(fun1(3));

console.log(fun2(3));
