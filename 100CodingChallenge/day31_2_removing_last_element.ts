/*

Question 92: Write a function to remove the last element from an 
array and return the removed element.

Explain & TIP: The .pop() method removes the last element from an 
array and returns that element. This can be useful when you need 
to work with the removed item.

*/



function popFun<T>(arr:T[]): any {


    return fruits.pop();

}

let fruits : string[] = ['Watermelon','Orange', 'Banana'];
console.log(popFun(fruits));
