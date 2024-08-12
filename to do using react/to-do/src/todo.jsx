import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function todo() {
    let [todos, settodos] = useState([{task : "hello" , id : uuidv4()}]);
    let [newtodo , setnewtodo] = useState("")
    function addnewtask(){
        settodos((pre)=>{
            return [...pre , {task : newtodo , id : uuidv4()}] 
        })
        setnewtodo("")
        
    }
    function SETnewtodo(event){
        setnewtodo(event.target.value) ;
    }
    let deletetodo = (id)=>{
        settodos((pre)=>{return (todos.filter((a)=>a.id != id))}) ;
    }

    /// or //////
    // let deletetodo = (id)=>{
    //     settodos((pre)=>{return (pre.filter((a)=>a.id != id))}) ;
    // }

    let Uppercase = ()=>{
        settodos( (prevTodos)=>
            prevTodos.map((todo)=>{
            return{
                ...todo ,
                task : todo.task.toUpperCase() ,
            };
        })
    );
    }

    let Uppercaseone = (id)=>{
        settodos( (prevTodos)=>
            prevTodos.map((todo)=>{
                if(todo.id == id){
                    return{
                        ...todo ,
                        task : todo.task.toUpperCase() ,
                    };
                }
                else{
                    return todo ;
                }

        })
    );
    }


    return (
        <div>
            <h1>TODO LIST</h1>
            <input type="text" 
             placeholder='enter task' value={newtodo} onChange={SETnewtodo} />
            <br /><br />
            <button onClick={addnewtask}>submit</button>
            <br />
            <br /><br />
            <hr />
            <h4>to do tasks :::</h4>
            <ul>
                {
                todos.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.task}</span>
                        &nbsp; &nbsp;
                        <span><button onClick={()=>deletetodo(todo.id)}>delete</button></span>
                        <span><button onClick={()=>Uppercaseone(todo.id)}>Uppercase</button></span>
                    </li>
                ))
                }
            </ul>
            <br />
            <button onClick={Uppercase} >UppercaseAll</button>
        </div>

    )
}