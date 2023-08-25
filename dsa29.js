//program to find the factorial of a number

let prompt = require('prompt-sync')()

function factorial(x){
    if(x==0){
        return 1;
    }else{
        return x * factorial (x-1);
    }
}

const num =  parseInt(prompt('enter a positive number:'))
if(num >= 0){
    const result = factorial(num);
    console.log(`the factorial of ${num} is ${result}`);

}else{
    console.log('enter a positive number.')
}