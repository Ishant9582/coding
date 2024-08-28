const express = require("express") ;
const app = express();
const cookieParser = require("cookie-parser");
// app.use(cookieParser())
// for signed cookies use below one
app.use(cookieParser("secretcode"));
app.listen(3000,(req,res)=>{
    console.log("listening")
})
// for getting cookies
// app.get("/" , (req,res)=>{
//     console.log(req.cookies)
//     let{name = "annoymous"} = req.cookies ;
//     res.send(`hey! welcome ${name}`)
// })
// for sending cookies
// app.get("/getcookie" , (req,res)=>{
//     res.cookie("user","rahuk")
//     res.send("working")
// })
// signed cookies
app.get("/getsigned" , (req,res)=>{
    res.cookie("made" , "india" , {signed : true})
    res.send("cookie send")
})
app.get("/verify" , (req,res)=>{ 
    let r = (req.signedCookies) ;
    console.log(r)
    res.send("verified")
  
})