const person = {
     name : "ishant" ,
     age : 20 ,
     city : "delhi" ,
};
console.log("before changing",person) ;
person.city = "new york" ;
person["country"] = "US" ;
console.log(person) ;