// import React from "react";
// import {useDispatch} from "react-redux"
// import {logout} from "../../store/authslice"
// import {Logout} from "../../appwrite/auth"
// import { Link } from "react-router-dom";
// export default function LogoutBtn(){

    // const dispatch =  useDispatch()
    // const logouthandler = ()=>{
    //     Logout().then(()=>{
    //         dispatch(logout())
    //     })
    // }
//     return (
//         <div class="relative inline-block text-left">
//   <div>
//     <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
//       Options
//       <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//         <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
//       </svg>
//     </button>
//   </div>
  
  
//   <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//     <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//       <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">hyu</Link>
//       <button onClick={logouthandler} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Logout</button>
//     </div>
//   </div>
// </div>
//         // <button onClick={logouthandler} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Logout</button>
//     )
// }


import React, { useState } from 'react';
import {useDispatch} from "react-redux"
import {logout} from "../../store/authslice"
import {Logout} from "../../appwrite/auth"
import { Link } from "react-router-dom";
export default function LogoutBtn(){
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const dispatch =  useDispatch()
  const logouthandler = ()=>{
      Logout().then(()=>{
          dispatch(logout())
      })
  }

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        Account
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <Link to={"/getuser/data/io"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Account settings</Link>
            <button onClick={logouthandler} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Logout</button>
   
           
          </div>
        </div>
      )}
    </div>
  );
};

