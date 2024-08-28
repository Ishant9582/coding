let a = [7,1,2,33,4,5]
let greatest = a[0] ;
for(let i = 1 ; i<a.length ; i++){
    if(a[i]>greatest){
        greatest = a[i] ;    
    }
}
console.log(greatest) ;