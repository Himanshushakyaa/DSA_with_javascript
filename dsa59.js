// program to display the date //get local machine date time

const date = new Date()

const n = date.toDateString()
console.log('Date: ' + n)


const time = date.toLocaleTimeString()
console.log( 'Time: ' + time)