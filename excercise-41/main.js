"use strict";
// Magicians: Make a array of magician’s names.
//  Pass the array to a function called show_magicians(),
//   which prints the name of each magician in the array.
let magicians_name = ['Derren Brown', 'Lance Burton', 'Criss Angel', 'Penn & Teller', 'David Copperfield'];
function show_magicians(magician) {
    for (let i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
}
;
show_magicians(magicians_name);
