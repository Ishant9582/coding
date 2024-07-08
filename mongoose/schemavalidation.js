const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("connection success")
})
.catch((err) => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}
const userSchema = new mongoose.Schema({
    title : {
    type : String ,
    required : true,
    } ,
    author : {
        type : String ,
    } ,
    price : {
        type : Number ,
    } ,
});
const book = mongoose.model("Book",userSchema) ;
const book1 = new book({
    title : "eo" ,
    author : "jh3e3f4f4fekl" ,
    price : 86 ,
});
book1.save()
.then((res)=>{
    console.log("success")
}) 
.catch((err)=>{
    console.log("not save")
})

const book2 = new book({
    title : "erem" ,
    author : "jhl" ,
    price : "886" ,
});
book2.save()
.then((res)=>{
    console.log("success")
}) 
.catch((err)=>{
    console.log("not save")
})
