const express = require("express") ;
let app  =  express() ;
const mongoose = require('mongoose');
const path = require("path")
app.set("view engine" , "views")
const chat = require("./models/chat.js")
app.use(express.static(path.join(__dirname , "public")))
app.use(express.urlencoded({extended : true}))
const methodOverride = require("method-override") ;
app.use(methodOverride("_method"));
main()
.then(()=>{
    console.log("connection success")
})
.catch((err) => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
app.listen("8080" , ()=>{
    console.log("app is listening")
})
app.get("/" , (req , res)=>{
    res.send("app is listening")
})
// const chat1 =  new chat({
//     from : "rtam8u" ,
//     to : "yukt" ,
//     message : "hvfytfujefgufeguygfeu" ,
//     date : new Date() ,
// })
// chat1.save()
// .then((res)=>{
//     console.log(res) 
// }) 
// .catch((err)=>{
//     console.log(err)
// })
app.get("/chats" , async (req,res)=>{
    let  chats = await chat.find() ;
    // console.log(chats)
    res.render("index.ejs" , {chats})
})
app.get("/chats/new" , (req,res)=>{
    console.log("working")
    res.render("new.ejs")
})
app.post("/chats/k" , (req,res)=>{
    let {from,message,to} = req.body ;
    let chat1 =  new chat({
        from : from ,
        message : message ,
        to : to ,  
        date : new Date() ,
    });
    chat1.save()
    .then((res)=>{
        console.log("success") 
    }) 
    .catch((err)=>{
        console.log(err)
    })
    res.redirect("/chats")
})
app.get("/chats/:id/:edit" ,async (req,res)=>{
    let {id} = req.params ;
    //console.log(id) ;
    let data = await chat.findById(id) ;
    //console.log(data)
    res.render("edit.ejs",{data})
})
app.put("/chats/:id" , async (req,res)=>{
      let {message : msg} = req.body ;
      let {id} = req.params ;
      
      console.log(id)
      let g = await chat.findByIdAndUpdate( id , {message : msg} , {runValidators : true , new : true})
      //console.log(g)
      res.redirect("/chats")
})
app.delete("/chats/:id", async (req,res)=>{
    let {id} = req.params ;
    //console.log(id)
    let p = await chat.findByIdAndDelete(id)
    console.log(p) ;
    res.redirect("/chats")    
})
