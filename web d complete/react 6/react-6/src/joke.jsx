import { useState, useEffect } from "react" ;
export default function joke(){
    let url = "https://official-joke-api.appspot.com/random_joke"
    async function gett(){
        let res = await fetch(url)
        let resjson = await res.json() ;
        console.log(resjson)
        setjoke({setup : resjson.setup , punchline : resjson.punchline});
    }
    let [joke , setjoke] = useState({})
    useEffect(()=>{
        async function gett(){
            let res = await fetch(url)
            let resjson = await res.json() ;
            console.log(resjson)
            setjoke({setup : resjson.setup , punchline : resjson.punchline});
        }
        gett()     
    }, [])
    return(
        <div>
        <h3>joker!</h3>
        <h2>{joke.setup}</h2>
        <h2>{joke.punchline}</h2>
        <button onClick={gett}>getjoke</button>
        </div>
    )
}