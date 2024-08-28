let a = [] ;
let input = prompt("enter task you want to do") ;
while(true){
    if(input == "quit"){
        console.log("quitting app")
        break;
    }
    if(input == "display"){
        console.log("show")
        for(task of a){
            console.log(task)
        }
        console.log("--------------------")
    }
    else if(input == "add"){
        let input = prompt("enter task to be added") ;
        a.push(input) ;
        console.log("task added")
        console.log("--------------------")
    }
    else if(input == "delete"){
        let p = prompt("enter index of value u want to delete") ;
        a.splice(p , 1) ;
        console.log("deleted")
    }
    else{
        console.log("wrong request") ;
        break ;
        
    }
    input = prompt("enter task you want to do") ;    
}