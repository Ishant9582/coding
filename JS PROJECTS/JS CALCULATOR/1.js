let all = document.querySelectorAll(".buttons")
let value = document.querySelector("#calc")
value.value = "" ;
let final = [] ;
for(let b of all){ 
    b.addEventListener("click",function(){
        value.value += this.value ;
        final.push(this.value) ;
        
    })
}

let result = document.querySelector(".result")
result.addEventListener("click",()=>{
    value.value = eval(value.value) ;
})
let deleteall = document.querySelector("#clear").addEventListener("click",()=>{
    value.value = "" ;
})
let del = document.querySelector("#clearone").addEventListener("click",()=>{
    console.log(final)
    final.pop();
    let g = ""
    for(b of final){
        g += b ; 
    }
    console.log(g)
    value.value = g ;
})


