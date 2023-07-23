//  print to all prime number in an interval

// const lowernumber = 2
// const highernumber = 20
// console.log(`The prime number between${lowernumber}  and ${highernumber} are :`)
// for(let i =  lowernumber; i <= highernumber; i++){
//     let flag = 0;
//     for(let j = 2 ; j <i ; j++){
//         if(i%j == 0){
//             flag =1;
//             break;
//         }
//     }
//     if(i>1 && flag == 0){
//         console.log(i)
//     }
// }


//by user

let input = require('prompt-sync')()
let lowerNumber = parseInt(input(console.log('enter the lower number :')))
let higherNumber = parseInt(input(console.log("Enter the higher number :")))
for(let i =  lowerNumber; i <= higherNumber; i++){
    let flag = 0;
    for(let j = 2 ; j <i ; j++){
        if(i%j == 0){
            flag =1;
            break;
        }
    }
    if(i>1 && flag == 0){
        console.log(i)
    }
}


