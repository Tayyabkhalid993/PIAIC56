/*

Question 57: Find the Average Grade: Given a list of grades, 
calculate the average grade.

Explain & TIP: We can sum up all the grades and divide by the 
number of grades to find the average, giving us an idea of how 
well someone did overall.
*/

let grades : number[] = [78,89,60,72,90];

// let arraySum : number = 0;

// let averageGrades = grades.filter((item)=>{
//     arraySum = arraySum + item;
// });

// let finalResult:number = arraySum / grades.length;

// console.log(finalResult);





// more efficient way

let finalResult = grades.reduce((grades,total)=>total + grades,0)/grades.length;

console.log(finalResult);


