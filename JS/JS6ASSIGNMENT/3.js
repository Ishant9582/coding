let a = [] ;
let j = prompt("enter how many countries you want to enter")
for(let i=0 ; i<j ;i++){
    let k = prompt("enter counytry name")
    a[i] = k ;
}
console.log(a) ;
function greater(a){
let q = a[0].length;
let index = 0 ;
for(let j=0 ; j<a.length ; j++){
    if(a[j].length > q){
        q = a[j].length ;
        index = j ;
    }   
}
return index ;
}
let g = greater(a);
console.log(`country with greatest name is ${a[g]}`)