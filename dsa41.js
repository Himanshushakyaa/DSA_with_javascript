// // program to check if a key exists

// const person = {
//     id :1,
//     name :'john',
//     age: 23
// } 
// const haskey = 'name' in person;
// if (haskey){
//     console.log('The key exists.');

// }else{
//     console.log('The key does not exists.')
// }




//by using hasOwnProperty

const person = {
    id : 1,
    name : 'Himanshu',
    age:23
}
const hasKey =  person.hasOwnProperty('name')
if(hasKey)
{
    console.log('The Key exists.');

}else{
    console.log('the key does not exist.');
}


