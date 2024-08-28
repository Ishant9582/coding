create TABLE us(
    id varchar(40) unique ,
    username varchar(30) not null ,
    email varchar(45) unique not null ,
    password VARCHAR(34) not null
)