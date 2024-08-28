console.log("hello")
let id = setInterval(()=>{
    console.log("APNI HUKUMAT")
} , 2000) ;
console.log("ok done")
 //to stop or completely remove as now no printing will be there
setTimeout(()=>{
    console.log("stopr krdo re 10 second ho gye")
    clearInterval(id)
},10000)
//for stopping above