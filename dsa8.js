 //convert celcious to farhnheit temprature 


 const celcious  = 45
const farhnheit = (celcious * 1.8) +32
console.log(`${celcious} degree is equal to ${farhnheit} degree farhnheit`)


//by user


let input = require('prompt-sync')()
let celciouss = parseInt(input(console.log("enter the degree celciuos")))
let farhnheitt =  (celciouss *1.8)+32
console.log(`${celciouss} degree is equal to ${farhnheitt} degree farhnheit`)
