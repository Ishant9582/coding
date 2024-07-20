let express = require("express")
let app = express() ;
app.listen(3000,()=>{
    console.log("app is listejning")
})
app.get("/err" , (req,res)=>{
    ab = abced ;
    
})
// app.use((err,req,res,next)=>{
//     console.log("------------error---------")
//     next();
// })
// agr niche vala use nhi kia to ayega can not get
// app.use((req,res)=>{
//     res.send("page not found")
// })

//
//
// to avoid above
app.use((err,req,res,next)=>{
    console.log("------------error---------")
    //use next(err) it will show error on site
    next(err);
})
app.use((err,req,res,next)=>{
    console.log("------------error2---------")
   
    next(err);
    // agr upr khali next() to localhost p can not get krke aytega
    
})