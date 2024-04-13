let url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
let word =  document.querySelector("input")
let btn = document.querySelector("button")
btn.addEventListener("click" , async ()=>{
    let a = word.value ;
    //console.log(a)
    let g = await get(a);
    //console.log(g[0].meanings) ;
    showing(g);
    
})
function showing(d){
    let list = document.querySelector(".dictionary")
    list.innerText = " "
    for(p of d){   
        let e = (p.definitions) ;
        // list.appendChild(li)
        printi(e)
    }
}
function printi(e){
    let list = document.querySelector(".dictionary")
    for(z of e){
        let li = document.createElement("li")
        console.log(z.definition)
        li.innerText = z.definition ;
        list.append(li)
    }
}

async function get(word){
    try{
    let res = await axios.get(url+word);
    return ((res.data)[0].meanings)
    }
    catch(e){
        console.log(e)
        return [];
    }
}