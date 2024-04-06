function oddevenfactory(kyachahiye){
    if(kyachahiye == "odd"){
        let odd = function(n){
            console.log(!((n%2)==0));
        }
        return odd;
    }
    else if(kyachahiye == "even"){
        let even = function(n){
            console.log((n%2)==0) ;
        }
        return even ;
    }
    else{
        console.log("wrong request")
    }

}
let request = prompt("enter your choice") ;
let func = oddevenfactory(request) ;
console.log(func) ;
console.log(func(5)) ;