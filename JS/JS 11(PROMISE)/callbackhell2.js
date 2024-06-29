// function saveto(data,success,failure){
//     let internet = Math.floor(Math.random()*10 )+ 1;
//     if(internet>5){
//         success();
//     }
//     else{
//         failure();
//     }
    
// }
// saveto("a" , ()=>{
//     console.log("data 1 is saved")
//     saveto("b" , ()=>{
//         console.log("data 2 is savedd")
//         saveto("c" , ()=>{
//             console.log("data 3 is saved")
//         },
//         ()=>{
//             console.log("data 3 is not saved")
//         }
//         )
//     },
//     ()=>{
//         console.log("data 2 is not saved")
//     }
//     )
// },
// ()=>{
//     console.log("data 1 is not saved error")
// }
// )
function save(success,failure){
    let internet = Math.floor(Math.random()*10) + 1 ;
    if(internet>5){
        success() ;
    }
    else{
        failure() ;
    } 
} ;
save(()=>{
    console.log("data 1 saved")
    save(()=>{
        console.log("data 2 saved")
        save(()=>{
            console.log("dta 3 is saved");
        },
        ()=>{
            console.log("dta 3 unsaved")
        }
        )
    },
    ()=>{
        console.log("data 2 unsaved")
    }
    )
},
()=>{
    console.log("data 1 unsaved error is there check net")
}
)