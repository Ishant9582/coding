let url = "https://dog.ceo/api/breeds/image/random" ;
let button = document.querySelector("button") ;
button.addEventListener("click",async ()=>{
    console.log("button clicked")
    let img = document.querySelector("img")
    let data = await getimage() ;
    img.setAttribute("src",data)
});
async function getimage(){
    try{
        let res = await axios.get(url)
        console.log(res)
        return (res.data.message);
       
    }
    catch(e){
        console.log(e);
        return "/" ;
    }
}
