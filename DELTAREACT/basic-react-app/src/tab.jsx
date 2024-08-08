// adding stylle

import "./tab.css"
function tab({title , price = 1}){
    return (
        <div className="tab">
            <h1>Welcome {title}</h1>
            <p> {price}</p>
        </div>
    )
}
export default tab ;