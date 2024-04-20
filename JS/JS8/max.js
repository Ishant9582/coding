let a = [1,2,5,3,7,89,3];

let max = a.reduce((a,b)=>{
    console.log(b)
    if(a<b){
        return b ;
    }
    else{
        return a ;
    }
    
})
console.log("maximum is ")
console.log(max);