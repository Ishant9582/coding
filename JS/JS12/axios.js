let url = "https://catfact.ninja/fact" ;
async function getfact(){
    try{
        let res = await axios.get(url) ;
        console.log(res)  // data 
        console.log(res.data) // proper data which include fact and all like length and all present in data
        console.log(res.data.fact) // only fact
    }
    catch(e){
        console.log(e)
    }
}
getfact();