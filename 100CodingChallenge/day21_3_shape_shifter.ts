/* 

Question 63: Shape Shifter: Write a program that can describe either 
a circle or a rectangle using a special type alias, including properties 
unique to each shape.

Explain & TIP: A type alias lets you create a custom type. It's like 
a shortcut for describing more complex information, such as the details 
of different shapes.

*/

interface Shape {
    kind : "circle" | "rectangular",
    radius? : number,
    width? : number,
    height? : number
}

let rect : Shape = {
    kind : "rectangular",
    width : 8,
    height : 3
}

let circle : Shape = {
    kind : "circle",
    radius : 9
}

console.log(rect);
console.log(circle);