function sum(a,b){
    return new Promise((res,rej)=>{
        let sum = a+b
        if(sum>10){
            res(sum)
        }else{
            rej("its less than 10")
        }
    })
}

async function main(){
    try {
        const result = await sum(1,2)
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
main()


let obj=[
    {
        name:"joe",
        age:30,
        salary:5000
    },
    {
        name:"john",
        age:30,
        salary:6000
    },
    {
        name:"jesson",
        age:30,
        salary:5000
    },
]



