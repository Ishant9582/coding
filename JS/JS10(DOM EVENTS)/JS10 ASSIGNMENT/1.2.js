let input = document.querySelector("input")
let p = document.querySelector("p")
input.addEventListener("keypress",function(e){
    console.log("key is pressed")
    console.log(e.code)
    
    p.innerText += e.code ;
})