import { useState } from 'react'

import {genticket , sum} from "./genticket"
import Ticket from "./ticket"
export default function lottery({n,wincondition}){
    let [ticket , setticket] = useState(genticket(n))
    let iswinning = wincondition(ticket) ;
    function gennew(){
        setticket(genticket(n))
    }
    return(
        <div>
            <h1>welcome to lottery</h1>
            <Ticket ticket={ticket}/>
            <br />
            <h2>{iswinning && "congratulation u won"}</h2>
            <button onClick={gennew}>generate new ticket</button>
        </div>
    )
}