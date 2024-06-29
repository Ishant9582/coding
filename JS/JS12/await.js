h1 = document.querySelector("h1")
function colorchange(color,delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            //
            h1.style.color = color;
            console.log("color changed")
            resolve("color changed")
            
        },delay);
    })
}
async function demo(){
    let i = 1 ;
    if(i==1){
    await colorchange("red",1000) ;
    await colorchange("blue",1000) ;
    await colorchange("green",1000) ;
    await colorchange("yellow",1000) ;
    }
    else{
        await colorchange("pink",1000)
       
    }
}
demo();