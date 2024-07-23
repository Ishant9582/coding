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
    email : String ,
})
const user = mongoose.model("user" , userschema)
const postschema = new mongoose.Schema({
    content : String ,
    likes : Number,
    user : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : user
    }
})
const post = mongoose.model("post" , postschema )
const adddata = async()=>{
    // let user1 = new user({
    //     username : "jayak" ,
    //     email : "xyz@gmail.com" ,
    // })
    // let post1 = new post({
    //     content : "hello world" ,
    //     likes : 9 ,
    // })
    let user1 = await user.findOne({username : "jayak"})
    let post2 = new post({
        content : " world" ,
        likes : 90 ,
    })
    //await user1.save() ;
    post2.user = user1 ;
    await post2.save();
}
const getdata = async ()=>{
    let res = await post.find({}).populate("user","username")
    console.log(res)
}
//adddata();
getdata() ;