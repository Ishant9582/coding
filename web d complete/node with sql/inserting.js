const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  database: 'connecting',
  password: 'ishant135',
});
// let q = "insert into us (id,username,email,password) values (?,?,?,?)";
// let users = ["123b","123newwuser","abc@gmail.com" ,"abcb"];
let q = "insert into us (id,username,email,password) values ?";
let users = [
    ["123cd","123newwduserr","abfcd@gmail.com" ,"abdceb"] ,
    ["123scd","123nedwwusewrr","abwfc@gmail.codm" ,"abdcedb"],
];
try{ 
    connection.query(q,[users],(err,result)=>{
        if(err) throw err ;
        console.log(result) ;
    });
} catch(err){
    console.log(err);
}