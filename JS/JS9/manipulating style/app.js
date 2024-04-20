let img = document.querySelector("img") ;
console.dir(img.style) ;
img.style.width = "200px" ; // ye inline change hoga 
let heading = document.querySelector("h1") ;
heading.style.color = "pink" ;
heading.style.backgroundColor = "orange" ;
let links = document.querySelectorAll(".box a") ;
console.dir(links)
for(list of links){
    list.style.color = "green" ;
    console.log("changed") ;
}
let box  = document.querySelector(".box");
console.dir(box.style)
// in this box we can clearly see that in css there are a lot of propertoes assig with bo
// but due to these are not inline they are not visible in js
// so hemce only those prop. which are inline can be accessed and changes=d through js

