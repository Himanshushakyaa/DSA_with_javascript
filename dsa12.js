// display the multiplication of table
// let i = 1
let num = 2
let num1 = 3
for(let i = 1;i<=10;i++){
    let result = i * num;
    let result1 = i*num1

console.log(`${num} * ${i}  = ${result} ,   ${num1} * ${i}  = ${result1}`)
}




// // by user

//  let input = require('prompt-sync')()
// let number = parseInt(input(console.log("Enter the number :")))
// for(let i = 1 ; i <=10; i++){
//     let result = i * number
//     console.log(`${number} * ${i} = ${result}`)
// } 






//multiplication of table up to  range

let input = require('prompt-sync')()
let number1 = parseInt(input(console.log("Enter the  intiger :")))
let range = parseInt(input(console.log("select the range")))
for(let i = 1; i <= range; i++){
    let result = i * number1
    console.log(`${number1} * ${i} = ${result}`)
}


