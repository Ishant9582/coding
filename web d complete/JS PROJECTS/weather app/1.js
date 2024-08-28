let search = document.querySelector(".bx-search")
let input = document.querySelector(".input")
let url = "https://api.weatherapi.com/v1/current.json?key=e6ef0e4d61364826b16201556242704&q="
let main = document.querySelector(".container")
let j = document.querySelector(".final") ;
console.dir(main)

search.addEventListener("click" , async()=>{
    
    getdetails() ;
    
})
async function check(){
    let given = (input.value) ;
    let b = await axios.get(url+given)
    console.log(b)
    return b.data ;
}
async function getdetails(){
    let a = await check(); 
    console.dir(a) ;
    let text = (a.current.condition.text) ;
    let icon = (a.current.condition.icon) ;
    let country = (a.location.country) ;
    let temp = (a.current.temp_c) ;
    j.innerHTML = "";
    j.innerHTML = `
    <div class="weather-info">
    <div class="details">
    <img src=${icon} alt="">
    <p class="temperature">${temp}<span>°C</span></p>
    <p class="description">${text}</p>
    <p class="country">${country}</p>  
    <p class="region">${a.location.region}</p>     
    </div>
    </div> `
  console.dir(j)
}



