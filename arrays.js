// const arr=new Array();
// for(let i=0;i<10;i++){
//     arr.push(i);
// }
// console.log(arr);

// arr.shift();
// console.log(arr);
// console.log(arr.includes(3));
// console.log(arr.concat(90,80,70));
// console.log(arr);
// console.log(arr.findIndex(7));

const russian=["Mig29","Su27M","Su30SM","Su35M","Su57","Mig35","Mig31"];
const american=["F16B52","F15EX","F15E","F18SH","F22","F35A"];
const french=["Mirage2000D","RafaleF3","Jaguar"];
//russian.push(american);
//console.log(russian);
//CONCAT
console.log(russian.concat(american));
//SPREAD
const combineAC=[...russian,...american,...french];
console.log(combineAC);
//CONVERT ANYTHING TO AN ARRAY
const str1="Sukhoi";
const str1toarr=Array.from(str1);
console.log(str1toarr);
console.log(Array.from({name:"Farhan"}));//INTERESTING

let a=109;
let b="Strixx";
let c=true;

console.log(Array.of(a,b,c));
const myDate= new Date();
console.log(myDate.getTime());
console.log(myDate.toLocaleDateString('en-India'));
console.log(myDate.toDateString());
console.log(myDate.toISOString());








