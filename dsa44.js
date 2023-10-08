// // program to count the number of keys/properties in an object

// const student = {
//     name :'John',
//     age : 20,
//     hobbies :['reading','games','coding'],
//     catagory:'Shakyajii'

// }
// let count = 0;
// for (let key in student){
//     count++;
// }
// console.log(count);



//next method

// const student = {
//   john:'Himanshu',
//   age :22,
//   hobbies:['reading','games','coding']

// };
// const person = {
//     gender : 'male',
//     catagory : 'shakyajii'
// }


// student.__proto__ = person;
// let count = 0;
// for (let key in student){
//     ++count;
// }

// console.log(count)





//by using object key


const student = {
    name :'john',
    age:20,
    hobbies:['reading','games','coding'],
    love : 'my mom and dad or mahadev is my love'
};
const result = Object.keys(student).length;
console.log(result)