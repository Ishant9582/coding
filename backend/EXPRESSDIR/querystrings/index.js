let express = require("express")
let app = express();
let port = 3000 ;
app.listen(port,()=>{
    console.log("listening")
})
app.get("/",(req,res)=>{
    res.send("you r in starting");
})
app.get("/search",(req,res)=>{
    console.log(req.query)
    // let {q}  = (req.query) ;
    //for receiving 2 request
    let {q,name} = req.query ;
    res.send(`search result for query ${q} and name is ${name}`);
})