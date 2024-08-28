function sum(n){
    let add = "";
    for(let i = 0 ; i<n.length ; i++){
           add+=n[i] ;
    }
    return add ;
}
let n = ["h","1","o","p"] ;
console.log(sum(n)) ;