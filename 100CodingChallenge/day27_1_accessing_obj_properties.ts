/*

Question 79: Creating and Accessing Object Properties: Construct an object 
representing a car with properties for make, model, and year. Then, show how 
you can access the model property of the car.

Explain & TIP: Objects are collections of properties, kind of like a box for 
storing related information. You can create an object to group related data 
and access its properties using either dot notation or bracket notation.

*/

interface Car {
    make : string,
    model : string,
    year : number
}

let car : Car = {
    make : "Mercedes",
    model : "W206",
    year : 2022
}

console.log(car['model']);


