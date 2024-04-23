let input =  document.querySelector("input")
input.addEventListener("keydown" , function(event){
    console.log("code is :",event.code);
    if(event.code == "KeyU"){
        console.log("object moves forward")
    }
    else if(event.code == "KeyR"){
        console.log("object moves right")
    }
    else if(event.code == "KeyL"){
        console.log("object moves left")
    }
    else if(event.code == "KeyD"){
        console.log("object moves back")
    }
    else{
        console.log("wrong key is pressed")
    }
})