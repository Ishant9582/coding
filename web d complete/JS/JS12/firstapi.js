let url = "https://catfact.ninja/fact" ;
fetch(url)
.then((res)=>{
    return res.json();   // to covrt intp readable form
    
})
.then((data1)=>{
    console.log("data 1 = ",data1.fact);
    return fetch(url)
})
.then((res)=>{
    return res.json();
})
.then((data2)=>{
    console.log("data 2 = ",data2.fact);
})
.catch((err)=>{
    console.log(err);
})
console.log("start")    // this will exexcute first
