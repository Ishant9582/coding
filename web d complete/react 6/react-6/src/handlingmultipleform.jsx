import { useState } from 'react'
export default function Form(){
    let [formdata , setformdata] = useState({
        username : "" ,
        fullname : "",
    });
    function onchang(event){
        let field = event.target.name;
        let value = event.target.value;
        console.log(field)
        setformdata((currd)=>{
            currd[field] = value ;
            return {...currd}
        });
    };
    function prevent(event){
        event.preventDefault();
    }
    return( 
        <form action="" onSubmit={prevent}>
            <h1>welcome</h1>
            <label htmlFor="fullname">full name</label>
            <input type="text" value={formdata["fullname"]}onChange={onchang} id='fullname'  name='fullname'/>
            <br /><br />
            <label htmlFor="username">User name</label>
            <input type="text" value={formdata.username} onChange={onchang} id='username' name='username'/>
            <button>submit</button>
        </form>
    )
}