function onsubmit(event){
    event.preventDefault();
    console.log("form submiytted")
}

export default function Form(){
    return(
    <form onSubmit={onsubmit}>
        <input type="text" placeholder="enter "/>
        <button>submit</button>
    </form>
)
}