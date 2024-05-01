let userseq = [] ;                   
let gameseq = [] ;          
let started = false ;            
let level = 0 ;   
let btns = ["red","green","yellow","purple"] ; 
let h3  = document.querySelector("h3") ;
document.addEventListener("keypress" , ()=>{
    if(started == false){
        console.log("game started") ;
        started = true ;
        levelupp() ;
    }          
})          
function gameflash(a){    
    // console.log(`${a}`)   
    let randbtn = document.querySelector(`.${a}`)    
    // console.dir(randbtn)   
    randbtn.classList.add("flash")   
    setTimeout(()=>{    
        randbtn.classList.remove("flash")   
    },500)   
     
}
function userflash(b){
    let rand = document.querySelector(`.${b}`) ;
    rand.classList.add("userflash") ;
    setTimeout(()=>{
        rand.classList.remove("userflash") ;
    },300) ;
}
function levelupp(){
    userseq = [];
    level++ ;
    h3.innerText = `u r at level : ${level}`
    let random = Math.floor(Math.random()*3);
    let randomcolor = btns[random] ;
    //console.log(randomcolor) ;
    gameflash(randomcolor) ;
    gameseq.push(randomcolor) ;
    //console.log(gameseq);
}
let btnss = document.querySelectorAll(".btn") ;
for(btn of btnss){
    btn.addEventListener("click" , function(){
        console.log(this) ;
        let v = this.getAttribute("id") ;
        //console.log(v)
        userseq.push(v);
        //console.log(userseq) ;
        userflash(v) ;
        check(userseq.length - 1) ;
    })
}
function check(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length == gameseq.length){
        console.log("hello")
        setTimeout(levelupp ,1000);   
        }          
    }
    else{
        console.log("failure");
        h3.innerText = `you r failed and ur score is ${level} press any key for restart`
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor = "white"
        },200)
        reset();
    }
}
function reset(){
    userseq = [];
    gameseq = [];
    started = false ;
    level = 0 ;
}