let express = require("express")
let app = express() ;
const expresserr = require("./customerrclass.js") ;
app.listen(8080,()=>{
    console.log("app is listejning")
}) 
app.use("/admin" ,  (req,res)=>{
    throw new expresserr(401,"access to admin denied")
})
app.use( (err,req,res,next)=>{
   let {status=401 , message="specify error pls"} = err ;
   res.status(status).send(message);
})