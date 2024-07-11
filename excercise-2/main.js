"use strict";
//Question 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name 
// in lowercase, uppercase, and titlecase
// toLowerCase
let person = "Sara";
console.log(person.toLowerCase());
// toLocaleUpperCase
console.log(person.toLocaleUpperCase());
console.log(person.replace(/\b\w/g, c => c.toLocaleUpperCase()));
