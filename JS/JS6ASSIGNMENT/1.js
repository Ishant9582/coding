function  check(n , p){
    for(let i=0 ; i<n.length ; i++){
        if(n[i]>p){
            console.log(n[i]) ;
        }
    }
}
let a = [1,2,3,4,5,6,7,8] ;
let number = prompt("enter your number");
check(a,number) ;