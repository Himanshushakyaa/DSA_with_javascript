//find the prime or not prime number

const input =  require('prompt-sync')()
let number = parseInt(input(console.log("enter any number")))
let isprime = true
if ( number === 1){
    console.log("1 is neither prime nor composite prime")

}else if(number>1){
    for(let i = 2; i <number; i++){
    if (number%i==0){
        isprime = false
        break;
    }
} 
   if(isprime){
    console.log(`${number} is prime number`)

}else{
    console.log(`${number} is a not prime number`)
}
}
else{
    console.log("The number is not a prime number ")
}

