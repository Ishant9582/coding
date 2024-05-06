let express = require("express")
let app = express()
let port = 3000 ;
app.set("view engine","ejs")
app.listen(port,()=>{
     console.log("app is listening")
})
app.get("/",(req,res)=>{
    res.send("Instagram")
})
app.get("/ig/:username",(req,res)=>{
    let {username} = req.params ;
    console.log(username)
    const instadata = require("./data.json") 
    const data = instadata[username] ;
    console.log(data)
    if(data){
    res.render("insta.ejs",{data})
    }else{
        res.send("<h1>no such page</h1>")
    }
})