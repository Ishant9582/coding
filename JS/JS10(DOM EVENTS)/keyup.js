let input = document.querySelector("input")

input.addEventListener("keyup",function(event){
    console.log("key is released") // key ko dbakar rkho and then chor do then ye print hoga
    console.dir(input) ;
    console.log(event.code)
})