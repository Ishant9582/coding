const express = require("express") ;
const app = express();
const mongoose = require('mongoose');

let listings = require("./models/listing.js")
app.set("view engine" , "ejs")
const path = require("path");
app.use(express.static(path.join(__dirname , "public")))
app.use(express.urlencoded({extended : true}))
const methodOverride = require("method-override") ;
app.use(methodOverride("_method"));
ejsMate = require('ejs-mate'),
// use ejs-locals for all ejs templates:
app.engine('ejs', ejsMate);

main()
.then(()=>{
    console.log("connection success")
})
.catch((err) => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}
app.listen(8080,()=>{
    console.log("app listening")
})
app.get("/" , (req,res)=>{
    res.render("home.ejs")
})
// app.get("/testlisting" , async (req , res)=>{
//     let sample = new listing({
//         title : "my little" ,
//         description : "near hotel cave" ,
//         price : 2000 ,
//         location : "bumbai" ,
//         country : "india" ,
//     })
//     await sample.save() ;
//     console.log("sample saved")
//     res.send("success testing")
// })
app.get("/listings" ,async  (req,res)=>{
    const all = await listings.find({}) ;
   // console.log(all)
    res.render("index.ejs" , {all});
}) 
app.get("/listings/new" ,(req , res)=>{
    res.render("new.ejs") ;
}) 
app.post("/listings/ok" , async (req,res)=>{
    let a =  new listings(req.body.Listing) ;
    // console.log(a)
    await a.save() ;
    res.redirect("/listings")
})
app.get("/listings/:id" , async (req , res)=>{
    let {id} = req.params ;
    const all = await listings.findById(id);
    res.render("show.ejs" , {all}) ;
}) 
app.get("/listings/:id/edit" , async (req , res)=>{
    let {id} = req.params ;
    const all = await listings.findById(id);
    //console.log(all)
    res.render("edit.ejs" , {all}) ;
}) 
app.put("/listings/:id" , async (req,res)=>{
    let{id} = req.params ;
    console.log(id) ;
    console.log(req.body.Listing) ;
    await listings.findByIdAndUpdate(id , {...req.body.Listing} );
    res.redirect("/listings") ;
})
app.delete("/listings/:id" , async (req,res)=>{
    let {id} = req.params ;
    let g = await listings.findByIdAndDelete(id) ;
    console.log(g)
    res.redirect("/listings") 
})
app.get("/listings/mu/hu" ,(req , res)=>{
    res.render("music.ejs") ;
}) 
