const a = (n1,n2) => {
    console.log(n1+n2) ;
}
const  b = (n1,n2) => n1-n2   ;                  // implicit return
// n1-n2 ko parenthesis k andar bhi likh skte but ye bhi valid as ye single value return 
//kr rha hai
a(2,4) ;
console.log(b(2,5)) ;