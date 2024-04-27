let btn = document.querySelector("button")
let user = document.querySelector(".u")
let pass = document.querySelector(".k")
btn.addEventListener("click" , ()=>{
    let verifyuser = localStorage.getItem("user")
    let passverify = localStorage.getItem("pass")
    console.log(verifyuser)
    if((verifyuser.length == 2)){
        if(passverify.length == 2){
            let d = user.value  ;
            let b  = pass.value ;
            localStorage.setItem("pass" , JSON.stringify(b))
            localStorage.setItem("user",JSON.stringify(d))
        }
    }
    else{
            console.log(verifyuser)
            let g = JSON.stringify((user.value))
            console.log(g)
            let d =  JSON.stringify((pass.value))
            console.log(d)
            console.log(passverify)
            if((verifyuser == g)){
                if(passverify == d){
                    user.value = "" ;
                    pass.value = "" ;
                    alert("details matched")
                }
                else{
                    alert("incorrect pass")
                }
            }
            else{
                alert("check username again")
            }
          
        

    }
         
})





