const express = require("express")
const app = express()
app.listen(3000,()=>{
    console.log("app is listening")
})
app.use((req,res,next)=>{
    //console.log(req)
    req.time = Date.now( ) ;
    console.log(req.method , req.hostname , req.path , req.time)
    return next() ;
   
})

app.get("/",(req,res)=>{
    
    res.send("he;;p")
})

app.get("/liu",(req,res)=>{
    
    res.send(";;;;;;;;;;;p")
})