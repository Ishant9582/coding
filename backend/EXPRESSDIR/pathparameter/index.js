const a = require("express") ;
const app = a() ;
let port = 3000 ;
app.listen(port , ()=>{
    console.log("app is listening on port") ;
})
app.get("/",(req,res)=>{
    res.send("hello") ;
})
app.get("/:username/:id/:houseno",(req,res)=>{
    let{username,id,houseno} = (req.params) ;
    let r = `<h1>welcome ${username} your id is ${id} and your house no. is ${houseno}</h1>` ;
    res.send(r);
})