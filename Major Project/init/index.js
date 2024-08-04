const mongoose = require("mongoose");
let initData = require("./data.js");
const Listing = require("../models/listing.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(MONGO_URL);
}
let initDB = async () => {
  await Listing.deleteMany({});
  initData = initData.map((obj)=>({
    ...obj , 
    owner : ['66ac6b2c1c062fc257b832e2'] ,
  }));
  await Listing.insertMany(initData);
  console.log("data was initialized");
};
initDB();