//program to replace all occurrence of a string

const string = 'Mr Red has blue house and a white car';
  
const regex = /red/gi;
const newText = string.replace(regex,'Himanshu');
console.log(newText)



//by using built - in method

const string1  = 'Mr red has a red house and a red car';
const result = string1.split('red').join('blue');
console.log(result);