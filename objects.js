
const symbl=  Symbol("SYMBOL_KEY");



const user={
    name:"Bhavyansh",
    "Full name":"Bhavyansh Choudhary",
    age:6,
    location:"Jorhat",
    email:"bhuviGulo15118@gmail.com",
    isLogged_In:false,
    favorite_food:["Potato Chips","Daliya","Anar Juice"],
    [symbl]:"kya hai yeh"
}
// console.log(typeof(user));
// console.log(typeof(user["Full name"]));
// console.log(typeof(user.name));
// console.log(typeof(user.age));
// console.log(typeof(user.location));
// console.log(typeof(user.email));
// console.log(typeof(user.isLogged_In));
// console.log(typeof(user.favorite_food));
// console.log(typeof(user[symbl]));
// console.log(user[symbl]);
console.log(user);
user.greet=function(){
    console.log("Hello Pfaizu bhaiya");
}
console.log(user.greet);// Function havnt been executed, but we get a reference of the function
console.log(user.greet());
//SOME STRING INTERPOLATION
user.greetspecific=function(){
    console.log(`Hello ${this.name} kaise ho?`);
    
}
console.log(user.greetspecific());
user.greetspecific();






