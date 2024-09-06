// function hello(){
//     let name = "harry"
//     function hello1(){
//         console.log(name);
//     }
//     hello1()
// }
// hello()



let age;
console.log(age);
age=30




// let str = "hello world"
// console.log(str. ('').reverse().join(''));


// let arr=[4,7,1,8]
// let j = arr.splice(1,1,1,5,5)
// console.log(arr);



// function sum(a,b){
//     console.log(a+b);
// }

// function calc(a,b,sumFunc){
//     sumFunc(a,b)
// }
// calc(5,3,sum)



// function sum(cb) {
//     setTimeout(() => {
//         cb(4)
//     }, 1000)
// }

// function sum1(cb) {
//     setTimeout(() => {
//         cb(4)
//     }, 1000)
// }

// function sum2(cb) {
//     setTimeout(() => {
//         cb(4)
//     }, 1000)
// }

// sum((res) => {
//     sum1((res1) => {
//         sum1((res2) => {
//             console.log(res + res1 + res2);
//         })
//     })
// })





// let curr = (a) => {
//     return (b) => {
//         return (c) => {
//             console.log(a+b+c);
//         }
//     }
// }

// curr(2)(3)(4)




// function sum(a,b){
//     return new Promise((resolve,reject)=>{
//         let sum = a+b
//         if(sum%2==0){
//             resolve(sum + "is even")
//         }else{
//             reject(sum + "is odd")
//         }
//     })
// }

// async function calc(){
//     try {
//         let result = await sum(3,4)
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }
// calc()





// normal function

// function add(x){
//     console.log(x);
// }
// add(4)

// // arrow function 

// const ad = (a)=>{
//     console.log(a);
// }

// ad(7)




// let arr = [4,2,3,4]

// let [name,age] = arr

// console.log(age);





// function greet(){
//     console.log(`Im ${this.name}`);
// }

// let person ={name: "John"};

// let binding = greet.bind(person)
// // let args =["hi"]

// binding()


// console.log('Start');

// setImmediate(() => {
//   console.log('Inside setImmediate callback');
// },0);

// console.log('End');


let arr = [3,5,2,1]


