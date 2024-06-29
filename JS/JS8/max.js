let a = [1,7,8,3];

let max = a.reduce((a,b)=>{

    console.log(a)
    //console.log(b)
    if(a<b){
        return b ;
    }
    else{
        return a ;
    }
    
})
console.log("maximum is ")
console.log(max);