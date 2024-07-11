"use strict";
// Qno24
// More Conditional Tests: You don’t have to limit the number of tests
//  you create to 10. If you want to try more comparisons, 
//  write more tests. Have at least one True and one False result 
//  for each of the following:
// • Tests for equality and inequality with strings
console.log("enquality test:", "muhammad aizan" === "muhammad aizan");
console.log("inequality test:", "muhammad aizan" !== "ali raza");
// • Tests using the lower case function
console.log("Lower case test:", "MUHAMMAD AIZAN".toLowerCase() === "muhammad aizan");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("enquality test:", 1000 === 1000);
console.log("inequality test:", 10 !== 9);
console.log("greater than test:", 10000 > 1000);
console.log("less than test:", 10 < 100);
console.log("greater than equals to test:", 10 >= 10);
console.log("less than equals to test:", 5 <= 10);
// • Tests using "and" and "or" operators
console.log("And operators test ", true && true);
console.log("Or operators test ", true || false);
// • Test whether an item is in a array
const car = [1, 2, 3];
console.log("test number", car.includes(1));
// • Test whether an item is not in a array
const car2 = [1, 2, 3];
console.log("test number", !car.includes(6));
