//program to check if an array contains a specified value


const array = ['you','will','learn','javascript'];
const hasvalue = array.includes('javascript');

if(hasvalue){
    console.log('array contains a value.');

}else{
    console.log('array does not contain a value.')
}


//by using indexOf


const array1 = ['you', 'will','learn','javascript'];
const hasvalue1 = array.indexOf('javascript') !== -1;

if(hasvalue){
    console.log('array contains a value')

}else{
    console.log('array does not contain a value.')
}

