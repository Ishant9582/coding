const express = require("express") ;
let app  =  express() ;
const mongoose = require('mongoose');
const path = require("path")
app.set("view engine" , "views")
const chat = require("./models/chat.js")
app.use(express.static(path.join(__dirname , "public")))
app.use(express.urlencoded({extended : true}))
const methodOverride = require("method-override") ;
app.use(methodOverride("_method"));
const expresserr = require("../customerrclass.js")
main()
.then(()=>{
    console.log("connection success")
})
.catch((err) => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}
app.listen("8080" , ()=>{
    console.log("app is listening")
})
app.get("/" , (req , res)=>{
    res.send("app is listening")
})

app.get("/chats" , async (req,res)=>{
    let  chats = await chat.find() ;
    // console.log(chats)
    res.render("index.ejs" , {chats})
})
app.get("/chats/new" , (req,res)=>{
    console.log("working")
    res.render("new.ejs")
})
// for showing
// app.get("/chats/:id/:show",async (req , res , next)=>{
    
//     let {id} = req.params ;
//     let p = await chat.findById(id)
//     if(!p){
//         return next(new expresserr(500 , "chat not found"));
//     }
//     res.send("chat found")
// });


////
// app.post("/chats/k" , async (req,res,next)=>{
//     try {
//         let {from,message,to} = req.body ;
//         let newchat =  new chat({
//             from : from ,
//             message : message ,
//             to : to ,  
//             date : new Date() ,
//         });
//         await newchat.save()
//         res.redirect("/chats")
//     } catch (error) {
//         next(error)
//     }
// })

// or using asyncerror
app.post("/chats/k" , asyncwrap(async(req,res,next)=>{
  
        let {from,message,to} = req.body ;
        let newchat =  new chat({   
            from : from ,
            message : message ,
            to : to ,  
            date : new Date() ,
        });
        await newchat.save()
        res.redirect("/chats")

}))
app.get("/chats/:id/:edit" ,async (req,res)=>{
    let {id} = req.params ;
    //console.log(id) ;
    let data = await chat.findById(id) ;
    //console.log(data)
    res.render("edit.ejs",{data})
});

// defining asyncwrap function

//
function asyncwrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err)=>next(err));
    }
}
//
//
//
app.put("/chats/:id" , async (req,res)=>{
      let {message : msg} = req.body ;
      let {id} = req.params ;
      
      console.log(id)
      let g = await chat.findByIdAndUpdate( id , {message : msg} , {runValidators : true , new : true})
      //console.log(g)
      res.redirect("/chats")
})
app.delete("/chats/:id", async (req,res)=>{
    let {id} = req.params ;
    //console.log(id)
    let p = await chat.findByIdAndDelete(id)
    console.log(p) ;
    res.redirect("/chats")    
})

// using function
const handlevali = (err)=>{
    console.log(err.message)
    return err ;
}
app.use((err,req,res,next)=>{
    console.log(err.name)
    if(err.name === "ValidationError"){
        handlevali(err)
    }
    next(err) ;
})
app.use((err,req,res,next)=>{
    console.log("------------error---------")
    let {status=500 , message="default error message"} = err ;
    res.status(status).send(message) ;
})




