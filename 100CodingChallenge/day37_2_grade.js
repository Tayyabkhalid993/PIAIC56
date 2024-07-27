/*

Question 110: Create a function that assigns a grade (A, B, C, D, F)
based on a student's score.


Explain & TIP: A common grading system assigns letter grades based on
score ranges. You can use an if-else-if chain to determine the grade.

*/
let grade = (score) => {
    return score >= 90 ? "A" :
        score >= 80 ? "B" :
            score >= 70 ? "C" :
                score >= 60 ? "D" :
                    score >= 50 ? "E" : "F";
};
console.log(`Grade is ${grade(80)}`);
export {};
