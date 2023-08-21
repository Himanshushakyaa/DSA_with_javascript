//program to make a simple calculator


// let prompt = require('prompt-sync')()
// const operator = prompt('Enter operator(either +,-,* or /):');
// const number1 = parseInt(prompt('enter the first number :'))
// const number2 = parseInt(prompt('enter the second numner :'))
// let result;
// if (operator == '+'){
//     result = number1+number2;

// }
// else if(operator == '-'){
//     result = number1 - number2;

// }
// else if(operator == '*'){
//     result = number1 *number2;

// }else{
//     result =number1 / number2;
// }
// console.log(`${number1} ${operator} ${number2} =${result}`)




//by switch method

let result1;
let prompt = require('prompt-sync')()
const operator =  prompt ('Enter operator (either +,-,* or /):');
const number1 = parseInt(prompt('Enter first number :'))
const number2 = parseInt(prompt('enter the second number:'))
switch(operator){
    case'+':
    result1 = number1+number2;
    console.log(`${number1}+${number2}=${result1}`)
    break;

    case'-':
    result1 = number1-number2;
    console.log(`${number1}- ${number2}=${result1}`);
    break;
    
    case'*':
    result1 = number1 *number2;
    console.log(`${number1}*${number2}=${result1}`);
    break;
    
    case'/':
    result1= number1/number2;
    console.log(`${number1}/${number2}=${result1}`);
    break;

    default:
        console.log('Invalid operator')
        break;

}