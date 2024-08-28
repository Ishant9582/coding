let btns = document.querySelectorAll("button")
for(btn of btns){
    btn.addEventListener("click" , ()=>{
        console.log("you clicked")
    })
    btn.addEventListener("click",()=>{
        alert("alert")
    })
}