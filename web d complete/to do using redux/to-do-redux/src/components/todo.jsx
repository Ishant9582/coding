import React from "react";
import {useSelector , useDispatch} from "react-redux"
import { removetodo } from "../features/todo/todoslice";
function Todos(){
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return(
        <>
        <div>TODOS</div>
        {todos.map((todo)=>(
            <li key={todo.id}>
                {todo.text}
                <button onClick={()=>dispatch(removetodo(todo.id))}>X
                </button>
            </li>
        ))}
        </>
    )
}
export default  Todos