let n = prompt("enter no. whose factorial want to find")
let fact = 1 ;
if(n==0){
    fact = 1 ;
}
else{
    for(let i =1 ; i<=n ; i++){
        fact = fact*i ;
    }
}
console.log(fact) ;