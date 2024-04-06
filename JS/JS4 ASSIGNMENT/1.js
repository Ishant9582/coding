let a = [1,2,3,4,5,6,2,3] ;
let item = 2 ;
console.log(a.indexOf(item));

if(a.indexOf(item)!=(-1)){
    console.log("present")
    for(let i=0 ; i<a.length ; i++){
        if(a[i]==2){
            a.splice(i , 1) ;
            console.log("element deleted") ;
        }
    }
}
else{
    console.log("sorry this element dont exist");
}



