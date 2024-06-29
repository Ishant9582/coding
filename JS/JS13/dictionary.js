let url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
let word =  document.querySelector("input")
let btn = document.querySelector("button")
let list = document.querySelector(".dictionary")
btn.addEventListener("click" , async ()=>{
    list.innerText = " "
    let a = word.value ;
    //console.log(a)
    let g = await get(a);
    //console.log(g[0].meanings) ;
    showing(g);
    
})
function showing(d){
    
    
    for(p of d){   
        let e = (p.definitions) ;
        //console.log(p.definitions[0].definition)
        // list.appendChild(li)
        printi(e)
    }
}
function printi(e){
    
    console.log(e)
    for(z of e){
        let li = document.createElement("li")
        console.log(z)
        li.innerText = z.definition ;
        list.append(li)
    }
}

async function get(word){
    try{
    let res = await axios.get(url+word);
    console.log(res)
    return ((res.data)[0].meanings)
    }
    catch(e){
        console.log(e)
        return [];
    }
}