let a = [2,4,6,7] ;
let p = a.every((el)=>el%2 == 0 );
console.log(p) ;            //false
let q = a.some((el)=>(        // true
    el%2 == 0 
))
console.log(q) ;