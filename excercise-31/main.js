"use strict";
// QNO31
// No Users: Add an if test to Exercise 30 to make sure the 
// list of users is not empty.
// • If the list is empty, print the message We need to 
// find some users!
// • Remove all of the usernames from your array, and 
// make sure the correct message is printed
// let userNames =['admin','ali','aizan','hania','hadia'];
let userNames = [];
for (let user of userNames) {
    if (user.length === 0) {
        console.log("We need to find some users!");
    }
    else {
        console.log(`hello ${user},thank you for logging in again`);
    }
}
