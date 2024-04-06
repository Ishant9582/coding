let nums = [1,2,3,4,5]
let square = nums.map((el) =>{
    return el*el;
}) ;
console.log(square) 

    
let c = nums.reduce((a,b)=>{
        console.log(a) 
        return a+b 
}); 
/* ye work nhu krega
let c = nums.reduce((a,b)=>(
    console.log(a) 
    return a+b 
)); 
*/
// below one will work 
let d = nums.reduce((a,b)=>(
    
    a+b 
)); 

console.log(c) ;
console.log("due to d")
console.log(d)
console.log("avg")
let average = c/nums.length ;
console.log(average) ;
     

