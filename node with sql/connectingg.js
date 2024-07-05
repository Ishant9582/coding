const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  database: 'connecting',
  password: 'ishant135',
});
let q = "show tables"
try {
    connection.query(q,(err,result)=>{
        if(err) throw err ;
        console.log(result) ;
        console.log(result.length) ;
        console.log(result[0]) ;
    });
} catch(err){
    console.log(err);
}