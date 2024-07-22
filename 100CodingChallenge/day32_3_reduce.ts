/*

Question 96: Demonstrate how to use the .reduce() method to calculate 
the sum of all numbers in an array.


Explain & TIP: The .reduce() method applies a function against an accumulator 
and each element in the array (from left to right) to reduce it to a single value.

*/


let numArray : Array <number> = [1,2,4,5];

console.log(numArray.reduce((acc,current)=>acc+current,0));

