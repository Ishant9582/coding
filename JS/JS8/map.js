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
let array = arr.map((s)=>{
    return s.marks*2 ;
})  ;
console.log(array) ;
