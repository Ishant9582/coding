let user  =  document.querySelector("#user")
user.addEventListener("change",function(event){
    event.preventDefault();
    console.log("event changed")
    console.log(user.value)       // or this.value
})
user.addEventListener("input",function(event){
    event.preventDefault();
    console.log("input changed")
    console.log(user.value)       // or this.value
})