import { useState , useEffect } from "react";
export default function count(){
    let [countx , setcountx] = useState(0)
    let [county , setcounty] = useState(0)
    function inccountx(){
        setcountx((a)=>(a+1))
    }
    function inccounty(){
        setcounty((a)=>(a+1))
    }
    useEffect(function print(){
        console.log("hello use effect")
    } , [countx])
    return(
        <div>
            <h1>count = {countx}</h1>
            <button onClick={inccountx}>+1</button>
            <h1>count = {county}</h1>
            <button onClick={inccounty}>+1</button>
        </div>
    )
}