/*

Question 67: Arithmetic with Mixed Types: Write a function that takes 
two parameters: a number and a string that represents a number 
(e.g., "5"). Return their sum as a number. 

Explain & TIP: JavaScript allows arithmetic operations between mixed 
types. When you add a number to a string that looks like a number, 
JavaScript converts the string to a number for the operation.

*/

const sum = (num1:number,num2:string):number => num1 + Number(num2); // Number() is used to convert into number

console.log(sum(2,"22"));



