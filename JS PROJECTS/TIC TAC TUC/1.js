let boxes = document.querySelectorAll(".box");
console.dir(boxes)
// boxes.forEach((element) =>{  
//     element.addEventListener("click",()=>{
//         console.dir(element) 
//     } )
// } ); 
let wincase = [[0,1,2],[3,4,6],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let give =  true ;
for(a of boxes){
    a.addEventListener("click",function(){
         console.dir(this) 
         if(give){
            this.innerText = "O"
            give = false ;
         }
         else{
            this.innerText = "X"
            give = true ;
         }
         this.disabled = true ;
         check();
    }) ;
} ;
let h2 = document.querySelector("h2")
function check(){
    for(let pattern of wincase){
         let first = boxes[pattern[0]].innerText ;
         let second = boxes[pattern[1]].innerText ;
         let third = boxes[pattern[2]].innerText ;
         if((first!="")&&(third != "")&&(second !="")){
             if((first === second) && (second === third)){
                h2.innerText = `winner is ${ boxes[pattern[0]].innerText}`
                for(let a of boxes){    
                    a.innerText = "" 
                    a.disabled = false ;  
                } 
             }
        }
         
    }
}
let reset = document.querySelector(".btn")
reset.addEventListener("click",()=>{
    for(let a of boxes){    
        a.innerText = "" 
        a.disabled = false ;  
    } 
    
                
})



