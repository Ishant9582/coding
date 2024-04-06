let a = [1,23,4,5,6,78,9] ;
let min = a.reduce((a,min)=>{
    if(a<min){
        return min ;
    }
    else{
        return a ;
    }
})
console.log(min);