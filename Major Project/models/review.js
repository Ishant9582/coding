
const { number } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reviewschema = Schema({
    comment : String ,
    rating : {
        type : Number ,
        min : 1 ,
        max : 5 ,
    },
    createdAt  : {
        type : Date ,
        default : Date.now() ,
    },
});
const review = mongoose.model("review",reviewschema);
module.exports = review ;