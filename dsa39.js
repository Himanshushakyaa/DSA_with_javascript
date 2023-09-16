//program to  remove a property from an object

const student = {
    name: 'Himanshu',
    age:20,
    hobbies:['reading','games','coding'],
    greet:function(){
        console.log('Hello everyone.');

    },
    score:{
        english:90,
        science:80

    }


};
delete student.greet;
delete student['score'];
 console.log(student)
