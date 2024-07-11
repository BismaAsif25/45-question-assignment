"use strict";
// Qno 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//  and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that ,
// you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list.
//  Each time you pop a name from your list,
//  print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list.
//  Print your list to make sure you actually have an empty list at the end of your program.
let guestList = ['Hania', 'Neeha', 'Hadia'];
// for(let i =0 ; i<guestList.length; i++)
//     {
//         console.log("Respected Sir/madam  " + guestList[i] + "\n\n we would like to invite you on dinner tomorrow \n \n THANK YOU")
//     }
let notPresent = "Hadia";
let newguest = "Samia";
guestList[2] = newguest;
// for(let i =0 ; i<guestList.length; i++)
//     {
//         console.log("Respected Sir/madam  " + guestList[i] + "\n\n we would like to invite you on dinner tomorrow  \n THANK YOU\n\n")
//     };
// console.log(`ms ${notPresent} will not coming tomorrow`);
guestList.unshift('Ammad', 'Ali', 'Bilal');
// for(let i =0 ; i<guestList.length; i++)
//     {
//         console.log("Respected Sir/madam  " + guestList[i] + "\n\n we would like to invite you on dinner tomorrow..You just found a bigger dinner table, so now we decided to invite 3 more guest \n  THANK YOU\n\n")
//     }
console.log("Unfortunately we cannot arrange big table , only two people allow");
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`Sorry ! Sir/madam ${removeGuest} you are not invited for dinner.`);
}
for (let i = 0; i < guestList.length; i++) {
    console.log("Respected Sir/madam  " + guestList[i] + "\n you are still invited on dinner tomorrow.  THANK YOU\n");
}
guestList.splice(0, 2);
console.log(guestList);
