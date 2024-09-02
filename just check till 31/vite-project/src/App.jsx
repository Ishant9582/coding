import React ,  { useState , useEffect } from 'react'
import { useDispatch } from "react-redux";
import { Footer , Header } from './components/index';
import  {login,logout}  from './store/authslice';
import './index.css';
import { getcurrentuser } from './appwrite/auth';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading , setloading] = useState(true)
  const dispatch = useDispatch()
  useEffect(()=>{
    getcurrentuser()
    .then((userData)=>{
      console.log(null == true)
      if(userData){
        console.log("user found")
        dispatch(login({userData}))
      }
      else{
        console.log("usernotfound")
        dispatch(logout())
      }
    })
    .finally(()=>setloading(false))
  },[])
  return (
    <div  >
    
    <Header></Header>
    <div className="min-h-screen">
    <Outlet/>
    </div>
    <Footer></Footer>
    </div>
  ) 
}
export default App
