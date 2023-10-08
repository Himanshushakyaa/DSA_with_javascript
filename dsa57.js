//JavaScript Program to Check Leap Year

let prompt = require('prompt-sync')()
const year = parseInt(prompt(console.log('enter a year')))
function checkLeapYear(){
     if((0 == year % 4) && (0 != year %100) || ( 0 == year % 400)){
        console.log(year + ' is a leap year');

     }else{
        console.log(year +' is not a leap year');
     }
}
checkLeapYear(year)



//by using new date
 function checkLeapYear1(year){
    const leap =  new Date(year,1,29).getDate() === 29;
    if(leap){
        console.log(year + ' is a leap year');

    }else {
        console.log(year + 'is not a leap year')
    }
 }
 const yearr = parseInt(prompt(console.log('enter a year :')))
  checkLeapYear1(year)