// Q no 12

// Greetings: Start with the array you used in Exercise 11,
//  but instead of just printing each person’s name, print a message to them.
//  The text of each message should be the same, 
//  but each message should be personalized with the person’s name.



let members: string[] = ['Neeha','Samia','Muteeba','Faria','Hania','Bisma'];
let message:string = " ! Will you go to the library with me?";

for(let i=0; i<members.length; i++)
{
    console.log(members[i] + message);
}