const express = require("express");
const router = express.Router({mergeParams : true}) ;
const wrapasync = require("../utils/wrapasync.js");
const ExpressError = require("../utils/ExpressError.js")
let {reviewschema } = require("../schema.js")
let{issignedin , saveredirecturl, isowner} = require("../middleware.js")
let Listing = require("../models/listing.js")
let review = require("../models/review.js")
let reviewcontroller = require("../controllers/review.js")
function validatereview(req,res,next){
    let {error} = reviewschema.validate(req.body)
    //console.log(error)
    //console.log("hello")
    if(error){
        let errmsg = error.details.map((el)=>el.message).join(",")
        throw new ExpressError(400 , errmsg);
    }else{
        next() ;
    }
}
// for reviews
router.post("/" , validatereview , issignedin , saveredirecturl , wrapasync(reviewcontroller.create))
//FOR DELETING REVIEWS
//  
router.delete("/:revid" , issignedin , isowner  , wrapasync(reviewcontroller.destroyreview))
module.exports = router ;