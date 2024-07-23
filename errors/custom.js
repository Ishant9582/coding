let express = require("express")
let app = express() ;
const expresserr = require("./customerrclass.js")
app.listen(3000,()=>{
    console.log("app is listejning")
})
const check = (req,res,next)=>{
    let {token} = req.query ;
    console.log(token)
    if(token === "give"){
        next()
    }
    throw new expresserr(401,"access denied")
    // expresserr ko call krrhe custom status and message ko define k lie

}
app.use("/api" , check , (req,res)=>{
    res.send("hello")
})
app.get("/err" , (req,res)=>{
   ab = abced ;
   
    // isme koi expresserr to throw nhi hua 
    //to jb hm niche vali p jayenge to isme koi status code nhi to 
    //usko default value denge niche
})

app.use((err,req,res,next)=>{
    console.log("------------error---------")
    //res.send(err)
    //next(err)
    // let {status , message} = err ;
    // for giving default valuues ;
    let {status=500 , message="default error message"} = err ;
    res.status(status).send(message) ;
})