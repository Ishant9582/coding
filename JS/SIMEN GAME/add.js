let gameseq = []
let userseq = []
let level = 0 
let started = false;
let btns = ['red' , 'green','yellow','orange']
let h3 = document.querySelector("h3")
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started")
        started = true ;
        levelup();
    }
    
    
})
function gameflash(a){
    a.classList.add("flash")
    setTimeout(function(){
        a.classList.remove("flash")
    },250)
    // console.log("flashed")
} ;
function userflash(p){
    p.classList.add("userflash")
    setTimeout(function(){
        p.classList.remove("userflash")
    },250)
    console.log("flashed")
} ;

function levelup(){
    userseq = [];
    level++ ;
    h3.innerText = `level ${level}` ;
    let random = Math.floor(Math.random()*3)
    let randomcolor = btns[random]
    let randbtn = document.querySelector(`.${randomcolor}`) 
   // console.log(random)
    //console.log(randomcolor)
    //console.log(randbtn)
    
    gameseq.push(randomcolor) ;
    console.log(gameseq)
    gameflash(randbtn) ;
}
function check(idx){
    // index pass ke=rwaya bcoz current element p check krna hai as
    // if thus let index = level-1 it will check only last
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup , 1000);
        }
        
    }
    else{
        h3.innerHTML = `game over your score is <b>${level}</b> <br> press any key to restart!!!!`
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white" ;
        },150);
        reset();
    }
};
let allbtns = document.querySelectorAll(".btn")
for(btn of allbtns){
    btn.addEventListener("click",function(){
        console.log("button was pressed");
        //console.log(this) 
        let p = (this) ;
        userflash(p); /////aaaaaaaaaaaaaaaaaa
        // let p = btn   we cant use it as we dont get desired output
        usercolor = p.getAttribute("id")
        console.log(usercolor)
        
        userseq.push(usercolor)
        check(userseq.length-1);
    })
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0 ;
    
};