/*
Question 56: Keep Only Strings: Given a mix of different types of
items, make a new list that has only the words.

Explain & TIP: We can pick out just the words from a mixed bag of
items, creating a list that includes only those words.

*/
let mixArray = [123, "TypeScript", true, 324, 5432, false, "Python", "PIAIC"];
// let filteredArray = mixArray.filter((item)=>{
//     if(typeof item === "string"){
//         return item;
//     }
// });
//more efficient way
let filteredArray = mixArray.filter(item => typeof item === "string");
console.log(filteredArray);
export {};
