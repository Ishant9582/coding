let a = "heropanti"
let guess = prompt("enter your guessed movie") ;
// while((guess!=a)&&(guess!="quit")){
            
//     guess = prompt("try again bro")
// }
// if(guess == a){
//     console.log("congrats you suceed")
// }
// if(guess== "quit" ){
//     console.log("you failed")
// 
//or
let count = 0 ;
while(true){
                

if(guess == a){
    console.log("congrats you suceed");
    alert("you successfully guessed the movie in")
    break ;
}
else if(guess== "quit" ){
    console.log("you failed") ;
    break ;
}
else{
    count++ ;
    guess = prompt("try again") ;
}
}

