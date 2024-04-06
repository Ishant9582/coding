function sum(...args){
    for(let i=0 ; i<args.length ; i++){
        console.log(args[i]);
    }
}
sum(1,2,3,4,5,6,7)
// function min(a,b,c){
//     console.log(arguments) ;
//     console.log(arguments.length) ;         // to know about arguments
// }
// min(1,2,3) ;
function sums(...args){
    return args.reduce((add,el)=>{
        return add+el ;
    })
}
console.log("output of sums is")
console.log(sums(1,2,3,4,5,6,70)) ;