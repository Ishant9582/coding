let  nums = [1,2,3,4,5] ;
let final = nums.reduce((res,ell)=>{
    console.log(res) ;
    return res+ell ;
})
//or
// only drawback of using below one is that every elemetnt cant be printed separately
//final result will be there
//let final = nums.reduce((res,ell)=> res+ell );
console.log(final) ;  // ye likhne se 15 print hoga