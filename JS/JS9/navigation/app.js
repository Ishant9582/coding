// let a = document.querySelector("div") ;
//or if there are a lot of div and we want to excess a particular one
let a = document.querySelector(".box") ;
//use class instead of div
console.dir(a.childElementCount);
console.dir(a.children);
let b = document.querySelector("ul")
console.dir(b.parentElement) ;
// for changing color of parent elemant  ;
b.parentElement.style.backgroundColor = ("green") ;
console.dir(b.children) ;
b.children[2].style.color = "red" ;
let img = document.querySelector("img") ;
img.previousElementSibling.style.color = "pink" ;
// above command will change clor of spiderman to pink
console.dir(b.previousElementSibling) ;
// below command will change color of h4
b.previousElementSibling.style.backgroundColor =  "blue" ;
a.previousElementSibling.style.backgroundColor = "red" ;



