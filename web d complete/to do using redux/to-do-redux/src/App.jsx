import { useState } from 'react'
import Todos from './components/todo'
import './App.css'
import Addtodo from "./components/addtodo"
function App() {
  return(
    <>
    <h1>Learn about redux toolkit</h1>
    <Addtodo></Addtodo>
    <Todos></Todos>
    </>

  )
}

export default App
