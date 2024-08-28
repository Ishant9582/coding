import Tab from "./amazontab" 
function Amazon(){
    let styles = {
        display : "flex" ,
        flexWrap : "wrap" ,
        justifyContent : "center" ,
        alignItems : "center" ,  
           
    }
    return(
        <div style={styles}>
            <Tab Title="a" Description="XYZVVJBDJHGVHGJEN" idx={0}/>
            <Tab Title="B" Description="CBHFVJHDBJHDBEJKM" idx={1}/>
            <Tab Title="C" Description="NUYEFVJHWBHJBDFJBWHJF" idx={2} />
        </div>
    )
}
export default Amazon ;