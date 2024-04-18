let arr = [
    {
        name : "she",
        marks : 67 ,
    }, 
    {
        name:"he" ,
        marks : 89 ,
    },
    {
        name : "jo",
        marks : 90 ,
    }
];
//let b = [1,2,3,4,56,7,8]
let ar = arr.map((s)=>{
    return s.marks*2 ;
})  ;
// let array = b.map((s)=>{
//     return s*2 ;
// })  ;
console.log(ar) ;
