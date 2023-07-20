// swap two varaibles number

let a = 12;
let b = 13;
let c;
    c = a
    a = b
    b = c
    console.log("the value of after swapping is :",a)
    console.log("the valyue of after swapping is :",b)
    console.log("the value of after swapping is :",c)



    // by user

let input = require('prompt-sync')()
    let num1 = parseInt(input(console.log("enter the first variable")))
    let num2 = parseInt(input(console.log("enter the second variable")))
    let num3;

    num3 = num1;
    num1 = num2;
    num2 = num3;
    console.log(`the value of a after swapping is ${num1}`)
    console.log(`the value of a after swapping is ${num2}`)
    console.log(`the value of a after swapping is ${num3}`)