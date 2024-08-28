const mongoose = require("mongoose")
main()
.then(()=>{
    console.log("connection success")
})
.catch((err)=>{
    console.log(err)
})
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/relationdemo');
}
const userschema = new mongoose.Schema({
    username : String ,
    addresses : [
        {
            _id : false ,
            location : String ,
            city : String ,
        }
    ]
}) ;
const user = mongoose.model("user",userschema) ;
const adduser = async()=>{
    let user1 = new user({
        username  : "billu" ,
        addresses : [
            {
            location : "r-123" ,
            city : "haruna"
            }
        ]
    })
    user1.addresses.push({location : "e-34" , city : "zeri"})
    await user1.save() ; 
}
adduser();