let express = require("express")
let app = express();
let port = 3000 ;
app.set("views","ejs")
app.listen(port,()=>{
    console.log(`server listening on ${port}`)
})
app.get("/",(req,res)=>{
    res.render("file.ejs")
})