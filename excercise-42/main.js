"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians
//   by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.
let magicians_name = ['Derren Brown', 'Lance Burton', 'Criss Angel', 'Penn & Teller', 'David Copperfield'];
function show_magicians(magician) {
    for (let i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
}
;
function make_great(magician) {
    for (let i = 0; i < magician.length; i++) {
        magician[i] = magician[i] + " " + "the great magician";
    }
}
make_great(magicians_name);
show_magicians(magicians_name);
