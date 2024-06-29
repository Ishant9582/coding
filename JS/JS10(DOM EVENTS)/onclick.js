// for single button
let btn = document.querySelector("button") ;
console.dir(btn) ;
// btn.onclick = ()=>{
//     console.log("clicked") ;
// }

// or
btn.onclick = function(){ console.log("clicked")}; 
// for selecting all buttons
let btns = document.querySelectorAll("button")
for(btn of btns){
    btn.onclick = hello
    
}
function hello(){
    console.log("liked") ;
}
