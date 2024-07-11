// Qno 16

// More Guests: You just found a bigger dinner table, so now more space is available.
//  Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. 
// Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.




let guestList:string[]=['Hania','Neeha','Hadia'];

// for(let i =0 ; i<guestList.length; i++)
//     {
//         console.log("Respected Sir/madam  " + guestList[i] + "\n\n we would like to invite you on dinner tomorrow \n \n THANK YOU")
//     }

    console.log("Previouse GUESTLIST");

    let notPresent:string="Hadia";
    let newguest:string="Samia";
    guestList[2] = newguest;
    for(let i =0 ; i<guestList.length; i++)
        {
            console.log("Respected Sir/madam  " + guestList[i] + "\n\n we would like to invite you on dinner tomorrow  \n THANK YOU\n\n")
        };

        console.log(`ms ${notPresent} will not coming tomorrow`);

        console.log("New GUESTLIST");

        guestList.unshift('Ammad','Ali','Bilal');

        for(let i =0 ; i<guestList.length; i++)
            {
                console.log("Respected Sir/madam  " + guestList[i] + "\n\n we would like to invite you on dinner tomorrow..You just found a bigger dinner table, so now we decided to invite 3 more guest \n  THANK YOU\n\n")
            }
    