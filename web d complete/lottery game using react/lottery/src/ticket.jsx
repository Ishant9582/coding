import  Ticketnum from "./ticketnum";
import "./ticket.css"
export default function Ticket({ticket}){
    return(
        <div className="ticket">
            {ticket.map((num,idx)=>{
               return <Ticketnum num={num} key={idx}/>
            })}
        </div>
    );
}