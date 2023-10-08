//program to replace all occurancences of a string



const string = 'Mr Red has red house and a red car';
const regex = /red/gi;
const newText = string.replace(regex,'blue');

console.log(newText);



//by using in build method


const string1 = 'Mr red has a red house and a red car';
const result  =  string.split('red').join('blue')
console.log(result)