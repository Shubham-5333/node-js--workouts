const  express = require('express')
const app = express()



app.get("/",(req,res)=>{
    res.send("hi")
})

app.get("/home/:id",(req,res)=>{
    let num = req.params.id
    console.log(num);
    if(num%2==0){
        setTimeout(()=>{
            res.send(num + "is even")
        },4000)
    }else{
        res.send(num + "is odd")
    }
})

app.listen(2000,()=>console.log(`server running http://localhost:2000`));