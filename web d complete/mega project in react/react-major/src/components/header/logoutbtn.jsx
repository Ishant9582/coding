import React from "react";
import {useDispatch} from "react-redux"
import {logout} from "../../store/authslice"
import {Logout} from "../../appwrite/auth"
export default function LogoutBtn(){
    const dispatch =  useDispatch()
    const logouthandler = ()=>{
        Logout().then(()=>{
            dispatch(logout())
        })
    }
    return (
        <button onClick={logouthandler} className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">Logout</button>
    )
}