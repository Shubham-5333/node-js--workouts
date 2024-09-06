// // how callback works 

// console.log('hello')
// function first(cb){

//         cb(3)
// }
// function first1(cb){

//         cb(4)
// }
// function first2(cb){

//         cb(5)
// }
// first((data)=>{ 
//     first1((data1)=>{
//         first2((data2)=>{
//             console.log(data1+data2+data)
//             console.log(data1/data)
//             console.log(data1 + data2);
//             console.log(data2 % data)
//         })

//     })
// })
// console.log("jhgv");












// console.log('hello');

// function first(cb) {
//     setTimeout(() => {
//         cb(3);
//     }, 1000);
// }

// function first1(cb) {
//     setTimeout(() => {
//         cb(4);
//     }, 1000);
// }

// function first2(cb) {
//     setTimeout(() => {
//         cb(5);
//     }, 1000);
// }

// first((data) => {
//     console.log("First operation completed with data:", data);
//     first1((data1) => {
//         console.log("Second operation completed with data:", data1);
//         first2((data2) => {
//             console.log("Third operation completed with data:", data2);
//             console.log("Calculations:");
//             console.log("Sum:", data1 + data2 + data);
//             console.log("Division:", data1 / data);
//             console.log("Sum of first two:", data1 + data2);
//             console.log("Modulus:", data2 % data);
//             console.log("End of calculations.");
//         });
//     });
// });

// console.log("jhgv");

// function api(num){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve(num)
//         },1000)

//     })
// }
// function api1(num){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve(num)
//         },1000)

//     })
// }

// api(4).then((response)=>{
//     return api1(response+5)   
//     })
//     .then ((response)=>{
//         console.log (response)
//     })



// function addTwoNUm(a, b) {
//     return new Promise((resolve, reject) => {
//         if (a < 1 || b < 1) {
//             reject("error")
//         } else {
//             let sum = a + b;
//             resolve(sum);
//         }
//     })
// }
// function subtract(a, b) {
//     return new Promise((resolve, reject) => {
//         if (a < 1 || b < 1) {
//             reject("error")
//         } else {
//             let difference = b - a
//             resolve(difference)
//         }
//     })
// }




// addTwoNUm(3, 8)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

// subtract(0, 0)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((error) => {
//         console.log(error);
//     })


// async function addAndSubtract(a, b) {
//     try {
//       const sum = await addTwoNUm(a, b);
//       console.log('Sum:', sum);

//       const difference = await subtract(a, b);
//       console.log('Difference:', difference);
//     } catch (error) {
//       console.error('Error occurred:', error);
//     }
//   }

//   addAndSubtract(5, 10);

//   const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, "resolved");
//   }); //will be resolved after 300ms

//   const promise2 = 93; //non-promise

//   const promise3 = new Promise((resolve, reject) => {
//     setTimeout(reject, 1000, "error");
//   }); // will be resolved after 100ms

//   Promise.all([promise1, promise2, promise3])
//     .then((values) => {
//       console.log(values);
//     })
//     .catch((err) => {
//       console.log(err);
//     });



// function curr(a) {
//   return (b) => {
//     return (c) => {
//       return a + b + c
//     }
//   }
// }
// console.log(curr(1)(2)(3));



// function sum(a,b){
//   console.log(a+b);
// }

// function calc(a,b,sumFunc){
//   sumFunc(a,b)
// }

// calc(5,3,sum)


// function fetchData(){
//   return new Promise((resolve,reject)=>{
//     console.log("data fetched");
//   })
// }

// async function d(){
//  try {
//    const data = await fetchData()
//    console.log(data);
//  } catch (error) {
//   console.log(error);
//  }
// }

// d()


function sum(a, b) {
  return new Promise((res, rej) => {
    let total = a + b
    if (total % 2 == 0) {
      res("its even")
    } else {
      rej("its odd")
    }
  })
}

sum(3, 5)
  .then((data) => {
    console.log(data);
  })
  .catch((err)=>{
    console.log(err);
  })