const express = require("express")
const app = express()
app.listen(3000,()=>{
    console.log("app is listening")
})
// app.use((req,res,next)=>{
//     console.log("first middleware")
//     next() ;
//     console.log("this is after next")
// })
app.use((req,res,next)=>{
    console.log("first middleware")
    return next() ;
    console.log("this is after next")
})
app.use((req,res,next)=>{
    console.log("second middleware")
    next() ;
})
app.get("/",(req,res)=>{
    
    res.send("he;;p")
})

app.get("/liu",(req,res)=>{
    
    res.send(";;;;;;;;;;;p")
})