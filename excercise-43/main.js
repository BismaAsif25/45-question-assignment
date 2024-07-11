"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names.
//  Because the original array will be unchanged, return the new array and 
//  store it in a separate array. Call show_magicians() with each array 
//  to show that you have one array of the original names and one array 
//  with the Great added to each magician’s name.
let magicians_name = ['Derren Brown', 'Lance Burton', 'Criss Angel', 'Penn & Teller', 'David Copperfield'];
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great(magicians) {
    // Create a new array with modifications
    let modifiedMagicians = [...magicians]; // Create a copy of the original array
    for (let i = 0; i < modifiedMagicians.length; i++) {
        modifiedMagicians[i] = modifiedMagicians[i] + " the great magician";
    }
    return modifiedMagicians;
}
// Demonstration
console.log("Original Magicians:");
show_magicians(magicians_name);
let greatMagicians = make_great(magicians_name); // Pass the original array
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
