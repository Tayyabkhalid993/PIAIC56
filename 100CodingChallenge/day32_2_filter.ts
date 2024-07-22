/*

Question 95: Write a function that uses the .filter() method to return 
an array of numbers greater than 10.

Explain & TIP: The .filter() method creates a new array with all elements 
that pass the test implemented by the provided function.

*/

const numArray: number[] = [1, 10, 11, 12, 8, 6, 24];


function filterArray(para: number[]) {

  return para.filter((num) => num > 10);

}

console.log(filterArray(numArray));
