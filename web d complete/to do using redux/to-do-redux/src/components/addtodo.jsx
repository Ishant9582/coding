import React, { useState } from "react" 
import {useDispatch} from "react-redux"
import { addtodo } from "../features/todo/todoslice"
function Addtodo(){
    const [input , setInput] = useState("")
    const dispatch = useDispatch()
    const addtodohandler = (e)=>{
        e.preventDefault()
        dispatch(addtodo(input))
        setInput("")
    }
    return(
        <form action="" onSubmit={addtodohandler} className="space-x-3">
            <input type="text" placeholder="enter a todo" value={input} onChange={(e)=> setInput(e.target.value)} />
            <button type="submit">addtodo</button>
        </form>
    )
}
export default Addtodo