/*

Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think
of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of
your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name
of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in
your list.

*/
const guest = ["Haris", "Nabeel", "Zain"];
console.log(`Due to some reason ${guest[2]} is unavailable`);
guest[2] = "Junaid";
for (let i = 0; i < guest.length; i++) {
    console.log(`I would like to invite you tonight dinner at my home, ${guest[i]}`);
}
console.log("We found bigger dinner table. So, We have some more guests.");
export {};
