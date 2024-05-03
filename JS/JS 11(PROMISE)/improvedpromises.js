function saveto(data){
    return new Promise((resolve,reject)=>{
        let internet = Math.floor(Math.random()*10) + 1 ;
        if(internet>4){
            resolve("success : data saved")
        }
        else{
            reject("failure : data not saved")
        }
    });
};
let result = saveto("c")
result.then((p)=>{
    console.log("promise 1 resolved")
    console.log(p)
    return saveto("per")
})
.then((p)=>{
    console.log("promise 2 resolved ")
    console.log(p)
    return saveto("buk")
})
.then(()=>{
    console.log("promise 3 resolved")
    console.log(p)
})
.catch((e)=>{
    console.log("promise was rejected")
    console.log(e)
})