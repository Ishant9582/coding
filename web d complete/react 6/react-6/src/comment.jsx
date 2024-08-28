import { useState } from "react";
import Commentform from "./commentsform"
import './comment.css'
export default function Comments(){
    let [comments, setcomments] = useState([
        {
            username: "edwefr",
            text: "efdefe",
            rating: 5,
        }
    ]);

    let addnewcomment = (comm) => {
        setcomments((c) => [...c, comm]
        )
    }
    return (
        <>
        <div >
            <h1>ALL COMMENTS</h1>
            {comments.map((comment, idx) => (
                    <div className="comment" key={idx}>
                        <span>{comment.username}</span>
                        <br />
                        <span>{comment.text}</span>
                        <br />
                        <span>{comment.rating}</span>
                        <hr />
                    </div> 
                ))
            }
            <h2>ADD NEW</h2>
        </div>
        
        <Commentform addnewcomment={addnewcomment}/>
        </>
    )
}