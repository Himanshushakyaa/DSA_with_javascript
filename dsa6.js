// convert kilometer to miles

const kilometer = 2.2
const factor = 0.621371
const miles = kilometer * factor
console.log(miles)


//by user

let input  = require('prompt-sync')()
let km = parseInt(input(console.log("enter the kilometer :")));
let fact = 0.621371
let mile = km * fact;
console.log(`${km}  kilometer is equal to miles ${mile}`)