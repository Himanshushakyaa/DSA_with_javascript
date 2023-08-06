//program to check whether the last digit of three numbers is same

const a = 8;
const b = 38;
const c = 88;
const result1 = a % 10;
const result2 = b % 10;
const result3 = c % 10;


if(result1 == result2 && result1 == result3){
    console.log(`${a},${b} and ${c} have the same last digit.`)
}else{
    console.log(`${a},${b} and ${c} have different last digit.`)
}





//by user

let input = require('prompt-sync')()

let x = parseInt(input(console.log("Enter a first integer :")))
let y = parseInt(input(console.log("Enter the second integer :")))
let z = parseInt(input(console.log("Enter the third integer :")))


const res1 = x%10;
const res2 = y%10;
const res3 = z%10;

if(res1 == res2 && res1 == res3){
    console.log(`${x},${y} and ${z} have the same last digit :`)

}else{
    console.log(`${x},${y} and ${z} have different last digit :`)
}