if(process.env.NODE_ENV != "production"){
    require("dotenv").config() ;
}
const express = require("express") ;
const app = express();
const mongoose = require('mongoose');
app.set("view engine" , "ejs")
const path = require("path");
app.use(express.static(path.join(__dirname , "public")))
app.use(express.urlencoded({extended : true}))
const methodOverride = require("method-override") ;
app.use(methodOverride("_method"));
ejsMate = require('ejs-mate') ,
// use ejs-locals for all ejs templates:
app.engine('ejs', ejsMate);
const ExpressError = require("./utils/ExpressError.js") ;
const session = require("express-session") ;
const flash = require("connect-flash") ;
const listings = require("./routes/listing.js") ;
const reviews = require("./routes/review.js") ;
const users = require("./routes/user.js")

// mongo-store
const MongoStore = require('connect-mongo')


////////for password settlement /////

let passport = require("passport")
let Localstrategy = require("passport-local")
const user = require("./models/user.js")
main()
.then(()=>{
    console.log("connection success")
})
.catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.ATLAS_URI);
}
// const sessionOptions = {
//     secret : "yoursecretkey" , 
//     // AGR NICHE VALE 2 USE NHI KIE TO WARNING AAYEGI
//     resave : "false" , 
//     saveUninitialized : true ,
//     store : MongoStore.create({mongUrl : "mongodb+srv://ishant135:6S5BWVgGeAob7JtA@hotelsia.uox0mi8.mongodb.net/wanderlust"}) ,
//     cookie : {
//         expires : Date.now() + 7*24*60*60*1000 ,
//         maxAge : 7*24*60*60*1000 ,
//         httponly : true ,
//     }
// }
// app.use(session(sessionOptions));
app.use(session({
    secret: 'yourSecretKey',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb+srv://ishant135:6S5BWVgGeAob7JtA@hotelsia.uox0mi8.mongodb.net/wanderlust'}) ,
    cookie : {
        expires : Date.now() + 7*24*60*60*1000 ,
        maxAge : 7*24*60*60*1000 ,
        httponly : true ,
    }
}));
app.use(flash()) ;

// initializing passport
app.use(passport.initialize())
app.use(passport.session())
passport.use(new Localstrategy(user.authenticate()))
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());


app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    //console.log(req.user)
    res.locals.userdata = req.user ;
    next();
})

// for router
app.use("/listings" , listings) ;
app.use("/listings/:id/:reviews" , reviews) ;
app.use("/", users)


app.listen(8080,()=>{
    console.log("app listening")
})
app.get("/",(req,res)=>{
    res.render("home.ejs")
})


// error handling
app.all("*" , (req,res,next)=>{
    throw (new ExpressError(401 , "page not found"))
})
app.use((err,req,res,next)=>{
    let{statuscode = 500 , message = "something wrong occurs"} = err ;
    res.status(statuscode).render("error.ejs",{message}) ;
})