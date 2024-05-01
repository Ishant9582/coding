
let loading = document.querySelector(".loading")
let btn = document.querySelector("#submit").addEventListener("click" , (event)=>{
    event.preventDefault() ;
    console.log("helli")
    let val = document.querySelector(".input") ;
    let currency = document.querySelector(".select"); 
    let currenc = document.querySelector(".selec");
    console.dir(currency)
    let f = (val.value)
    let cur = (currency.value)
    let curr = currenc.value ;
    loading.classList.remove("hidden")
    setTimeout(()=>{
        result(f , cur , curr)
        loading.classList.add("hidden")
        
    },500) ;
    
    
})
async function result(val,currenc,curr){
    const boo = document.querySelector(".ok");
    boo.value = ""
    let d = val ;
    console.log(d)
    console.dir(boo)
    console.log(curr)
    let url  = "https://open.er-api.com/v6/latest/" ;
    let a = await axios.get(url+currenc)
    console.dir(a)
    let g = a.data.rates ;
    for (let key in g) {
        if (g.hasOwnProperty(key)){
            value = g[key];
            if(key == curr){
                console.log(key)
                console.log(value)
            
            boo.value += `${value*d}${key} 
            ` ;
          }

        }
    }

}