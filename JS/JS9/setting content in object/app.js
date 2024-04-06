let a = document.querySelector("h1");
let b = document.querySelector("p") ;
console.dir(b.innerText) ; // published by k bad marvekl comics hi aayega
console.dir(b.innerHTML) ; // published by k bad marvel comics show hoga but i its own way
console.dir(b.textContent) ; // published by k bad marvel comics show hoga
a.innerText = "acha"

a.innerHTML = " <u>acha</u> "
b.innerHTML = ` <u>${b.innerText}</u> ` ;
b.innerText = "bolo sir" ;
b.innerHTML =` <b>${b.innerText}</b> `