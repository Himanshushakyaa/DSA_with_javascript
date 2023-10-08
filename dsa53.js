// program to perform string compare

const string1 = 'Himanshu Shakya Codding'  
const string2 = 'himanshu shakya codding'
const result = string1.toUpperCase() === string2.toUpperCase()

if(result){
    console.log('the string are similar.')

}else{
    console.log('the strings are not similar.')
}


// byy using regex

const string3 = 'Himanshu Shakya'
const string4 = 'himanshu shakya'
const pattern = new RegExp(string3, "gi");
 const result1 = pattern.test(string4) 
 if(result){
    console.log('the strings are similar.')

 }
else{
    console.log('the strings are not similar')
}


//by using locale compare

const str1 = 'JavaScript Program'
const str2 = 'javascript program'
const reslt = str1.localeCompare(str2,undefined,{sensitivity:'base'})
if(reslt ==0){
     console.log('the strings are similar')

}else{
    console.log('the strings are not similar')
}