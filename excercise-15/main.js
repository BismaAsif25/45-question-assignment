"use strict";
// Qno 15
// Changing Guest List: You just heard that one of your guests can’t 
// make the dinner, so you need to send out a new set of invitations.
//  You’ll have to think of someone else to invite.
console.log("PREVIOUS GUESTLIST");
let guestList = ['Hania', 'Neeha', 'Hadia'];
for (let i = 0; i < guestList.length; i++) {
    console.log("Respected Sir/madam  " + guestList[i] + "\n\n we would like to invite you on dinner tomorrow \n \n THANK YOU");
}
console.log("NEW GUESTLIST");
let notPresent = "Hadia";
let newguest = "Samia";
guestList[2] = newguest;
for (let i = 0; i < guestList.length; i++) {
    console.log("Respected Sir/madam  " + guestList[i] + "\n\n we would like to invite you on dinner tomorrow \n \n THANK YOU");
}
console.log(`ms ${notPresent} will not coing tomorrow`);
