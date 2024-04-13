let button = document.querySelector("button")
button.addEventListener("click" , async()=>{
    console.log("buttton clicked")
    let fact = await getfact();
    let p = document.querySelector("p")
    //or
   // let p = document.querySelector(".o")
    p.innerText = fact ;
});

let url = "https://catfact.ninja/fact" ;
async function getfact(){
    try{
        let res = await axios.get(url) ;
        
        return (res.data.fact);
    }
    catch(e){
        console.log(e)
        return "error caught" ;
    }
}
