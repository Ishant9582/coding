function saveto(data,success,failure){
    let internet = Math.floor(Math.random()*10 )+ 1;
    if(internet>5){
        success();
    }
    else{
        failure();
    }
    
}
saveto("a" , ()=>{
    console.log("data 1 is saved")
    saveto("b" , ()=>{
        console.log("data 2 is savedd")
        saveto("c" , ()=>{
            console.log("data 3 is saved")
        },
        ()=>{
            console.log("data 3 is not saved")
        }
        )
    },
    ()=>{
        console.log("data 2 is not saved")
    }
    )
}
()=>{
    console.log("data 1 is not saved error")
}
)