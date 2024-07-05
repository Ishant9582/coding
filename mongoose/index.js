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
const userSc = new mongoose.Schema({
    name : String ,
    email : String ,
    age : Number ,
})
const peep = mongoose.model("peep",userSc) ;
const user1 = new user({
    name : "heo" ,
    email : "jhebgvhgwbjknekl" ,
    age : 56 ,
});
user1.save();
  //// or /////
  // or    ///
  const user2 = new user({
    name : "eo" ,
    email : "jh3e3f4f4fekl" ,
    age : 86 ,
});
user2.save()
.then((res)=>{
    console.log("success")
}) 
.catch((err)=>{
    console.log("not save")
})
                    