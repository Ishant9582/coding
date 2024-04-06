let post = {
    username : "ishant9582" ,
    content : "i am barbad" ,
    likes : 150 , 
    repost : 10 ,
    tags : ["apni barbadi" ,"@ishant" ] ,
    2 : "a" ,
}
console.log(post.username) ;
console.log(post["likes"]) ;
console.log(post.tags[0]) ;
let prop = "likes" ;                                                                                
let nameee = "username"   ;
console.log(post[prop])   ;
console.log(post[nameee]) ;
console.log("using dot")  ;
console.log(post.prop);   ;
console.log(post[2])      ;            // aasa hm username k case m nhi kr skte                                                      
console.log(post["2"])    ;         //  ye bhi shi chlega                    
console.log(post[likes])  ;      //  error                     