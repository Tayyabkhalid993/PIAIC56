/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. Have at least one True and one 
False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater 
than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array

*/



// • Tests for equality and inequality with strings

let str1 : string = "Pakistan";
let str2 : string = "pakistan";

console.log(str1 === str2); // false

str1 =str1.toLowerCase();

console.log(str1 === str2); // true

// testing with lowercase function

console.log("Bike".toLowerCase()==="bike"); // true



// Numerical tests
console.log(10>5); //true
console.log(8<5); //false


// and or operators

console.log(true&&false); //false
console.log(true && true); // true

// test whether an item is in a array 

let fruit : string[] = ["apple","banana","strawberry"];

console.log(fruit.includes("apple")); // true
console.log(fruit.includes("cherry")); // false 
