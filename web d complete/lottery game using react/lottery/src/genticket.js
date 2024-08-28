function genticket(n){
    let arr = new Array(n) ;
    for(let i = 0 ; i<n ; i++){
        arr[i] = Math.floor(Math.random()*10) ;
    }
    return arr ;
    
}
export {genticket};
function  sum(a){
    return a.reduce((c , b)=> c+b)
}
export {sum}