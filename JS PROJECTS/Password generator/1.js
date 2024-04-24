let capital = "ABCDEFGHIJKLMNOPQRSTUYWXYZ"
let small = "abcdefghijklmnopqrstuvwxyz"
let number = "123456789"
let symbol = "!@#$%^&*()" 
let pass = document.querySelector("#pass-box")
let upper = document.querySelector("#upper-case")
let lower = document.querySelector("#lower-case")
let total = document.querySelector("#total-char")
let sym = document.querySelector("#symbols")
let no = document.querySelector("#numbers")
let btn = document.querySelector("button")
btn.addEventListener("click",()=>{
    getpassword();
})

let password = ""
let generate = (get)=>{
      return (get[Math.floor(Math.random()*get.length)])
}
function getpassword(){
    if(upper.checked){
        password += generate(capital)
    
    }
    if(lower.checked){
        password += generate(small)
        
    }
    if(sym.checked){
        password += generate(symbol)
     
    }
    if(no.checked){
        password += generate(number)
      
    }
    //console.log(password)
    if(password.length < total.value){
        getpassword() ;
    }

    pass.innerText = terminate(password , total.value);
    //console.log(finalpass)
}
function terminate(a,b){
   
    let g = a.slice(0,b) ;
    
    return g ;
}