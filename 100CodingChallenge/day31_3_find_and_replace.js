/*

Question 93: Find the index of "Banana" in an array of fruits
and replace it with "Mango".

Explain & TIP: To replace an item in an array, find its index
using .indexOf(), then use that index to set a new value with
array bracket notation.


*/
let fruits = ['Watermelon', 'Orange', 'Banana'];
let bananaIndex = fruits.indexOf("Banana");
fruits[bananaIndex] = "Mango";
console.log(fruits);
export {};
