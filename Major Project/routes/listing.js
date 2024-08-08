const express = require("express") ;
const router = express.Router() ;
const wrapasync = require("../utils/wrapasync.js");
const ExpressError = require("../utils/ExpressError.js")
let {listingschema} = require("../schema.js");
let{issignedin , isowner} = require("../middleware.js")
let Listing = require("../models/listing.js")
let listingcontroller = require("../controllers/listing.js")
const multer  = require('multer')
const {storage} = require("../cloudconfig.js");
const upload = multer({ storage })
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
// home route

////
// show
router.get("/" ,wrapasync(listingcontroller.show))

// FOR ADDING NEW
router.get("/new" , issignedin ,listingcontroller.rendernew) ;
// for posting new
//

router.post("/ok" , upload.single('Listing[image][url]') ,  validatelisting , wrapasync(listingcontroller.new)) 


// show particular route
router.get("/:id" , wrapasync(listingcontroller.showparticular) )
 
// edit route
router.get("/:id/edit" , issignedin , isowner , wrapasync(listingcontroller.renderedit)) 

// for editting
router.put("/:id" , upload.single('Listing[image][url]')  , validatelisting ,  wrapasync(listingcontroller.update))

//delete
router.delete("/:id" , issignedin , isowner , wrapasync(listingcontroller.destroy))

// music
// router.get("/mu/hu" ,wrapasync((req , res)=>{
//     res.render("music.ejs") ;
// }))

module.exports = router ;