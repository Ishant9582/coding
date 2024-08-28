import React , {useState,useEffect} from "react";
import {useSelector} from "react-redux"
import { useNavigate } from "react-router-dom";
export default function Protected({children,authentication=true}){
    const navigate = useNavigate()
    const [loader , setloader] = useState(true)
    const authstatus = useSelector((state)=> state.authstatus)
    useEffect(()=>{
        if(authentication && authstatus !== authentication){
            navigate("/login")
        } else if(!authentication && authstatus !== authentication){
            navigate("/")
        }
        setloader(false)
    },[authstatus,navigate,authentication])
    return(
        loader ? <h1>Loading.......</h1> : <>{children}</>
    )
}