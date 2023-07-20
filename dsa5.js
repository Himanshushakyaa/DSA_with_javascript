// find the largest number among three numbers

// const num1 = 37
// const num2 = 56
// const num3 = 45

// const large = Math.max(num1,num2,num3);
// console.log("the largest number is ",large)



//by user 
 let input = require('prompt-sync')()
let num1 = parseInt(input(console.log("enter the first number :")))
let num2 = parseInt(input(console.log("enter the second number")))
let num3 =parseInt(input(console.log("enter the third number")))

let largets;

if(num1 >= num2 && num1 >= num3){
    largest = num1;

}
else if(num2 >= num1 && num2 >= num3){
    largest = num2;
}else
{
    largest =num3;
}
console.log("the largest number is :",largest)