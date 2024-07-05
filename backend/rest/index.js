let express = require("express") ;
let app =  express() ;
let port = 3000 ;
const path = require("path")
app.set("view engine","ejs") ;
app.use(express.static(path.join(__dirname , "public"))) ;
app.use(express.urlencoded({extended : true}))
const { v4: uuidv4 } = require('uuid');
var methodOverride = require('method-override')
app.use(methodOverride('_method'))
let posts = [
    {
          id : uuidv4() ,
          username : "hero" ,
          content : "u r hero" ,
          
    },
    {
        id : uuidv4() ,
        username : "rahul",
        content  : "good boy"
    },
    {
        id : uuidv4() ,
        username : "salu" ,
        content : "dallu u r"
    },
]
app.get("*",(req,res)=>{
    r =  `<h1>please refer to localhost:3000/posts</h1>`
    res.send(r)
})
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts})
}) 
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs") 
})
app.post("/posts/ok",(req,res)=>{
    let id = uuidv4() ;
    console.log(req.body) ;
    let{username,content} = req.body ;
    posts.push({username,content,id})
    res.redirect("/posts")
})
app.get("/:posts/:id",(req,res)=>{
    console.log(req.params)
    let {id} = req.params ;
    //console.log(id)
    let post = posts.find((p)=>id==p.id);
    res.render("show.ejs",{post});
})
app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params ;
    console.log(req.body)
    let newcontent = req.body.content ;
    let post = posts.find((p)=>id===p.id);
    post.content = newcontent ;
    console.log(post)
    res.redirect("/posts") 
    //////////or//////////////////////////
    // let {id} = req.params ;
    // console.log(req.body)
    // let {content} = req.body ;
    // let post = posts.find((p)=>id===p.id);
    // post.content = content ;
    // console.log(post)
    // res.redirect("/posts")
})
app.get("/posts/:id/:edit",(req,res)=>{
    console.log(req.params)
    let {id} = req.params ;
    let post = posts.find((p)=>id===p.id);
    console.log(post.username)
    res.render("edit.ejs",{post})
})
app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params ;
    posts = posts.filter((p)=>id!==p.id);
    res.redirect("/posts")
})

app.listen(port,()=>{
    console.log("yes uru uri") ;
})
