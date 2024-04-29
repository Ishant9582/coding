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
    loading.classList.remove("loading")
    setTimeout(()=>{
        result(f , cur , curr)
        loading.classList.add("loading")
        
    },500) ;
    
    
})
async function result(val,currenc,curr){
    const tablebody = document.querySelector("tbody");
    tablebody.innerHTML = ""
    let d = val ;
    console.log(d)
   
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
            
            tablebody.innerHTML += `<tr>
            <th>currency code</th>
            <th>Value</th>
          </tr>
            <tr>
            <td>${key}</td>
            <td>${value*d}</td>  
          </tr> 
            
            ` ;
          }

        }
    }

}