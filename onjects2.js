//const tinderUser= new Object(); //THIS IS A SINGLETON OBJECT
const tinderUser={} //THIS IS A NON SINGLETON OBJECT
tinderUser.id="IC#23";
tinderUser.name="Jota";
const regUser={
    email:"someOne@hotmail.com",
    fullname:{
        userFullname:{
            fname:"Satish",
            sname:"Choudhary"
        }
    }
}
//console.log(regUser);
//console.log(regUser.fullname);
//console.log(regUser.fullname.userFullname);
const obj1={
    name:"Govind",
    age:29
}
const obj2={
    name:"Rohit",
    age:22
}
const obj3=obj1;
//console.log(obj3);
const obj4={obj1,obj2};
//console.log(obj4.obj2.age);

const target={
    1:"a",
    2:"b",
    3:"c"
}
const source={
    4:"d",
    5:"e",
    6:"f"
}
const obj5=Object.assign({},target,source);
//spreding!!!!!!!!
//console.log(obj5);
const users=[
    {
        id:1,
        name:"Naman"
    },
    {
        id:2,
        name:"Pihu"
    },
    {
        id:3,
        name:"Mili"
    },
    {
        id:4,
        name:"Elisha"
    },
    {
        id:5,
        name:"Dhyom"
    }
]
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));//RETURNS ARRAY
// console.log(Object.values(tinderUser));//RETURNS ARRAY

//DESTRUCTURING OF OBJECT

const Jet=[
    {

        type:"Boeing 777X",
        price:"5000000000",
        countryOrigin:"USA"
    },


    {
        type:"Sukhoi Super Jet",
        price:"100000000",
        countryOrigin:"Russia"
    }




]

//console.log(Jet.countryOrigin);
//very tidious
// a neat code:

const {countryOrigin: origin}= Jet[1];
console.log(origin);




