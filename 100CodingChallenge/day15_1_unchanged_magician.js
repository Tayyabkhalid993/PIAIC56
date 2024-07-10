/*
Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of
magicians’ names. Because the original array will be unchanged,
return the new array and store it in a separate array. Call
show_magicians() with each array to show that you have one
array of the original names and one array with the Great added
to each magician’s name.

*/
let magicians = ["neil patrick", "penn jillette", "harry houdini"];
let updatedArray = [];
let make_great = (magicians) => {
    magicians.map((item) => {
        updatedArray.push(`The great ${item}`);
    });
};
make_great(magicians); // Calling function
console.log("\nOriginal Array");
console.log(magicians); // Original Array
console.log("\nNew Updated Array");
console.log(updatedArray); // New Updated Array
export {};
