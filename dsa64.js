// program to add element to an array

function addElement(arr){
    arr.unshift(4)
    console.log(arr);

}
const array = [1,2,3];
addElement(array)


//using by splice method

function addElement1(arr){
    arr.splice(0,0,4)
    console.log(arr)

}
const array1 =[1,2,3]
addElement1(array1)

//by using spread operator

function addElement3(arr){
    arr =[4,...arr];
     console.log(arr)

}
const array2 = [1,2,3];
addElement3(array2)


// by using concat method

function addElement4(arr){
    arr =[4].concat(arr);
    console.log(arr)

}
const array3 = [1,2,3]

addElement4(array3)