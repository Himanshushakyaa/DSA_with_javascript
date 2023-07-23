// find the number is positive ,negative and Zero

let num = 0
if(num >0){
    console.log("number is positive")
}else if(num == 0){
    console.log("number is Zero")

}
else{
    console.log("number is negative")
}




//by user



let input = require('prompt-sync')()

let number = parseInt(input(console.log("enter any number")))
if(number>0){
    console.log("Number is positive")

}else if(number == 0){
    console.log("Number is Zero")

}else{
    console.log("Number is negative")

}
