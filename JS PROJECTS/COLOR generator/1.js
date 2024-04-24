let h3 = document.querySelector("h3")
let button = document.querySelector("button")
button.addEventListener("click",()=>{
    let c = click();
    let d = `rgb${c}`
    console.log(d)
    h3.innerText = `rgb${c}`
    document.querySelector("body").style.backgroundColor = d ;
})
function click(){
    let a = Math.floor(Math.random()*100);
    let b = Math.floor(Math.random()*100);
    let c = Math.floor(Math.random()*100);
    return `(${a},${b},${c})` ;
}