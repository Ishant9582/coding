let button = document.querySelector("button")
let inp = document.querySelector("input")
let ul = document.querySelector("ul")
button.addEventListener("click" , function(){
    let item = document.createElement("li")
    item.innerText = inp.value ;
    let dltbtn = document.createElement("button")
    dltbtn.classList.add("delete")
    dltbtn.innerText = "delete" ;
    item.append("   ") ;
    item.appendChild(dltbtn) ;
    ul.appendChild(item)
    inp.value="";
});
// let delbtns = document.querySelectorAll(".delete")
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         let par = this.parentElement ;
//         console.log(par);
//         par.remove() ;
//         console.log("element deleted")
//     }) 
// }
// upper vale se bus vhi delete honge jo pehle se likhe hinge butr
// for those who just add hue hai
// we use event deligation for this
ul.addEventListener("click",function(event){
    console.log(event.target.nodeName) ; // as jo hmne upper likhi usse agr li element p click to bhi execute ho jayega to ye hme btayega button hai ya list
    console.dir(event.target)
    // yha button.delete krke object ayega bcoz its class is delete
    if(event.target.nodeName == "BUTTON"){
        let x = event.target.parentElement ;
        x.remove();
        console.log("deleted")
    }
})