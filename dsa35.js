// program to reverse a string
//  by using for loop

let prompt = require('prompt-sync')()


function reverseString(str){
    let newString = "" ; 
    for(let i = str.length - 1; i >= 0 ; i--){
        newString += str[i];
    }
    return newString;
}
// const string = prompt('enter a string :');

// const result =  reverseString(string);
// console.log(result);



// using built in Methods

function reverseString(str) {

    const arrayStrings = str.split("");
    const reverseArray = arrayStrings.reverse();
    const joinArray = reverseArray.join("");
    return joinArray;
}
 
const string = prompt('Enter a string: ');
const result = reverseString(string);
console.log(result);

