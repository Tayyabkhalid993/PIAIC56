/*

Large Shirts: Modify the make_shirt() function so that shirts are
large by default with a message that reads I love TypeScript. Make
a large shirt and a medium shirt with the default message, and a
shirt of any size with a different message.

*/
function make_shirt1(sizeShirt = "large", message = "I love TypeScript.") {
    console.log(`The size of shirt = ${sizeShirt}`);
    console.log(`The message ="${message}"`);
}
make_shirt1();
function make_shirt2(sizeShirt = "medium", message = "nothing impossible.") {
    console.log(`The size of shirt = ${sizeShirt}`);
    console.log(`The message ="${message}"`);
}
make_shirt2();
export {};
