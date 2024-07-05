const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express") ;
const app = express() ;
app.set("view engine","ejs")
const methodOverride = require("method-override") ;
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended : true}))
const { v4: uuidv4 } = require('uuid');
// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  database: 'connecting',
  password: 'ishant135',
});
app.listen("8080",(req,res)=>{
    console.log("app is listening")
}) ;
/////home
//
//
app.get("/",(req,res)=>{
    let q = `select count(*) from us`
    try{
        connection.query(q,(error,result)=>{
            if (error) throw err ;
            console.log(result[0]["count(*)"]);
            let total = result[0]["count(*)"] 
            res.render("home.ejs",{total})
        });
    } catch(error){
        console.log(error);
        res.send("there ius some error in ur commands")
    }
})
// show user 
//
//
app.get("/users",(req,res)=>{
    let q = `select * from us`
    try{
        connection.query(q,(error,users)=>{
            if (error) throw err ; 
            res.render("show.ejs",{users})
        });
    } catch(error){
        console.log(error);
        res.send("there ius some error in ur commands")
    }
})
try{
app.get("/user/:id/edit",(req,res)=>{
    let{id} = req.params  ;
    let q = `select * from us where id ='${id}'` ;
    connection.query(q,(err,result)=>{
        if(err) throw err ;
        // console.log(result) ;
        let user = result[0] ;
        res.render("edit.ejs",{user})
    })
})
} catch(err){
    console.log(err)
        res.render("ghapla")

}
// using patch  
app.patch("/user/:id",(req,res)=>{
    let {id} = req.params ;
    let {username , password} = req.body ;
    console.log(id)
    let q =  `select * from us where id = "${id}"`
    try{
        
        connection.query(q,(err,result)=>{
            if(err) throw err ;
            let user = result[0]
            console.log(password)
            console.log(user["password"])
            if(password != user.password){  
                res.render("wrongpass.ejs",{user}); 
            }
            else{
                console.log(username)
                let q2 = `update us set username = "${username}" where id = "${id}"`
                try{
                connection.query(q2,(err,result)=>{
                    if(err) throw err ;
                    res.redirect("/users")
                })
            }catch(err){
                console.log(err)
            }
            }
            
        })
    } catch(err){
        console.log(err)
    } 
});
// DELETE
//
//
app.delete("/users/:id",(req,res)=>
    {
        let {id} = req.params ;
    try{
    let q = `delete from us where id = "${id}"`
    connection.query(q,(err,result)=>{
        if(err) throw err ;
        res.redirect("/users")
    })
    }
    catch(err){
        console.log(err)
    }
})
// adding new data
// adding new data
app.get("/users/new",(req,res)=>{
    res.render("new.ejs")
})
app.post("/users/ok",(req,res)=>{
    let {email , username , password} = req.body ;
    let id = uuidv4();
    console.log(email , username , password , id)
    let q = "insert into us (id,username,email,password) values (?,?,?,?)";
    let users = [id , email , username , password];
    

try{ 
    connection.query(q,users,(err,result)=>{
        if(err) throw err ;
        console.log(result) ;
        res.redirect("/users")
    });
} catch(err){
    console.log(err);
}
})
