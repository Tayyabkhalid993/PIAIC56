/*

Question 72: Block Scope with let and const: Demonstrate block scope by creating a 
code block with {} that uses both let and const. Show how variables declared inside 
the block are not accessible outside of it.

Explain & TIP: Block scope, created by {} in JavaScript, confines let and const 
variables to that block, enhancing code organization and preventing accidental 
access from outside the block.

*/


{
    let name : string = "Tayyab"
    const num : number = 12;
}

try {
    console.log(name);  
} catch (error){
    console.log("name can't access out side the block.")
}

try {
    console.log(num);
} catch (error){
    console.log("num can't access outside the block.");
}


