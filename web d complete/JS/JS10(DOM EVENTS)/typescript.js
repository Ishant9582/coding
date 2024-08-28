let user = document.querySelector("#user")
let p = document.querySelector("p")

user.addEventListener("input",function(event){
    event.preventDefault();
    console.log("input changed")    
    console.log(user.value)       // or this.value
    p.innerText = user.value ;
    p.style.color = "red";
})

