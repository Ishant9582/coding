let url = "http://universities.hipolabs.com/search?name=";
let button =  document.querySelector("button")
button.addEventListener("click",async ()=>{
    let country = document.querySelector("input").value ;
    console.log(country);
    let clgname = await getcountry(country);
    //console.log(clg) ;
    showing(clgname) ;
});
function showing(clgname) {
    let list = document.querySelector(".list")
    list.innerText = "";
    for(col of clgname){
        console.log(col.name)
        let li =  document.createElement("li");
        li.innerText = col.name ;
        list.appendChild(li);
    }
}
async function getcountry(country){
    try{
    let res = await axios.get(url + country);
    return (res.data);
    }
    catch(e){
        console.log(e)
        return []
    }
}

