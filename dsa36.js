// program to check the number of occurence of a character
let prompt = require('prompt-sync')()

function countString(str,letter){
    let count = 0;
    for(let i = 0 ; i <str.length; i++){
        if(str.charAt(i) == letter){
            count += 1
        }
    }
    return count;

}
const string =  prompt('enter a string :');
const letterToCheck =  prompt('Enter a letter to check :')
const result = countString( string, letterToCheck);
console.log(result);




//by using regex method

function countstring(str,letter){
    const re = new RegExp(letter,'g');
    const count = str.match(re).length;
    return count;

}

const string1 = prompt('Enter a string :');
const letterToCheck1 = prompt('enter a letter to check :');
const result1 = countString(string1, letterToCheck1 );
console.log(result); 