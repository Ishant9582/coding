let a = [ [1,2,3] , [4,5,6,7] ] ;
for(let i = 0 ; i<a.length ; i++){
    console.log(`${i+1} list of array is `) ;
    for(let j=0 ; j<a[i].length ; j++){
        console.log(a[i][j]) ;
    }
}
console.log(a)