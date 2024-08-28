let a = (arr , ...args)=>[
    ...arr ,
    ...args.map((v)=>(v*2))

]
console.log(a([1,2,3] , 4, 5)) ;