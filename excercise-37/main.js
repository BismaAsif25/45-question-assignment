"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
//  that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
//  and a shirt of any size with a different message.
function make_shirt(size = " Large", message = " i love typescript") {
    console.log(`The T-shirt size is ${size} and it has "${message}" printed on it.`);
}
make_shirt();
make_shirt("medium", "this shirt is beutiful");
