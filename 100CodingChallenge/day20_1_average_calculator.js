/*

Question 58: Average Score Calculator: Write a simple program that can
take lots of scores and find their average.

Explain & TIP: This program can handle any number of scores you give it,
and it tells you the average score. Handy for seeing how well you did overall!

*/
function averageScore(...scores) {
    let total = scores.reduce((sum, grades) => sum + grades, 0);
    return (total / scores.length);
}
console.log(averageScore(45, 76, 90, 56));
export {};
