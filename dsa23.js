//check if the number have same last digit 

let prompt = require('prompt-sync')()
const a =  parseInt(prompt('Enter the first integer : '));
const b = parseInt (prompt('enter the second integer:'));
const c = parseInt (prompt('enter the third integer :'));

const result1 = a % 10;
const result2 = b % 10;
const result3 = c % 10;

if (result1 == result2 && result1 == result3){
    console.log(`${a},${b} and ${c} have the same last digit.`)
    
}
else {
    console.log(`${a},${b} amd ${c} have different last digit.`)
}