//find the HCF and GCD

let hcf;
let number1 = 60;
let number2 =72;
for (let  i = 1; i<=number1 && i<=number2;i++){
    if(number1 % i == 0 && number2 % i == 0){
        hcf = i;

    }
}
console.log(`HCF of ${number1} and ${number2} is ${hcf}`)




//by user 
//while loop and if else

let prompt = require('prompt-sync')()

let number3 = parseInt(prompt('Enter the first positive integer :'))
let number4 = parseInt(prompt('Enter the second positive integer :'))
while(number3 != number4) {
    if(number3 > number4){
        number3 -= number4;
    }
    else{
        number4 -= number3;
    }
}
console.log(`HCF is ${number3}`)