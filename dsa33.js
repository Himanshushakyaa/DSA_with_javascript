// program to sort words in alphabetical order

/* 
let prompt = require('prompt-sync')()
const string =  prompt('Enter a sentence:')

const words = string.split(' ');
words.sort();

console.log('The sorted words are:')
for(const element of words){
    console.log(element);
}
*/


//program to sort words in alphabetical order
let prompt = require('prompt-sync')()
const string = prompt('Enter a sentence: ');
const words =  string.split(' ');
words.sort();
console.log('The sorted words are:');
for (const element of words){
    console.log(element)
}
