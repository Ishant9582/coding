const mongoose = require('mongoose');
const chat = require("./models/chat.js")
main()
.then(()=>{
    console.log("connection success")
})
.catch((err) => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
let chats = [
    {
    from : "pin" ,
    to : "zin" ,
    message : "hvfygfeu" ,
    date : new Date() ,
    } ,
    {
        from : "show" ,
        to : "ko" ,
        message : "hvfeu" ,
        date : new Date() ,
    } ,
    {
        from : "jo" ,
        to : "op" ,
        message : "hguygfeu" ,
        date : new Date() ,
    },
    {
        from : "ru" ,
        to : "yu" ,
        message : "juhicuhjbsiucw9ie9ushxuiniundj dxcui jijnbdixhc j duih idbeiuhuiendxji" ,
        date : new Date() ,
    } ,
] 
chat.insertMany(chats)
   