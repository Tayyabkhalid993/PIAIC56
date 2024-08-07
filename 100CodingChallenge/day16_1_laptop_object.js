/*
Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties
make, model, year, and a method describe() that logs a sentence about the laptop.

Explain & TIP: Objects can also contain functions (methods) that can perform actions using
the object's properties. This introduces method definition within objects.

*/
let laptop = {
    make: "lenovo",
    model: "X250",
    year: 2020,
    describe: () => {
        console.log(`This is ${laptop.year} ${laptop.make} ${laptop.model} machine`);
    }
};
laptop.describe();
export {};
