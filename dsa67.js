//program to insert and item at a specific into an array

function insertElement(){
    let array = [1,2,3,4,5];
    let index = 3;
    let element = 8;
    array.splice(index,0,element)
    console.log(array);
}
 
insertElement()


// by using loop


function insertElement1(){
    let array1 = [1,2,3,4];
    let index1 = 3;
    let element1 = 8;

    for (let i = array1.length; i>index1; i--){
        array1[i] = array1[i-1];
    }
    array1[index1] = element1
    console.log(array1)
}
insertElement1()