// program to Remove specific item from a array


function removeItems(arr, n){
    const newArray = [];
    for (let i = 0 ; i < arr.length; i++){
    if(arr[i] != n){
        newArray.push(arr[i])
    }
}
return newArray;
}
const result =  removeItems([1,2,3,4,5,8],8);

console.log(result);




//by using array.splice


function removeItemsfromarray(arr,n){
    const index = arr.indexOf(n)
    if(index >-1){
        arr.splice(index,1)

    }
    return arr;

}
const result1 = removeItemsfromarray([1,2,3,4,5],3);

console.log(result1)