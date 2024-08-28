const express = require("express")
const app = express()
app.listen(3000,()=>{
    console.log("app is listening")
})
app.use("/h",(req,res,next)=>{
    res.send("page founded") 
    return next() ;  
})
app.use((req,res)=>{
    res.send("page not found") 
})