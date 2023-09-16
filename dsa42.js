// // program to clone the object

// const Person = {
//     name :'Himanshu',

//     age : 21,
// }

// const clonePerson = Object.assign({},Person);
// console.log(clonePerson);
// clonePerson.name = 'shakya';
// console.log(clonePerson.name);
// console.log(Person.name)


//by using spread syntax

// const person ={
//     name:'Himanshu',
//     age:21
// }
// const clonePerson = {... person}
// console.log(clonePerson)
// clonePerson.name = 'shakya'
// console.log(clonePerson.name);
// console.log(person.name);






//by using JSON.parse

const person = {
    name :'Himanshu',
    age:21

}
const clonePerson = JSON.parse(JSON.stringify(person));
console.log(clonePerson);
clonePerson.name = 'Shakya'
console.log(clonePerson.name);
console.log(person.name)


