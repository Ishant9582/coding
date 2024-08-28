let express = require("express")
let app = express();
let port = 3000;
app.set("view engine","ejs")
app.listen(port,()=>{
    console.log("listening")
})
app.get("/",(req,res)=>{
    res.send(`<h1>Instagram</h1>`)
})
app.get("/:ig/:username",(req,res)=>{
    let {username} = req.params
    console.log(username) ;
    let followers = ["ram","shyam","golu","olp"]
    res.render("instafollow.ejs",{username,followers})
})