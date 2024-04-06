let a = 298712 ;
let sum = 0 ;
while(a>0){
    let digit = a%10 ;
    sum = sum + digit;
    a = Math.floor(a/10) ;
}
console.log(sum);