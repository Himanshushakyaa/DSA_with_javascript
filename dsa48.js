// program to format numbers as currency string

const number = 1234.5679;
const result = '$' + number.toFixed(2);
console.log(result);


//by using toLocalString

const result1 = (2450).toLocaleString('en-US',{
    style:'currency',
    currency:'USD'
})
console.log(result1)


//by using regularExpression

const result2 = 1234.5678.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

console.log('$ ' + result2);