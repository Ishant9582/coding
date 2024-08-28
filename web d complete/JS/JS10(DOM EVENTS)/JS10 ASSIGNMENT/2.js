let button = document.querySelector("button")
button.addEventListener("click",function(){
    let id = setInterval(() => {
        button.style.backgroundColor = "green" ;
        console.log("color changes")   
    }, 2000);
    setTimeout(() => {
        clearInterval(id)
        console.log("timeout")
    },6000);
})