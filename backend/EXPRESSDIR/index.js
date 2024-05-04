const express = require("express")
const app = express();
// console.log(app)
// or
// console.dir(app)
let port =  3000 ;
app.listen(port , ()=>{
    console.log("app is listening on port") ;
}) ;
app.get("/",(req,res)=>{
    res.send("hello you r at home")
})
app.get("/apple",(req,res)=>{
    res.send("you r at apple path")
})
app.get("/orange",(req,res)=>{
    res.send("you r at orange path")
})
app.get("*",(req,res)=>{
    res.send("pls write valid path")
})
app.post("/",(req,res)=>{
    res.send("root dirict")
})
//below one will not work as upper app.get likha hua hai
// app.use((req,res)=>{
//     console.log("request receeived")
//     let code = "<h1><u>Hello</u></h1><ul><li>one</li><li>two</li></ul>"
// or 
// let code = {
//     a : "name" ,
//     b: "hello" ,
// }
//     res.send(code) ; // for sending response
//     //res.send("jello") this will not work as only one response
// })