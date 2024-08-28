function saveto(data){
    return new Promise((resolve,reject)=>{
        let internetspeed = Math.floor(Math.random()*10) + 1 ;
        if(internetspeed > 4){
            resolve("success : data saved")
        }
        else{
            reject("failure : data not saved")
        }
    });
}
let result = saveto("c")
result.then(()=>{
    console.log("promise resolved")
    console.log(result)
})
.catch(()=>{
    console.log("promise was rejected")
    console.log(result)
})