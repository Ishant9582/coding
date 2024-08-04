const Listing = require("../models/listing.js") ;
const review = require("../models/review.js")
module.exports.create = async (req,res)=>{
    let l = await Listing.findById(req.params.id) ;
    let r = await new review(req.body.review) ;
    r.author = req.user._id ;
    l.reviews.push(r) ;
    console.log(r)
    await r.save() ;
    await l.save() ;
    req.flash("success","review added  sucessfully")
    res.redirect(`/listings/${l._id}`)
}

// 
module.exports.destroyreview  = async (req,res)=>{
    let{id ,revid} = req.params ;
    // jb review delete hoga to vo listing se bhi delete hona chahiye
    await Listing.findByIdAndUpdate(id , {$pull : {reviews : revid}})
    await review.findByIdAndDelete(revid) ;
    req.flash("success","review deleted sucessfully")
    res.redirect(`/listings/${id}`)
}