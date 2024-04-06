let movie = prompt("enter your favourite movie")
let guess = prompt("guess the movie")
while(guess!=movie){
    if(guess=="exit"){
        console.log("you quit the game") ;
        break ;       
    }
    console.log("wrong guess") ;
    guess = prompt("try again");
}
if(guess == "movie"){
    console.log("you r right") ;
}