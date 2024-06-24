let express = require("express")
let app = express()
let port = 3000;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.listen(port,()=>{
    console.log("listening")
})
app.get("/action",(req,res)=>{
    let {username,password} = req.query ;
    console.log(username)
    res.send(`standard get response , welcome ${username}`)
})
app.post("/action",(req,res)=>{
    let{username,password} = req.body ;
    res.send(`standard post response , welcome ${username} `)
})