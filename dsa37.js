// //program to count the number i vowels in a string

let prompt = require('prompt-sync')()


// function CountVowel(str){
//     const count  = str.match( /[aeiou]/gi ).length;
//     return count;

// }
// const string =  prompt('enter a string: ');

// const result = CountVowel(string);
// console.log(result)




//by using loop


const Vowels  = ["a","e","i","o","u"]
function CountVowel(str){
    let Count =  0;
    

    for(let letter of str.toLowerCase()){
        if(Vowels.includes(letter)){
            Count++;
        }
    }
return Count;
}
const string1 = prompt('enter a string:');
const result1 = CountVowel(string1);
console.log(result1)

