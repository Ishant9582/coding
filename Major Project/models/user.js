const mongoose = require("mongoose");
const Schema = mongoose.Schema ;
const passportlocalmongoose = require("passport-local-mongoose")

const userschema = new Schema({
    email : {
        type : String ,
        required : true ,
    } ,
    date : {
        type : Date ,
        default : Date.now(),
    }
});
userschema.plugin(passportlocalmongoose) ;
const user = mongoose.model("user",userschema);
module.exports = user ;

