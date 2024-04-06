let input = document.querySelector("input")
input.addEventListener("keydown",function(event){
    console.log(event)
    console.log(event.code)
    console.log(event.key)
})