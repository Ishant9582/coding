let p = document.querySelector("p")
let h1 = document.querySelector("h1")
let h3 = document.querySelector("h3")
let button = document.querySelector("button")
p.addEventListener("click" , get)
h1.addEventListener("click" , get)
h3.addEventListener("click" , get)
button.addEventListener("click" , get)
// from above we can see how simple our code looks and
// execution of all these are store in a function
// helps in removing redundancy
function get(){
    console.dir(this)
    console.dir(this.innerText)
    this.style.color = "blue" ;
}
