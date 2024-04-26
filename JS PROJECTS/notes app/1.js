let btn = document.querySelector("#addbtn")
let main = document.querySelector(".main")
btn.addEventListener("click",()=>{
    addnote();
})
function addnote(){
    const note = document.createElement("div")  
    note.classList.add("note")
    note.innerHTML = `
    <div class="toolbar">
          <i  class="fa-solid fa-trash"></i>
          <i  class="save fa-regular fa-floppy-disk" class="save"></i>
    </div>
    <textarea></textarea>

    `;
    
    // delet();
    // orrrrrr
    note.querySelector(".fa-trash").addEventListener(
        "click",()=>{
            console.log("hello")
            note.remove()
            savenotes()
        }
        
    )

    note.querySelector(".save").addEventListener(
        "click",()=>{
            console.log("hello")
            savenotes() ;
        }
    )

 
    main.appendChild(note)
    savenotes();
} 

                   //or
// function delet(){
//     let z  = document.querySelectorAll(".note")
//     console.dir(z)
//     for(k of z){
//        k.addEventListener("click",(event)=>{
//         let d = (event.target.attributes[0].nodeValue)
//         console.log(d)
//         if(d == "fa-solid fa-trash" ){
//             console.log("hello")
//             let x = (event.target.parentNode.parentElement)
//             x.remove() ;
//             // let x = 
              
//         }
//        })
//     }
// }
function  savenotes(){
    const  notes = document.querySelectorAll(".note textarea")
    console.log(notes)
    const data = [] ;
    notes.forEach(
        (note) =>{
            data.push(note.value)
        }
    )
    console.log(data)
    localStorage.setItem("notes",JSON.stringify(data))
}
// self calling function
(
    function(){
        const lsnotes = localStorage.getItem("notes") ;
        console.log(lsnotes)
    }
)()


