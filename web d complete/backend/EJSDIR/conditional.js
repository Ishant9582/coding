let express = require("express")
let app = express() ;
let port = 5000 ;
app.set("view engine","ejs")
app.listen(port,()=>{
    console.log("app is listening on port",port)                       
})
app.get("/",(req,res)=>{
    res.send("hello")
})
app.get("/diceroll",(req,res)=>{
    let diceval = Math.floor(Math.random()*6) + 1 ;
    console.log(diceval)
    res.render("rolldicewithlogic.ejs",{diceval})
})