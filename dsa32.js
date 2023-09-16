// // program to check if the string is palindrome or not

 let prompt = require('prompt-sync')()
//  function checkPalidrome(string){
//     const len = string.length;
//     for(let i = 0; i<len /2;i++){
//         if(string[i] !== string[len - 1 - i]){
//             return 'It is not a Palidrome';


//         }
//     }
//     return 'It is a palidrome';
// }
// const string =  prompt('enter a string :');
// const value = checkPalidrome(string);
// console.log(value);




// program to check if the string is palidrome or not

function checkpalidrome(string){


    const arrayValues = string.split('');
     
    const reverseArrayValues = arrayValues.reverse();

    const reverseString = reverseArrayValues.join('');

    if(string == reverseString){
        console.log('It is a Palidrome');

    }else{
        console.log('It is not a Palidrome')
    }

}
const string = prompt('enter a string:')

checkpalidrome(string)