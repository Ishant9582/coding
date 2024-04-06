let id = setInterval(()=>{
    console.log("hello") ;
},2000) ;
setTimeout(()=>{
    clearInterval(id) ;
    console.log("timeout");
},10000) ;



                            // or but best to use above
                            
// let id = setInterval(function(){
//     console.log("hello") ;
// },2000) ;
// setTimeout(function(){
//     clearInterval(id) ;
//     console.log("timeout");
// },10000) ;