//program to compare the value of two dates

const date1  =  new Date();
const date2  =  new Date()

const compare1 = date1 < date2;
console.log(compare1)

const compare2 = date1 > date2;
console.log(compare2);

const compare3 = date1 <= date2;
console.log(compare3)

const compare4 = date1 >= date2;
console.log(compare4) 


const compare5 = date1.getTime() === date2.getTime();
console.log(compare5);

const compare6 = date1.getTime() !== date2.getTime();
console.log(compare6)