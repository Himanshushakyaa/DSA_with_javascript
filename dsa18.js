// program to find the LCM of two integers
// const num1 =40
// const num2 =4

// let min = (num1 > num2) ? num1 : num2;
// while(true){
//     if(min % num1 == 0 && min% num2 == 0){
//         console.log(`The LCM of ${num1} and ${num2} is ${min}`)
//         break;
//         min++;
//     }
// }


//by user 

let input = require('prompt-sync')()
const number1 = parseInt(input(console.log("Enter the first integer :")))
const number2 = parseInt(input(console.log("Enter the Second integer :")))
let min1 = (number1 >number2) ? number1 : number2;
while(true){
if( min1 % number1 == 0 && min1 % number2 == 0){
console.log(`The LCM of ${number1} and ${number2} is ${min1}`)

break;
}
min1++;
}

