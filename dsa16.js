 //program to display the sum of natural numbers
 
 const number  =  12;
let num = 0; 
let sum = 0;
for(let i = 1 ; i <= number;i++){
    sum += i;

}
console.log(`The sum of natural numbers :`,sum)


//by user


let input = require('prompt-sync')()
// let num1 = parseInt(input(console.log("Enter any number")))
// let sum1 = 0
// for (let i = 1; i<=num1;i++){
//     sum1 += i;

// }
// console.log("The sum of natural number is :",sum1)





// while loop method
let num2 = parseInt(input(console.log("Enter the natural number")))
let sum2 = 0, i =1;
while(i<=num2){
    sum2 += i ;
    i++;
}
console.log(`The sum of natural  number is :${sum2}`)