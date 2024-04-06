function arravg(arr){
    let count = 0 ;
    for(avg of arr){
        count+=avg;
    }
    average = count/arr.length ;
    return average ;
}

let arr = [5,2,3] ;
console.log(arravg(arr));