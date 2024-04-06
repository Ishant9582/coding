let student = {
     marks : 87 ,
     name : "capital",
     class : 5 ,
}

// let{marks , name:naam , place="rajasthan"} = student ;
//or
let{marks , name:naam , place:bol="rajasthan"} = student ;
console.log(marks);
console.log(name) //undefined
console.log(naam)
console.log(student)    // place vala isme add nhi hoga
//console.log(place); //error
console.log(bol);
