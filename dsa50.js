// program to trim a string
const string = '       Himanshu     '

const result = string.trim();
console.log(result);



// using regularEx

function trimString(x){
    let trimValue = x.replace(/^\s+|\s+$/g,'');
    return trimValue;
}
const result1 =  trimString('    Hello Himanshu    ');
console.log(result1)