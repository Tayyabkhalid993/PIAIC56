/*

Question 71: Compare let and const: Create two examples where let
allows reassignment but const does not. Try to reassign a const-declared
variable and catch the error.

Explain & TIP: let allows you to declare variables that can be reassigned,
while const is for variables that should not change once set. Using const
helps make your code safer and more predictable.

*/
let age = 23;
age = 25; // we can reassign the variable which is declare by let key word
const name = "Tayyab";
try { // using try to reassign         
    name = "umar"; // this line is the cause of error because can't reassign the variable which is declared by const.
}
catch (error) {
    console.log("Error : Can't reassign the variable declare by const.");
}
export {};
