// program to convert an object to a string


const person = {
    name : 'Himanshu',
    age : 23
}
const result = JSON.stringify(person);
console.log(result);
console.log(typeof result);



//  using object to a string

const person1 = {
    name:'Himanshu',
    age :23


}

const result1 = String(person);
const result2 = String(person['name']);
console.log(result1)
console.log(result2)
console.log(typeof result1);