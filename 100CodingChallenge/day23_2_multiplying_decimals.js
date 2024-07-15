/*

Question 68: Multiplying Decimals: Create a function that accepts two
decimal numbers and returns their product. Round the result to two decimal places.

Explain & TIP: When working with decimals in JavaScript, results can
be unexpectedly long. Rounding can help keep numbers manageable.

*/
let multiply = (num1, num2) => {
    let product = num1 * num2;
    return product.toFixed(2);
};
console.log(multiply(2, 2));
export {};
