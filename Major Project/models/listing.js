const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let review = require("./review.js")
const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename : String ,
    url : String ,
  },
  price: Number,
  location: String,
  country: String,
  reviews : [
    {
      type : Schema.Types.ObjectId ,
      ref :  review ,
    } ,
  ],
});
listingSchema.post("findOneAndDelete" , async (listing)=>{
  if(listing){
    await review.deleteMany({_id : {$in : listing.reviews}})
  }
})
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;