let Listing = require("./models/listing.js")
let Review = require("./models/review.js")
module.exports.issignedin = (req, res, next) => {
    if (!req.isAuthenticated()) {
        //console.log(req.originalUrl)
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "please login in first")
        return res.redirect("/login")
    }
    next();
}
module.exports.saveredirecturl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirecturl = req.session.redirectUrl;
    }
    next();
}

//
module.exports.isowner = async (req, res, next) => {
    let { id , revid } = req.params;
    let review = await Review.findById(revid)
    if (!Review.author.equals(res.locals.userdata._id)) {
        req.flash("error", "You Are Not Author Of This")
        return res.redirect(`/listings/${id}`)       
    }
    next();
}


module.exports.isowner = async (req, res, next) => {
    let { id } = req.params;
    //console.log(id)
    let listing = await Listing.findById(id);
    let c = 1;
    console.log("helllllooooooooo")
    for (let i = 0; i < listing.owner.length; i++) {
        let b = (listing.owner[i]._id)
        //console.log("helllo")
       // console.log(b)
        //console.log(res.locals.userdata._id)
        // console.log(b)
        //console.log(res.locals.userdata._id) 
        if (b.equals(res.locals.userdata._id)) {
            c++ ;
            break
            //console.log(c)
        }
    }
    console.log(c)
    if(c == 1){
        req.flash("error", "You Are Not Owner Of This")
        return res.redirect(`/listings/${id}`)
    }
    //c = 1 ;
    //}
    next();
}


