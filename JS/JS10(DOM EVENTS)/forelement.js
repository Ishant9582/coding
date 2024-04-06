let p = document.querySelector("p");
let box = document.querySelector(".box");
p.addEventListener("click" , function(){
    console.log("mouse was clicked");
})
box.addEventListener("mouseenter" , function(){
    console.log("mouse was entered");
})