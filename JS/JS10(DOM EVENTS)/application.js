let input =  document.querySelector("input")
input.addEventListener("keydown" , function(event){
    console.log("code is :",event.code);
    if(event.code == "KeyU"){
        console.log("object moves forward")
    }
    if(event.code == "KeyR"){
        console.log("object moves right")
    }
    if(event.code == "KeyL"){
        console.log("object moves left")
    }
    if(event.code == "KeyD"){
        console.log("object moves back")
    }
})