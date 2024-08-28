import { useState } from 'react'
export default function Form(){
    let [fullname , setfullname] = useState("")
    function onchang(event){
        setfullname(event.target.value)
    }
    return( 
        <form action="">
            <h1>welcome</h1>
            <label htmlFor="fullname">full name</label>
            <input type="text" value={fullname} onChange={onchang} id='fullname'/>
            <button>submit</button>
        </form>
    )
}