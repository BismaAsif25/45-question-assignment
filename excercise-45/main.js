"use strict";
// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments.
//  Call the function with the required information and two other name-value pairs, 
//  such as a color or an optional feature. Print the Object that’s returned to make sure 
//  all the information was stored correctly.
// Function to store car information
function createCar(manufacturer, model, ...options) {
    let car = {
        manufacturer,
        model
    };
    // Add additional properties based on arguments
    options.forEach(option => {
        let [key, value] = option;
        car[key] = value;
    });
    return car;
}
// Example usage
const myCar = createCar("Toyota", "Corolla", ["color", "red"], ["year", 2020]);
console.log(myCar);
