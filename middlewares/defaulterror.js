const express = require("express")
const app = express()
app.listen(3000,()=>{
    console.log("app is listening")
})
app.use("/api",(req,res,next)=>{
    let {query} = req.query ;
    if (query === "giveaccess"){
        return next() ;
    }
    throw new Error ("access denied") ;
});
app.get("/api",(req,res)=>{
    
    res.send("access given")
})
// app.get("/wrong",(req,res)=>{
//     a = pqrsd ;
// })