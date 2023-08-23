//JavaScript Program to Guess a Random Number
let prompt = require('prompt-sync')()


function guessnumber(){
    const  random  = Math.floor (Math.random()* 10)+1;
    let number = parseInt(prompt('Guess a number form 1 to 10 : '));
    while(number !== random){
        number =  parseInt(prompt('Guess a number from 1 to 10:'))
    }
    if(number == random){
        console.log('you guessed the correct number .');

    }
}
guessnumber();
