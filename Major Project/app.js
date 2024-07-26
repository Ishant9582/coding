const express = require("express") ;
const app = express();
const mongoose = require('mongoose');
let listings = require("./models/listing.js")
let review = require("./models/review.js")
app.set("view engine" , "ejs")
const path = require("path");
app.use(express.static(path.join(__dirname , "public")))
app.use(express.urlencoded({extended : true}))
const methodOverride = require("method-override") ;
app.use(methodOverride("_method"));
ejsMate = require('ejs-mate'),
// use ejs-locals for all ejs templates:
app.engine('ejs', ejsMate);
const wrapasync = require("./utils/wrapasync.js")
const ExpressError = require("./utils/ExpressError.js")
let {listingschema , reviewschema} = require("./schema.js");
//const Listing = require("./models/listing.js");
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
app.get("/listings/home/h" , (req,res)=>{
    res.render("home.ejs")
})
// validating 
function validatelisting(req,res,next){
    let {error} = listingschema.validate(req.body)
    console.log(error)
    console.log("hello")
    if(error){
        let errmsg = error.details.map((el)=>el.message).join(",")
        throw new ExpressError(450 , errmsg);
    }else{
        next() ;
    }
}
function validatereview(req,res,next){
    let {error} = reviewschema.validate(req.body)
    console.log(error)
    console.log("hello")
    if(error){
        // let errmsg = error.details.map((el)=>el.message).join(",")
        throw new ExpressError(400 , error);
    }else{
        next() ;
    }
}


////
app.get("/listings" ,wrapasync(async  (req,res)=>{
    const all = await listings.find({}) ;
   // console.log(all)
    res.render("index.ejs" , {all});
}) )
app.get("/listings/new" ,(req , res)=>{
    res.render("new.ejs") ;
}) 
app.post("/listings/ok" , validatelisting , wrapasync(async (req,res,next)=>{
    let a =  new listings(req.body.Listing) ;
    //console.log(a)
    await a.save() ;
    res.redirect("/listings") 

}))
// show route
app.get("/listings/:id" , wrapasync(async (req , res)=>{
    let {id} = req.params ;
    const all = await listings.findById(id).populate("reviews");
    //console.log(all)
    res.render("show.ejs" , {all}) ;
}) )
app.get("/listings/:id/edit" , wrapasync(async (req , res)=>{
    let {id} = req.params ;
    const all = await listings.findById(id).populate("reviews");
    //console.log(all)
    res.render("edit.ejs" , {all}) ;
})) 
app.put("/listings/:id" , validatelisting ,  wrapasync(async (req,res)=>{
    let{id} = req.params ;
    console.log(id) ;
    console.log(req.body.Listing) ;
    await listings.findByIdAndUpdate(id , {...req.body.Listing} );
    res.redirect("/listings") ;
}))
app.delete("/listings/:id" , wrapasync(async (req,res)=>{
    let {id} = req.params ;
    let g = await listings.findByIdAndDelete(id) ;
    console.log(g)
    res.redirect("/listings") 
}))
app.get("/listings/mu/hu" ,(req , res)=>{
    res.render("music.ejs") ;
}) 

// for reviews
app.post("/listings/:id/:review" , validatereview , wrapasync(async (req,res)=>{
    let l = await listings.findById(req.params.id) ;
    let r = await new review(req.body.review) ;
    l.reviews.push(r) ;
    await r.save() ;
    await l.save() ;
    res.redirect(`/listings/${l._id}`)
}))
//FOR DELETING REVIEWS
//
app.delete("/listings/:id/:reviews/:revid" , wrapasync(async (req,res)=>{
    let{id ,revid} = req.params ;
    await listings.findByIdAndUpdate(id , {$pull : {reviews : revid}})
    await review.findByIdAndDelete(revid) ;
    res.redirect(`/listings/${id}`)
}))
// error handling
app.all("*" , (req,res,next)=>{
    throw (new ExpressError(401 , "page not found"))
})
app.use((err,req,res,next)=>{
    let{statuscode = 500 , message = "something wrong occurs"} = err ;
    res.status(statuscode).render("error.ejs",{message}) ;
})