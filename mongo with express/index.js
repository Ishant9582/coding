const express = require("express") ;
let app  =  express() ;
const mongoose = require('mongoose');
const path = require("path")
app.set("view engine" , "views")
const chat = require("./models/chat.js")
app.use(express.static(path.join(__dirname , "public")))
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
const chat1 =  new chat({
    from : "rtam8u" ,
    to : "yukt" ,
    message : "hvfytfujefgufeguygfeu" ,
    date : new Date() ,
})
chat1.save()
.then((res)=>{
    console.log(res) 
}) 
.catch((err)=>{
    console.log(err)
})
app.get("/chats" , async (req,res)=>{
    let  chats = await chat.find() ;
    console.log(chats)
    res.render("index.ejs" , {chats})
})