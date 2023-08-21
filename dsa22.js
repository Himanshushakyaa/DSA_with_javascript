// find the sum natural numbers

const number = 100
let sum = 0
for (let i = 1; i<=number; i++){
    sum+=i;

}
console.log('The sum of natural numbers :',sum);



//by user

let prompt = require('prompt-sync')()
const number1 = parseInt(prompt('Enter the positive integer :'));
let sum1 = 0 ,i =1;
while(i<=number){
    sum1+=i;
    i++;

}
console.log('the sum of natural numbers :',sum1);