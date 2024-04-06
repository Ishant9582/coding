let p = 20 ;                     // global
function outer(){
    let x = 5 ;                   // function
    let y = 6 ;
    function inner(){
        console.log(x) ;             //lexical
        let a = 10 ;
    }
    function inner1(){
        console.log(x) ;
    }
    inner() ;                     // both this worked properly
    inner1() ;                        //
    console.log(a) ;                      // a is not defined  as opposite of lexical not true
}
console.log(p)                  // as p is global

outer() 
console.log(x)                // error