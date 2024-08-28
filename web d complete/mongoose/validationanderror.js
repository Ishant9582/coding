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
    name : {
        type : String ,
    } ,
    email : {
        type : String,
    } ,
    age : {
        type : Number ,
        min : [1 , "shi se value daalo bro0"] ,
    } ,
})
const user = mongoose.model("up",userSchema) ;
const user1 = new user ({
    name : "rama" ,
    email : "xyaz@jzuujdi" ,
    age : 100
})
user1.save()
.then((res)=>{
    console.log("data saved")

})
.catch((err)=>{
    console.log(err)
})
// user.findOneAndUpdate({name : "rama"} , {age : -300} , {new : true}) 
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })
// for applying schema validation condition


user.findOneAndUpdate({name : "rama"} , {age : -300} , {runValidators : true}) 
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err.errors.age.properties.message)
})

