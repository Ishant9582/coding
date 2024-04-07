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
console.log(saveto("o"))
