// Qno 15
// Changing Guest List: You just heard that one of your guests can’t 
// make the dinner, so you need to send out a new set of invitations.
//  You’ll have to think of someone else to invite.

// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

console.log("PREVIOUS GUESTLIST");

let guestList:string[]=['Hania','Neeha','Hadia'];

for(let i =0 ; i<guestList.length; i++)
    {
        console.log("Respected Sir/madam  " + guestList[i] + "\n\n we would like to invite you on dinner tomorrow \n \n THANK YOU")
    }

    console.log("NEW GUESTLIST");

    let notPresent:string="Hadia";
    let newguest:string="Samia";
    guestList[2] = newguest;
    for(let i =0 ; i<guestList.length; i++)
        {
            console.log("Respected Sir/madam  " + guestList[i] + "\n\n we would like to invite you on dinner tomorrow \n \n THANK YOU")
        }

        console.log(`ms ${notPresent} will not coming tomorrow`)
