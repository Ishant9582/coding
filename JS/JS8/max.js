let a = [1,2,5,3,7,89,3];

let max = a.reduce((a,b)=>{
    if(a<b){
        return b ;
    }
    else{
        return a ;
    }
    
})
console.log(max);