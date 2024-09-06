// let arr = [22,4,6,32,243,3]

// let sum =0 

// let k = arr.reduce((total,value,index,array)=>{
//     if(value%2==0){
//         sum++
//     }
 
// })
// console.log(sum);


// function f1(cb){
//     setTimeout(()=>{
//         cb(3)
//     },1000)
// }

// function f2(cb){
//     setTimeout(()=>{
//         cb(4)
//     },1000)
// }
// function f3(cb){
//     setTimeout(()=>{
//         cb(6)
//     },1000)
// }

// f1((data)=>{
//     console.log(data);
//     f2((data1)=>{
//         console.log(data1);
//         f3((data2)=>{
//             console.log(data2);
//             console.log(data+data1+data2);
//         })
//     })
// })

// const http = require( 'http' );

// const server = http.createServer((req,res)=>{
//     res.write("hello moto")
//     res.end()
// })
// server.listen(2000,()=>console.log("server running"));


// let obj = {name: "zfpx",age:18};
// let {name,age} = obj;

// console.log(age);

let arr = [22,4,6,32,243,3]

let k = arr.reduce((value)=>{
    if(value ==6){
         value = 20
    }
    return value
})
console.log(k);