"use strict";
// Qno19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18,
//  print a message indicating the number of people you are inviting to dinner
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
// console.log("Unfortunately we cannot arrange big table , only two people allow");
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    // console.log(`Sorry ! Sir/madam ${removeGuest} you are not invited for dinner.`)
}
for (let i = 0; i < guestList.length; i++) {
    // console.log("Respected Sir/madam  " + guestList[i] + "\n you are still invited on dinner tomorrow.  THANK YOU\n")
}
guestList.splice(0, 2);
console.log(guestList);
console.log(`the number of people we are inviting on dinner is `, guestList.length);
