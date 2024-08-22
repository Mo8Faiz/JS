let myDate= new Date();
// console.log("Just print : "+ myDate);
// console.log("toString : "+ myDate.toString());
// console.log("toDateString : "+myDate.toDateString());
// console.log("toISOString : "+myDate.toISOString());
// console.log("toLocaleString : "+myDate.toLocaleString());//GOOD ONE
//DATE IS OF TYPE Object
console.log(typeof(myDate));

let myDate2= new Date(2024,1,20);
//(YEAR,MONTH(0-11),DATE)
console.log(myDate2.toDateString());
let myDate3= new Date(2024,0,13,4,57,55);
console.log(myDate3.toLocaleString());
let myDate4= new Date("2020-11-18");
console.log(myDate4.toDateString());

let newDate= new Date();
console.log(newDate.toLocaleString('default',{
    weekday:"long"
}));





