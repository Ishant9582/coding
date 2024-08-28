h1 = document.querySelector("h1")
function colorchange(color,delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            //
            let num = Math.floor(Math.random()*10) +1 ;
            
            if(num>5){
                reject("promise rejected")
            }
            h1.style.color = color;
            console.log("color changed")
            resolve("color changed")
            
        },delay);
    })
}
async function demo(){
    try{
        //
        await colorchange("red",1000)
        await colorchange("blue",1000)
        await colorchange("green",1000)
        await colorchange("yellow",1000)
    }
    catch(err){
        console.log("error caught")
        console.log(err)
    }
    let a = 4 ;
    console.log(a)

}
demo();