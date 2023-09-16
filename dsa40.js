// program to check if a string starts with 's and ends with 'g

//using built -  in  methods

//function checkString(str){
  //  if(str.startsWith('s') && str.endsWith('g')){
//         console.log('The string starts with s and ends with g')
//     }
//     else if(str.startsWith('s')){
//         console.log('The string starts with s but does not ends with G')
//     }
//     else if(str.startsWith('g')){
//         console.log('the string starts does not with s but end with G')

//     }else{
//         console.log('the string does not  starts with s and does not end with G')

//     }
// }
let prompt = require('prompt-sync')()
// let string = prompt('Enter a string:')
// checkString(string);

// by using regexp

function checkstring(str){
    if (/^S/i.test(str) && /G$/i.test(str)){
        console.log('The string starts with s and ends with G');

    }
    else if(/^S/i.test(str)){
        console.log('the string starts with s but does not ends with G')

    }
    else if(/^G$/i.test(str)){
        console.log('the string does not start with s but ends with G')

    }
    else{
        console.log('the string does not start with s and does not end with  G')
    }
    }

    for(let i=0; i<3;i++){
        const string   = prompt('Enter a string:');
        checkstring(string);check 
    }
