let a = document.createElement("p") ;
console.dir(a) ;
a.innerText = "helo lorem6"
console.dir(a)
let body = document.querySelector("body") ;
body.appendChild(a);
let btn = document.createElement("button")
btn.innerText = "type" ;
let btn2 = document.createElement("button")
btn2.innerText = "type2" ;
let btn3 = document.createElement("button")
btn3.innerText = "type3" ;
let c = document.querySelector("p")
c.append(btn) ;
let btn4 = document.createElement("button")
btn4.innerText = "type4" ;

// for adding more data in a we can use 
a.append("acha aiurbdcb cdbcj cjhd") ;
// now use of insertadjacent ;
c.insertAdjacentElement("beforebegin",btn2) ; // ye wala krne se btn 2 p k bahar hoga
// in order words btn 2 is not a child of p
c.insertAdjacentElement("afterbegin" , btn3) // ye p ka child hoga and para ki starting m 
// ayega
c.insertAdjacentElement("beforeend",btn4) ; // inside p but at last and a child of p
           // removechild
//removeChild(a); // jo body k last  m likha hua tha vo remove ho jayega
           //remove element
btn.remove(); // button remove
 ///disasterous operation
 //body.remove(); // sb khatam xd ;