let max = prompt("enter max value") ;
let random = Math.floor(Math.random()*max)+1 ;
let guess = prompt("enter guessed value") ;
while(true){
    if(guess == "quit"){
        console.log("wuitting tha game") ;
        break ; 
    }
    else if(guess == random){
        console.log(`your answer is shi congrats and the number is :::: ${guess}`) ;
        break ;
    }
    else if(guess<random){
        console.log("try again your guess id small") ;
        guess = prompt("your guess is small try again") ;
    }
    else{
        console.log("try again your guess is larger than th required") ;
        guess = prompt("try again guess is greater than expected") ;
    }
}