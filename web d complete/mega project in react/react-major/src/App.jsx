import React ,  { useState , useEffect } from 'react'
import './App.css'
import { useDispatch } from "react-redux";
import { Footer , Header } from './components/index';
import  {login,logout}  from './store/authslice';
import './index.css';
import { getcurrentuser } from './appwrite/auth';

function App() {

  const [loading , setloading] = useState(true)
  const dispatch = useDispatch()
  useEffect(()=>{
    getcurrentuser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=>setloading(false))
  },[])
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-grey-400'>
      <div className="w-full block">
    <Header></Header>
    <h1>jai </h1>
    <Footer></Footer>
    </div>

    </div>
  ) : "NULL"
}
export default App
