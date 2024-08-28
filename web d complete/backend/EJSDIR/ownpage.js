let express = require("express")
let app = express()
let port = 3000 ;
let path = require("path")
app.set("view engine","ejs") ;
app.set("views",path.join(__dirname , "/folder"))
app.listen(port,()=>{
    console.log("app is listenning")
})
app.get("/",(req,res)=>{
    res.render(`home.ejs`)  
})
app.get("/search",(req,res)=>{
    let {s} = req.query ;
    console.log(s)
    // agr s define kr rhe to searching k time ?s = krna 
    // vrna agr sidha console.log(req.query) kr rhe to koi dikkat nhi
    res.render(`pwskills.ejs`)   
})
app.get("/buy",(req,res)=>{
    res.render(`buy.ejs`)   
})
app.get("/:want/:id",(req,res)=>{
    let{want,id} = (req.params) ;
    // let r = `<h1>welcome ${want} your id is ${id} </h1>` ;
    res.render("html.ejs")
})
app.get("*",(req,res)=>{
    res.render(`enter valid thing`) ;
})


