let boxes = document.querySelectorAll(".box");
console.dir(boxes)
// boxes.forEach((element) =>{  
//     element.addEventListener("click",()=>{
//         console.dir(element) 
//     } )
// } ); 
let wincase = [[0,1,2],[3,4,6],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let give =  true ;
let count = 0 ;
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
         count++ ;
         //check();

         let isWinner = check();
         console.log(!isWinner)
         if (count === 9 && !isWinner) {
            gameDraw();
          }
    }) ;
} ;
let p = 0  ;
let h2 = document.querySelector("h2")
function check(){
    for(let pattern of wincase){
         let first = boxes[pattern[0]].innerText ;
         let second = boxes[pattern[1]].innerText ;
         let third = boxes[pattern[2]].innerText ;
         if((first!="")&&(third != "")&&(second !="")){
             if((first === second) && (second === third)){
                showWinner(first);
                return true ;
            }
        }    
    };
}
const gameDraw = () => {
        h2.innerText = `Game was a Draw.`;
        disableBoxes();
}; 
const showWinner = (winner) => {
    h2.innerText = `Congratulations, Winner is ${winner}`;
    disableBoxes();
};
const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
};
    
    
 

let reset = document.querySelector(".btn")
reset.addEventListener("click",()=>{
    for(let a of boxes){    
        a.innerText = "" 
        a.disabled = false ;  
    } 
    h2.innerText = ""                
})





