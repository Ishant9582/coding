const express = require("express")
const app = express();
// console.log(app)
// or
// console.dir(app)
let port =  3000 ;
app.listen(port , ()=>{
    console.log("app is listening on port")
}) ;