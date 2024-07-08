const mongoose = require('mongoose');
const userschema = new mongoose.Schema({
    from : {
        type : String ,
        required : true ,
    } ,
    to : {
        type : String  ,
        required : true ,
    },
    message : {
        type : String ,
    } ,
    date : {
        type : Date ,
        required : true ,
    } ,
});
const chat = mongoose.model("Chat" , userschema) ;
module.exports  = chat ;