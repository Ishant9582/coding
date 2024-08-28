function saveto(data){
    return new Promise((resolve,reject)=>{
        let internetspeed = Math.floor(Math.random()*10) + 1 ;
        if(internetspeed>4){
            resolve("success : solved") ;
        }
        else{
            reject("failure : weak connection") ;
        } 
    })
}
saveto("hello")
        .then((result)=>{
            console.log("data 1 saved")
            console.log(result)
            return saveto("pekka")
        })
        .then((result)=>{
            console.log("data 2 saved")
            console.log(result)
        })
        .catch((error)=>{
            console.log("error" , error)
        })
