import { useState } from 'react'
export default function like(){
    let [isLiked , setIsLiked] = useState(false) ;
    let [count , setcount] = useState(0) ;
    function clicked(){
        setIsLiked(!isLiked) ;  
    }
    function liked(){
        setcount(count-1)  ;
    }
    function disliked(){
        setcount(count+1)  ;
    }
    let styles = {color : "red"}
    return(
        <div>
            <h1>welcome here</h1>
            <p>count : {count}</p>
            <p onClick={clicked} >{isLiked ? ((<i onClick={liked} className="fa-solid fa-heart" style={styles}></i>)):
            (<i onClick={disliked} className="fa-regular fa-heart" ></i>)}
            </p>
        </div>
    )
}