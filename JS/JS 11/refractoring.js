let h1 = document.querySelector("h1")
function colorchange(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color = color ;
            resolve("color chaged")
        },delay) ;
        
    }) ;
}
colorchange("red",1000)
.then(()=>{
    console.log("red color was completed")
    return colorchange("orange" , 1000) ;
})
.then(()=>{
    console.log("orange color was completed")
    return colorchange("green" , 1000);
})
.then(()=>{
    console.log("orange color was completed")
    return colorchange("purple" , 1000);
})
.catch(()=>{
    console.log("error")
})