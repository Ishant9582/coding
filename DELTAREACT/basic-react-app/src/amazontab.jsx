import "./tab.css" ;
import Price from "./price.jsx"
function amazontab({Title , Description , idx}){
    let Oldprice = ['12' , '13' , '14'] ;
    let newprice = ['67' , '78', '98'] ;
    return(
        <div className="tab" >
        <h4>{Title}</h4>
        <p>{Description}</p>
        <Price Oldprice={Oldprice[idx]} newprice={newprice[idx]}/>
        </div>
    )
} ;
export default amazontab ;