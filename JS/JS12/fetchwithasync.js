let url = "https://catfact.ninja/fact" ;
let urli = "https://catfact.ninja/fact2" ;
async function getfacts(){
    try{
        let res = await fetch(url) ;
        let data = await res.json();
        console.log(data)
        res = await fetch(url) ;
        let data2 = await res.json();
        console.log(data2.fact)
        res = await fetch(urli) ;
        let data3 = await res.json();
        console.log(data3.fact)

    }
    catch(e){
        console.log(e) ;
    }
    console.log("hello")
}
getfacts();