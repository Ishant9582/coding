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
                    