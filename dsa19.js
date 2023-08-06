// program to find the factors of an integer

const num = 14;
console.log(`The factors of ${num} is :`)
for (let i = 1; i <= num; i++){
    if (num % i == 0){
        console.log(i)
    }
}



//by user

let input = require('prompt-sync')()
let num1 = parseInt(input(console.log("Enter the positive number :")))
console.log(`The factors of ${num1} is:`);
for(let i = 1; i <= num1; i++){
    if(num1 % i == 0){
console.log(i)
    }
}