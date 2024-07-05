let button = document.querySelectorAll("button")
console.log("hello")
for(a of button){
   
    a.addEventListener("click",()=>{
        //console.log(a)
        console.log("clicked")
    })
}