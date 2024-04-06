let button  = document.createElement("button") ;
button.innerText = "ok" ;
let body = document.querySelector("body") ;
body.append(button) ;
button.setAttribute("id" , "btn") ;
console.dir(document.querySelector("#btn"));
