/*

Question 106: Determine if a given year is a leap year using comparison operators.

Explain & TIP: A leap year is divisible by 4 but not by 100 unless it's also divisible 
by 400. This rule helps align our calendar years with the Earth's orbital period.

*/

let year : number = 2020;

let checkYear = year % 4 === 0 ? console.log("Given year is a leap year") : console.log("Given year is not a leap year");

