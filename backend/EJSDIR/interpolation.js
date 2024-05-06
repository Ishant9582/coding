let express = require("express")
let app = express();
let port = 3000 ;
app.set("view engine","ejs")
app.listen(port,()=>{
    console.log("server listening")
})
app.get("/",(req,res)=>{
    res.render("file.ejs")
})