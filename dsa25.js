//find the factor of a number

let prompt = require('prompt-sync')()
const num = parseInt(prompt('enter a positive number: '))
console.log(`the factors of ${num} is:`);
for(let i = 1 ; i <=num; i++){
    if(num % i == 0){
        console.log(i);

    }
}