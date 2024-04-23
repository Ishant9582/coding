let btn = document.querySelector("button")
let input = document.querySelector("input")
let ul = document.querySelector("ul")
btn.addEventListener("click",()=>{
    console.log("buttun clicked")
    let g = document.createElement("li")
    let bt = document.createElement("button")
    bt.innerText = "delete"
    g.innerText = input.value ;
    g.append(bt)
    ul.append(g)
    input.value = ""
})
ul.addEventListener("click" , (event)=>{
    console.dir(event.target.parentElement)
    if(event.target = "button"){
        let x = event.target.parentElement ;
        x.remove() ;
    }
})