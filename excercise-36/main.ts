// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message
//  that should be printed on the shirt. The function should print 
// a sentence summarizing the size of the shirt and the message printed on it. Call the function .


function make_shirt(size:number|string,message:string){
    console.log(`the size of this shirt is ${size} , and the message is ${message}`)
}

make_shirt(32,"hello world")
make_shirt("large","Believe you can and you're halfway there.")