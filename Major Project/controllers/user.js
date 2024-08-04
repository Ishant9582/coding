let user = require("../models/user.js")
module.exports.rendersignup = async (req, res) => {
    res.render("signup.ejs")
}
module.exports.signup = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        let newuser = new user({
            email: email,
            username: username,
            // as passport k schema m username by default unique  set rhta 
        })
        let registeruser = await user.register(newuser, password)
        // hello world is password here
        //res.send(registeruser)
        req.login(registeruser , (err)=>{
            if(err){
                return next(err) ;
            }
            req.flash("success", "User Registered Sucessfully")
            res.redirect("/listings")
        })
    }
    catch (e) {
        req.flash("error", e.message)
        res.redirect("/signup")

    }
}
module.exports.renderlogin = async (req, res) => {
    res.render("login.ejs")
}


module.exports.login = async(req,res)=>{
   // console.log(req)
   req.flash("success" , `Welcome Back ${req.user.username}`);
   // console.log(res.locals.redirecturl)
    let redirecturl = res.locals.redirecturl || "/listings"
    res.redirect(redirecturl);
}

// 
module.exports.logout = (req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err) ;
        }
        req.flash("success" , "log out successfully")
        res.redirect("/listings");
    });
}