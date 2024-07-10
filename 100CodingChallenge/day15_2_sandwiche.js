/*
Sandwiches: Write a function that accepts a array of items a
person wants on a sandwich. The function should have one parameter
that collects as many items as the function call provides, and it
should print a summary of the sandwich that is being ordered. Call
the function three times, using a different number of arguments each time.

*/
let sandwich = [];
let order = (...arg1) => {
    console.log(`Make sandwich with : ${arg1.join(', ')}`);
};
order("ham", "cheese");
order("turkey", "lettuce", "tomato");
order("avocado", "sprouts", "mustard", "mayo");
export {};
