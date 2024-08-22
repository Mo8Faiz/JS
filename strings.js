const name="Bruce Wayne";
const age=27;
// console.log(name+ age+" BatMan");
//FUCK THIS METHOD OF STRING CONCATINATION
//USE THIS:
const city="Gotham"
console.log(`I am BatMan I live in ${city} and my name is ${name}`);
//THIS METHOD IS KNOWN AS STRING INTERPOLATION

console.log(city.toLowerCase());
console.log(city);
console.log(city.charAt(2));
console.log(city.indexOf('h'));
const subcity=city.substring(3,);
console.log(subcity);
const slicedCity=city.slice(-1,5);
console.log(slicedCity);


const timeMe="          pubg khelne aao          ";
console.log(timeMe.trim());
const url="https://adidasFootball.com/%20argentina";
console.log(url.replace('%20','-'));

console.log(url.includes('adidas'));
console.log(city.split('+'));

