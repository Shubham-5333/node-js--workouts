const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    res.send("hello")
})

app.listen(2000,()=>console.log("server running"));


