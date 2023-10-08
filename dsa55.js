// program to replace all line breaks in a string with <br>


const string = `I am Learning javaScript.
JavaScript is fun.
JavaScript is easy.`;

const result = string.replace(/(\r\n|\r|\n)/g, '<br>');
console.log(result)



//by using in build method 


const  string1 = `I am Learning JavaScript.
JavaScript is fun.
JavaScript is easy,`
const result1 = string.split('\n').join('<br>');
console.log(result)