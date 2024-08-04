const Listing = require("../models/listing.js");
module.exports.home = (req, res) => {
    res.render("home.ejs")
};

// show all listing
module.exports.show = async (req, res) => {
    const all = await Listing.find({});
    // console.log(all)
    //console.log(req.user)
    res.render("index.ejs", { all });
}

//render new adding form
module.exports.rendernew = (req, res) => {
    res.render("new.ejs");
};

// for posting new form
module.exports.new = async (req, res, next) => {
    let url = req.file.path;
    let filename = req.file.filename;
    //console.log(url , "...." , filename)
    let a = new Listing(req.body.Listing);
    //console.log(req.user._id)
    a.image = { url, filename };
    a.owner.push(req.user._id);
    a.owner.push('66ac6b491c062fc257b832ea')
    await a.save();
    req.flash("success", "new listing created successfully")
    res.redirect("/listings");
}

// for showing particular
module.exports.showparticular = async (req, res) => {
    let { id } = req.params;
    const all = await Listing.findById(id).populate({
        path: "reviews",
        populate: {
            path: "author",
        }
    }).populate("owner");
    //console.log(all)
    if (!all) {
        req.flash("error", "listing not exist")
        res.redirect("/listings")
    }
    else {
        res.render("show.ejs", { all });
    }
};

//for rendering edit FormD
module.exports.renderedit = async (req, res) => {
    let { id } = req.params;
    const all = await Listing.findById(id);
    //console.log(all)
    // we r doing below with the help of clouding
    let originalimage = all.image.url ;
    originalimage = originalimage.replace("/upload" , "/upload/w_200/h_250")
    console.log(originalimage)
    res.render("edit.ejs", { all , originalimage});
};

// for editting
module.exports.update = async (req, res) => {
    let { id } = req.params;
    //console.log(id) ;
    //console.log(req.body.Listing) ;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.Listing });
    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save()
    }

    req.flash("success", "updated successfully")
    res.redirect(`/listings/${id}`);
};
// for deleing
module.exports.destroy = async (req, res) => {
    let { id } = req.params;
    let g = await Listing.findByIdAndDelete(id);
    //console.log(g)
    req.flash("success", "deleted sucessfully")
    res.redirect("/listings")
}; 
