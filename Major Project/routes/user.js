const express = require("express");
const router = express.Router();
let user = require("../models/user.js");
const wrapasync = require("../utils/wrapasync.js");
const passport = require("passport");
let {saveredirecturl} =  require("../middleware.js")
let usercontroller = require("../controllers/user.js")
// get route
router.get("/signup", usercontroller.rendersignup)

// post route
router.post("/signup", usercontroller.signup)

// login
router.get("/login", usercontroller.renderlogin)
//
//
router.post("/login", saveredirecturl , passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true ,
    }) ,
    usercontroller.login
)
// 
router.get("/logout" , usercontroller.logout);
module.exports = router;