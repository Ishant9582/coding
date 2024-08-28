let arr = [1,2,3]
let arr2 = [5,6,7]
let arr3 = [8,9,0]
arr2.__proto__.ush = (n)=>{
    console.log("ushed eleemnt is" , n)
}
// create new protoype function ush1
// Array.prototype.abc = (n)=>{
//     console.log("ushed eleemnt is" , n)
// }