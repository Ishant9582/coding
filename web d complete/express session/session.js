const express = require("express") ;
const app = express();
const flash = require("connect-flash")
const session = require("express-session");
app.set("view engine" , "ejs")

const sessionoption = {
    secret : "supersecret" , 
    // AGR NICHE VALE 2 USE NHI KIE TO WARNING AAYEGI
    resave : "false" , 
    saveUninitialized : true
}
app.use(session(sessionoption));
app.use(flash()) ;
app.listen(3000,(req,res)=>{
    console.log("listening")
})
// connect-flash

app.use((req,res,next)=>{
    res.locals.successmsg = req.flash("success");
    res.locals.errmsg = req.flash("error");
    next()
})
app.get("/register" , (req,res)=>{
    let {name = "annonymous"} = req.query ;
    req.session.name = name ;
    //console.log(req.session.name) ;
    if(name === "annonymous"){
        req.flash("error" , "user not registered successfully")
        console.log("hi")  ;
    }
    else{
        req.flash("success" , "user registered successfully")
    }
    res.redirect("/hello")
})
app.get("/hello" , (req,res)=>{
    let name = req.session.name ;
    
    // niche vaki dono line as a middleware jyada achi rhegi
    // res.locals.successmsg = req.flash("success");
    // res.locals.errmsg = req.flash("error")
    res.render("flash.ejs",{name})
})

// for saving
// app.get("/register" , (req,res)=>{
//     let {name = "annonymous"} = req.query ;
//     req.session.name = name ;
//     console.log(req.session.name) ;
//     res.redirect("/hello")
// })
// app.get("/hello" , (req,res)=>{
//     res.send(`hey ${req.session.name}`)
// })


 // for session count 
// app.get("/reqcount" , (req,res)=>{
//     if(req.session.count){
//         req.session.count++ ;   
//     }
//     else{
//         req.session.count = 1 ;
//     }
//     res.send(`u send req for ${req.session.count}`)
// })
