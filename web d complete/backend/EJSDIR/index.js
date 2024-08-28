// if folder name is views and u r accessing in inside ejsdir 
// then no use of these 2 commands:::::
// let path = require("path")
// app.set("views",path.join(__dirname,"/folder"))
const express = require("express") ;
const app = express() ;
let port = 8080 ;
let path = require("path")
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"/folder"))
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
app.get("/",(req,res)=>{
    res.render("page.ejs")
})

//  ////////////for accessing outside folder expressdir
// const express = require("express") ;
// const app = express() ;
// let path = require("path")
// let port = 8080 ;
// app.set("view engine","ejs")
// app.set("views",path.join(__dirname,"/folder"))
// app.listen(port,()=>{
//     console.log(`listening on port ${port}`)
// })
// app.get("/",(req,res)=>{
//     res.render("page.ejs")
// })
// for callimg npx nodemon EJSDIR/index.js