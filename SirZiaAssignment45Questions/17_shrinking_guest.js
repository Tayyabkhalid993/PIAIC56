/*

Shrinking Guest List: You just found out that your new dinner
table won’t arrive in time for the dinner, and you have space
for only two guests.

• Start with your program from Exercise 16. Add a new line that
prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain
in your list. Each time you pop a name from your list, print a message to
that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting
them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print
your list to make sure you actually have an empty list at the end of your program.

*/
console.log("Our dinner table couldn't reach on time. So now We can invite only two guests for dinner.");
const guest = ["Haris", "Nabeel", "Zain"];
console.log(`Due to some reason ${guest[2]} is unavailable`);
guest[2] = "Junaid";
guest.splice(1, 0, "Wajid");
guest.push("Waleed");
for (let i = 4; i >= 2; i--) {
    console.log(`Sorry I can't invite you, ${guest[i]}`);
    guest.pop();
}
for (let i = 0; i < guest.length; i++) {
    console.log(`Hey, ${guest[i]} you're still invited.`);
}
guest.pop();
guest.pop();
console.log(guest);
export {};
