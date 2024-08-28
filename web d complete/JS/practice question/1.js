let a = document.createElement("p") ;
a.innerText = "hello how are u" ;
let body = document.querySelector("body")
body.appendChild(a) ;
a.classList.add("blue") ;
let h = document.createElement("h3")
h.innerText = "bolo bhai"
body.appendChild(h) ;
h.classList.add("red") ;
let div = document.createElement("div")
let h1 = document.createElement("h1")
let p = document.createElement("p")
h1.innerText = "i am in div" ;
p.innerText = "me too"
div.append(h1);
div.append(p)
body.appendChild(div)
div.classList.add("box")
