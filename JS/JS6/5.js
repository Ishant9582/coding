function sum(n){
    let add = 0 ;
    for(let i = 1 ; i<=n ; i++){
           add+=i ;
    }
    return add ;
}
let n = prompt("enter no of terms whose sum want to find") ;
console.log(sum(n)) ;