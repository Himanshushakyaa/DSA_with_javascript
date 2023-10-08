// program to check if a string starts with another string

const string = 'hello world';
const toCheckString = 'h';
if(string.startsWith(toCheckString)){
    console.log('The string starts with "h".');

}else{
    console.log(`The string does not starts with "h".`)
}



//by using lastIndexOf


const string1 =  'Helle Himanshu';
const toCheckString1 = 'H'
let result = string.lastIndexOf(toCheckString,0) === 0;
if(result){
    console.log('the string starts with "H"');

}
else {
    console.log('the string does not start with "H" ')
}

// by using RegEx


const string2 = 'Hello Himanshu';
const pattern = /^H/;
let result1 = pattern.test(string);
if(result){
    console.log('the string starts with "H"');

}else{
    console.log(`the string does not starts with "H"`);
}