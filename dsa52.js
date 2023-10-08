// program to check if a string contains a substring



let prompt = require('prompt-sync')()
const str = prompt(console.log('Enter a string:'))


const checkstring =  prompt(console.log('enter a string that you want to check:'))

if (str.includes(checkstring)){
    console.log(`The string contains ${checkstring}`);
    
}else{
    console.log(`the string does not contain ${checkstring}`)
}
// by using index of method


const str1 = prompt('enter  a string :')
const checkstring1 = prompt('enter a string that you want be check :')
if(str1.indexOf(checkstring1) !== -1){


    console.log(`the string contains  ${checkstring1}`)

}else{
    console.log(`the string does not contain  ${checkstring1}`)
}