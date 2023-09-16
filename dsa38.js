// //program to  create  javascript object using object litral
// //usinng object literal

// const person  =  {
//     name: 'john',
//     age: 20,
//     hobbies: ['reading','games','coding'],
//     greet: function(){
//         console.log('Hello everyone.');

//     },
//     score:{
//         maths:90,
//         science:80
//     }
// };
// console.log(typeof person);
// console.log(person.name);
// console.log(person.hobbies[0]);
// person.greet();
// console.log(person.score.maths);



// //by using object directly


// const  person  =  new Object({
//     name:'john',
//     age:20,
//     hobbies:['reading','games','coding'],
//     greet: function(){
//         console.log('hello everyone.');
//     },
//     score :{
//         math:90,
//         science:80
//     }
//     });
//     console.log(typeof person);
//     console.log(person.name);
//     console.log(person.hobbies[1]);
//     console.log(person.score.science)
//     person.greet();


    //by using constructor function

  

function Person() {
    this.name = 'Himanshu',
    this.age = 20,
    this.hobbies = ['reading', 'games', 'coding'],
    this.greet = function() {
        console.log('Hello everyone.');
    },
    this.score = {
        maths: 90,
        science: 80
    }

}

const person = new Person();

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[2]);
person.greet();
console.log(person.score.maths);