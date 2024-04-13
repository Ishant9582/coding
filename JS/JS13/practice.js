let url = "http://universities.hipolabs.com/search?name=" ;
let word = "nepal"
async function geta(){
    let res = await axios.get(url+word)
    console.log(res.data)
}
geta();
let url1 = "https://api.dictionaryapi.dev/api/v2/entries/en/"
let wordi = "digital"
async function get(){
    let res = await axios.get(url1+wordi)
    console.log(res.data)
}
get();