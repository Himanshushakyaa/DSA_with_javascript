// find the square root of a number

let num1 = 9
let sqrt  = Math.sqrt(num1)
console.log('The square root is given number : ',sqrt)


// by user

let input =  require('prompt-sync')()
let num = parseInt(input(console.log("enter a number")))
let squareroot = Math.sqrt(num)
console.log(`${num} of square root is = ${squareroot} `)