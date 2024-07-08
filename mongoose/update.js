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
user.updateOne({name : "heo"} , {age : 90}) 
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})

user.updateOne({name : "lal"} , {age : 70}) 
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})
user.updateOne({name : "fdjkcvn"} , {age : 87}) 
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})