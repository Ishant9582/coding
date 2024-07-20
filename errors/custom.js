let express = require("express")
let app = express() ;
const expresserr = require("./customerrclass.js")
app.listen(3000,()=>{
    console.log("app is listejning")
})
const check = (req,res,next)=>{
    let {token} = req.query ;
    if(token === "give"){
        next()
    }
    throw new expresserr(401,"access denied")

}
app.use("/api" , check , (req,res)=>{
    res.send("hello")
})
app.get("/err" , (req,res)=>{
   ab = abced ;
    
})

app.use((err,req,res,next)=>{
    console.log("------------error---------")
    //next(err)
    // let {status , message} = err ;
    // for giving default valuues ;
    let {status=500 , message="default error message"} = err ;
    res.status(status).send(message) ;
})