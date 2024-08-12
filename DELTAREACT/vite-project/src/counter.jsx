import {useState} from "react" 
export default function counter(){
    let [count , setCount] = useState(0) ;
    function onclick(){
        setCount(count+1)
        console.log(count) // this is before re rendering
    }
    return(
        <div>
            <h1>welcome</h1>
            {/* //below one  takes place after re rendering so greater than above */}
            <h2>{count}</h2>    
            <button onClick={onclick}>click me</button>
        </div>
    )
}