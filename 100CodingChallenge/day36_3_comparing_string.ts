/*

Question 108: Compare two strings to check if they are identical, ignoring 
case sensitivity.

Explain & TIP: To compare strings without considering their case (uppercase/lowercase), 
you can convert both strings to the same case before comparing.

*/

let comparing = (str1:string, str2:string) => {
    return str1.toLocaleLowerCase() === str2.toLocaleLowerCase();
}

console.log(comparing("hi","HI"));

