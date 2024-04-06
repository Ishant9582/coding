let a = "abcdabcdggghh" ;
function unique(a){
    let ans = " " ;
    for(let i=0 ; i<a.length ; i++){
        let current = a[i] ;
        if(ans.indexOf(current)== -1){
            ans += current ;
        }
    }
    return ans ;
}
let p =unique(a) ;
console.log(p) ;