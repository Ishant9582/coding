// for password
let btnn = document.querySelector(".butto")
let user = document.querySelector(".u")
let pass = document.querySelector(".k")
let preview = document.querySelector(".button")
let btn = document.querySelector("#addbtn")
let main = document.querySelector(".main")
let passhid =document.querySelector(".okkkk")
console.dir(passhid) ;
btnn.addEventListener("click" , ()=>{
    let verifyuser = localStorage.getItem("user")
    let passverify = localStorage.getItem("pass")
    
    if((verifyuser == null)){
        if(passverify == null){
            let d = user.value  ;
            let b  = pass.value ;
            localStorage.setItem("pass" , JSON.stringify(b))
            localStorage.setItem("user",JSON.stringify(d))
            user.value = "" ;
            pass.value = "" ;
            alert("congo ! details saved successfully")
        }
    }

    else{
           
            let g = JSON.stringify((user.value))
            console.log(g.length)
            console.log(verifyuser)
            let d =  JSON.stringify((pass.value))
            console.log(d.length)
            console.log(passverify)
            if((verifyuser == g)){
                if(passverify == d){
                    user.value = "" ;
                    pass.value = "" ;
                    passhid.setAttribute("class","hidden")
                    preview.classList.remove("hidden")
                }
                else{
                    alert("incorrect pass")
                }
            }
            else{
                alert("check username again")
            }
          
        

    }
         
})



//

btn.addEventListener("click",()=>{
    addnote();
});
function addnote(text = ""){ // bcoz jb other jgah addnote jb bnda kuch bhejega thodi
    const note = document.createElement("div")
    
    note.classList.add("note")
    note.innerHTML = `
    <div class="toolbar">
          <i  class="fa-solid fa-trash"></i>
          <i  class="save fa-regular fa-floppy-disk" ></i>
    </div>
    <textarea>${text}</textarea>
    ` ;
    console.dir(note)
    // delet()  ;
    // orrrrrr  ;
    note.querySelector(".fa-trash").addEventListener(
        "click",()=>{
            console.log("hello") ;
            note.remove() ;
            savenotes() ;
        }    
    )   

    note.querySelector(".save").addEventListener(
        "click",()=>{
            console.log("hello")
            savenotes() ;
        }
    )


preview.addEventListener("click" , ()=>{
    preview.classList.add("hidden")
    btn.classList.remove("hidden")
    main.classList.remove("hidden")
})
// for auto save

note.querySelector("textarea").addEventListener(
    "focusout" , ()=>{
        savenotes()
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
    if(data.length == 0){
        localStorage.removeItem("notes")
    }
    else{
        localStorage.setItem("notes",JSON.stringify(data))
    }
    
}
// self calling function
(
    function(){
        const lsnotes = JSON.parse(localStorage.getItem("notes")) ;
        if(lsnotes == null){
            addnote();
        }
        else{
          lsnotes.forEach(
              (lsnote)=>{   
                  addnote(lsnote) ;
              }
          )
       }

        
    }
)()


