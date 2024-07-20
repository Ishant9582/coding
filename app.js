import express from "express";
import cors from "cors"

const app = express();

// Default middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:"*",
    credentials:true
}))


// ROutes and their controllers

app.patch("/",(req,res)=>{
    console.log(req.body)
    res.send(`Hello World from Patch Request \n\n Body : ${JSON.stringify(req.body)}`)
})

app.put("/",(req,res)=>{
    console.log(req.body)
    res.send(`Hello World from PUT Request \n\n Body : ${JSON.stringify(req.body)}`)
})

app.use("*",(req,res)=>{
    res.send("Hello World from Universal Path")
})


const PORT = 3000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`)
})