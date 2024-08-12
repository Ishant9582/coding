// adding stylle

import "./tab.css"
function tab({title , price = 1 , features }){
    let isdiscount = price > 1000 ;
    let styles = {backgroundColor : isdiscount ? "yellow" : ""}
    return (
        <div className="tab" style = {styles}>
            <h1>Welcome {title}</h1>
            <p> {price}</p>
            {/* niche vale se pura ek saath aa jayega */}
            {/* <p>{features}</p> */}

            {/* for rendering */}
            {/* <p>{features.map((feature)=>(
                <li>{feature}</li>
            ))}</p> */}

            {/* // */}

            {/* conditioning */}
            {/* {price > 1000 ? "discount is 5%" : null} */}
            
            {/* or */}
            {isdiscount && "discount is 5%" }


            
         
        </div>
    )
}
export default tab ;