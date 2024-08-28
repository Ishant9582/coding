function onclick(){
    console.log("clkickes")
}
function onmouseover(){
    console.log("u entered mouse")
}
function ondoubleclick(){
    console.log("u double clicked")
}
export default function Button(){

    return(
    <div>
        <button onClick={onclick}>click me</button>
        <p onMouseOver={onmouseover}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, adipisci.</p>
        <button onDoubleClick={ondoubleclick}>click meee</button>
    </div>
    );
}