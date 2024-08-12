import { useState } from 'react'
export default function ludo(){
    let [moves , setmoves] = useState({red : 0 , blue : 0 , green : 0 , yellow : 0})



    // function setblue(){
    //     setmoves({...moves , blue : moves.blue + 1})
    // }
   // we can use above also but when purani value ke upr new value depend to its better to use callback

    function setblue(){
        setmoves((p)=>{
            return{...p , blue : p.blue + 1}
        })
    }
    function setred(){
        setmoves((p)=>{
            return{...p , red : p.red + 1}
        })
    }
    function setyellow(){
        setmoves((p)=>{
            return{...p , yellow : p.yellow + 1}
        })
    }
    function setgreen(){
        setmoves((p)=>{
            return{...p , green : p.green + 1}
        })
    }
    return(
    <div>
        <p>welcome</p>
        <div>
            <p>{moves.blue}</p>
            <button onClick={setblue} style={{backgroundColor : "blue"}}>+1</button>
            <p>{moves.red}</p>
            <button onClick={setred} style={{backgroundColor : "red"}}>+1</button>
            <p>{moves.green}</p>
            <button onClick={setgreen} style={{backgroundColor : "yellow"}}>+1</button>
            <p>{moves.yellow}</p>
            <button onClick={setyellow} style={{backgroundColor : "green"}}>+1</button>
        </div>
    </div>
    )
}