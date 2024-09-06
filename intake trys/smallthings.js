// let k = {
//     name:"kareem",
//     age:30,
//     salary:5000
// }

// Object.seal(k)

// k.age = 20
// console.log(k);

function greet(name,city){
    console.log(`hi ${name},I am from ${city} and My name is ${this.name}`);
}

const obj = {
    name:"john"
}
const agr = ["alice","Goa"]



greet.apply(obj,agr);