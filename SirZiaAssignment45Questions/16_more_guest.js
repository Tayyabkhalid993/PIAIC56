/*

More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your
program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to
the end of your list. • Print a new set of invitation messages, one for each person in your list.

*/
const guest = ["Haris", "Nabeel", "Zain"];
console.log(`Due to some reason ${guest[2]} is unavailable`);
guest[2] = "Junaid";
guest.splice(1, 0, "Wajid");
guest.push("Waleed");
console.log(guest);
for (let i = 0; i < guest.length; i++) {
    console.log(`I would like to invite you tonight dinner at my home, ${guest[i]}`);
}
export {};
