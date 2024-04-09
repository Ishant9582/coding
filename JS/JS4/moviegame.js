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
while(true){
                

if(guess == a){
    console.log("congrats you suceed");
}
else if(guess== "quit" ){
    console.log("you failed") ;
}
else{
    guess = prompt("try again") ;
}
}
