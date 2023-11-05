//program to append an object to an array


function insertObject(arr,obj){
    arr.push(obj);
    console.log(arr)
}
let arr = [1,2,3]

let object = { x:12,y:8}
insertObject(arr,object);


// by using splice

function insertObject1(arr,obj){
    let index = arr.length;
    arr.splice(index,0,object);
    console.log(arr);
}
let arr1 = [1,2,3]
let object1 = {x:12,y:8}

insertObject1(arr1,object);

//by using  splice


function insertObject2(arr,obj){
    let index = arr.length;

    arr.splice(index,0,object);
    console.log(arr);
}
let arr2 = [ 1,2,3];

let object2 = { x:12,y:8}

insertObject2(arr2,object)



//by using spread



function insertObject(arr, obj) {


     arr = [...arr, object];
     
     console.log(arr);
 }

 let array3 = [1, 2, 3];

 let object3 = {x: 12, y: 8};
 

 insertObject(array3, object3);
