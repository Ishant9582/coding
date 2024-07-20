const express = require("express")
const app = express()
app.listen(3000,()=>{
    console.log("app is listening")
})
app.use((req,res)=>{
    let {query} = req.query ;
    console.log(query)
    console.log("first middleware")
    //res.send("first middleware")
})
app.get("/",(req,res)=>{
    console.log("ok")
    res.send("he;;p")
})
app.get("/liu",(req,res)=>{
    console.log("poi")
    res.send(";;;;;;;;;;;p")
})