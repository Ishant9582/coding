let btn = document.querySelector("button")
btn.addEventListener("click",()=>{
    let random = generaterandom() ;
    let h1 = document.querySelector("h1")
    h1.innerText = random ;
    let div = document.querySelector("div")
    div.style.backgroundColor = random ;
    console.log("changed");
})
function generaterandom(){
    let red = Math.floor(Math.random()*255) ;
    let blue = Math.floor(Math.random()*255) ;
    let green = Math.floor(Math.random()*255) ;
    return (`rgb(${red} , ${blue} , ${green})`) ;
    
}