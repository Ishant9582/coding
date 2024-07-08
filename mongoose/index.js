const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("connection success")
})
.catch((err) => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
const userSchema = new mongoose.Schema({
    name : String ,
    email : String ,
    age : Number ,
})
const user = mongoose.model("User",userSchema) ;
//////////////////or//////////////////
/////////////// or /////////////////
// const userSc = new mongoose.Schema({
//     name : String ,
//     email : String ,
//     age : Number ,
// })
// const peep = mongoose.model("peep",userSc) ;
// const user1 = new user({
//     name : "heo" ,
//     email : "jhebgvhgwbjknekl" ,
//     age : 56 ,
// });
// user1.save();
//   //// or /////
//   // or    ///
//   const user2 = new user({
//     name : "eo" ,
//     email : "jh3e3f4f4fekl" ,
//     age : 86 ,
// });
// user2.save()
// .then((res)=>{
//     console.log("success")
// }) 
// .catch((err)=>{
//     console.log("not save")
// })


////////////// inserting multiple ////////////////
// user.insertMany([
//     {name : "lal" , email : "sad@gmail.com"} ,
//     {name:"fdjkcvn" , email : "kyz@" } ,
// ])
/////// find using model /////////////
// user.find({age : {$gt : 50}})  .then((res)=>{
//     console.log(res)
// }) 
// .catch((err)=>{
//     console.log(err)
// })
user.findOne({age : {$gt : 50}})  .then((res)=>{
    console.log(res)
}) 
.catch((err)=>{
    console.log(err)
})
user.findById("668855b924a03da50e3e4894")
.then((res)=>{
    console.log(res.name)
}) 
.catch((err)=>{
    console.log(err)
})
                    