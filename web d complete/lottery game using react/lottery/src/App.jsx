import Lottery from "./lottery"
import './App.css'
import {sum} from "./genticket"
function App() {
  function wincon(ticket){
    // return sum(ticket) === 16 ;
    return ticket.every((a)=>{
      a === ticket[0] ;
    })
  }
  return(
    <Lottery n={4} wincondition={wincon}/>
  )
}
export default App
