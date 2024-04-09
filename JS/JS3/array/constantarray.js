const a =[1,2,3]
let b = [3,4,5]
let c = [7,8,9]
a.push(4)
console.log(a) // it will work
//a = b ; // error as a is constant
b = c ; // possible as these are not constant
console.log(b) ;
// hnce we realise the work of constant 
