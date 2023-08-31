//program to find the  ASCII value of character

let prompt= require('prompt-sync')()
const string = prompt ("Enter the character :")
const result = string.charCodeAt(0)
console.log(`The ASCII value is: ${result}`)