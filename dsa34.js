// program to replace a character of a string

 /*const string = 'Mr Red has a red house and a red car' ;

const newText = string.replace('red','blue');
console.log(newText);*/





// by using RegEx

const string = 'Mr Red has a red house and a red car';

//regex expression
const regex = /red/g;
const newText = string.replace(regex,'blue');
console.log(newText);