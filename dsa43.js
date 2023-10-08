//program to merge property of two objects

// const person = {
//     name : 'jack',
//     age:26
// }

// const student = {
//     gender:'male'

// }
// const  newObj = Object.assign(person,student);
// console.log(newObj);

// using spread operator

const person =  {
    name:'Himanshu',
    age:23
}


const student = {
    gender : 'male',
    Catagory:'Shakya'
}


const newObj = {...person,...student};
console.log(newObj);
