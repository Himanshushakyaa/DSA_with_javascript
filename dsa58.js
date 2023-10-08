// program to formate the date
// get current date

let currentDate = new Date();
console.log(currentDate)

let day = currentDate.getDate();
console.log(day)

let month = currentDate.getMonth()+1;
console.log(month)

let year = currentDate.getFullYear();

if(day<10){
    day = '0'+ day;
}

if(month <10){
    month = '0' + month;

}

const formateDate1 = month + '/' + day + '/' + year ;
console.log(formateDate1);

const formateDate2 =  month + '-' + day  + '-' + year ;
console.log(formateDate2);

const formateDate3 = day + '-' + month + '-' + year;
console.log(formateDate3);

const formateDate4 = day + '/' + month + '/' + year ;
console.log(formateDate4);


