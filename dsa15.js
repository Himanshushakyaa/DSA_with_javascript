 // create a table of any number
 
 let integer = 5
for(let i = 1; i <= 10 ; i++){
    result = i * integer

console.log(`${integer} * ${i} = ${result}`)
}


//by user method

let input = require('prompt-sync')()
let num = parseInt(input(console.log("Enter the numer")))
for(let i =1; i <=10; i++){
    let  result = i *num
    console.log(`${num} * ${i} = ${result}`)
}