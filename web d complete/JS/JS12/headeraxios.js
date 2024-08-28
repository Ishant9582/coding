let url = "https://icanhazdadjoke.com/"
async function getjokes(){
    try{
    let config = {headers : {accept: "application/json" }};
    let res = await axios.get(url,config)
    console.log(res.data);
    }
    catch(e){
        console.log(e)
    }

}
getjokes()