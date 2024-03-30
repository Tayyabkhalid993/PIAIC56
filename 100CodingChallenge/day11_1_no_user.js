/*

No Users: Add an if test to Exercise 28 to make sure
the list of users is not empty.

• If the list is empty, print the message We need to
find some users!

• Remove all of the usernames from your array, and make
sure the correct message is printed.

*/
let userName = [];
for (let index = 0; index <= userName.length; index++) {
    if (userName.length == 0) {
        console.log("we need to find some user.");
    }
    else if (userName[index] === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${userName[index]}, thank you for logging in again.`);
    }
}
export {};
