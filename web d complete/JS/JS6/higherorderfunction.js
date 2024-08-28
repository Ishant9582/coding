function multi(func,count){
    for(let i=1 ; i<=count ; i++){
                func() ;
    }
}

function single(){
    console.log("hello")
}

// let single = function(){
//     console.log("hello")         
// }
multi(single , 115) ;