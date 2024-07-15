/* Question 53: Pulling Apart a Nested Object: Imagine you have a list inside 
another list that shows what a computer programmer knows, like coding languages, 
tools, and software frameworks. Find a way to get three specific skills from 
this list and show them.

Explain & TIP: Breaking down a complex list into simpler parts makes it easier 
to work with and understand specific pieces of information.

*/

interface Skills {
    codingLanguages: string[],
    frameworks : string[],
    tools : string[]
}

let programmerSkills : Skills =  {
    codingLanguages : ["TypeScript","JavaScript","Python"],
    frameworks : ["React", "Angular"],
    tools : ["Git","Docker"]
}

// Getting specific skill from the list by using array destructing.
let {codingLanguages,frameworks, tools} = programmerSkills;

//  showing specific skill without array destructing.
console.log(`codingLangue: ${programmerSkills.codingLanguages[0]}\nfarmework: ${programmerSkills.frameworks[0]}\ntool: ${programmerSkills.tools[0]}`);


//showing specific skill with array destructing.

console.log(`codingLanguage: ${codingLanguages[0]}\nframework: ${frameworks[0]}\ntool: {frameworks[0]}`)