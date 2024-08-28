const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  database: 'connecting',
  password: 'ishant135',
});
let  getrandomuser = ()=> {
  return[
     faker.string.uuid(),
     faker.internet.userName(),
     faker.internet.email(),
     faker.internet.password(),
  ];
}
let data = [] ;
for(let i = 1 ; i<=100 ; i++){
    data.push(getrandomuser())
}

let q = "insert into us (id,username,email,password) values ?"
try{
    connection.query(q,[data],(error,result)=>{
        if (error) throw err ;
        console.log(result)
    });
} catch(error){
    console.log(error);
}
connection.end() ;