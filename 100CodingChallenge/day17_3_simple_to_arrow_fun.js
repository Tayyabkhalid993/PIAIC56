/*

Question 51: Refactoring to Arrow Functions: Take a simple function that
calculates the area of a rectangle and refactor it into an arrow function.

Explain & TIP: Arrow functions provide a concise syntax for writing functions
in JavaScript and TypeScript, making your code cleaner and more readable.

*/
function simpleFun(width1, height1) {
    console.log(`Area of rectangle by simple function = ${width1 * height1}`);
}
let arrowFun = (width2, height2) => console.log(`Area of rectangle by arrow function = ${width2 * height2}`);
simpleFun(15, 6);
arrowFun(20, 5);
export {};
