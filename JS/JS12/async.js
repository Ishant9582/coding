// for normal working
// async function greet(){
//     return "hello"
// }
// greet()
// .then((result)=>{
//     console.log("successfuly and result is : " , result)
// })
// .catch((err)=>{
//     console.log("error is found and it is" , err)
// })


// if error
async function greet(){
    throw "404 page not found"
    return "hello"
}
greet()
.then((result)=>{
    console.log("successfuly and result is : " , result)
})
.catch((err)=>{
    console.log("error is found and it is" , err)
})
 // or
 let demo = async() =>{
    return 5;
 }
 console.log(demo())