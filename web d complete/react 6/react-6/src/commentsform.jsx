import { useState } from "react";
export default function commentt({addnewcomment}){
    let [form , setform] = useState({
        username : "" ,
        text : "" ,
        rating : 5 ,
    })
    let [valid , setvalid] = useState(true)
    function handle(event){
        setform((a)=>{
            return {...a , [event.target.name] : event.target.value}
        });
    };
    function submit(event){
        if (!form.username){
            console.log("username empty")
            event.preventDefault() ;
            setvalid(false) ;
            return ;
        }
        console.log(form);
        addnewcomment(form);
        event.preventDefault();
        setvalid(true)
    }
    return(
        <div>
        <form onSubmit={submit}>
          
            <input type="text" name="username" id="username" onChange={handle} value={form.username} />
            <br /><br />
            <p>{!valid ? "username cant be empty" : ""}</p>
            <br />
            <textarea name="text" id="textarea" value={form.text} onChange={handle}></textarea>
            <br /><br />
            <input type="number" name="rating" value={form.rating} onChange={handle} id="" min={1} />
            <button>submit</button>
        </form>
        </div>
    )
}


