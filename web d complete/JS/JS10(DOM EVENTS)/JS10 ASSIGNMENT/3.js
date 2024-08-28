let input = document.querySelector("input")
let b = document.querySelector("h2")
let div = document.querySelector("div")
input.addEventListener("keydown" , function(event){
    console.dir(input)
    console.dir(event)   
    if((event.keyCode >=65) &&(event.keyCode <=90)){
        b.innerText = input.value ;
    }
    else if(event.code == "Space"){
        b.innerText = input.value ;
    }
    else{
        console.log("wrong input")
     
    }
    div.style.backgroundColor = "purple" ;
})