let heading = document.querySelector("h1") ;
console.dir(heading.classList) ;
heading.classList.add("green") ;
console.dir(heading.classList) ;  // now lenth willbe 1 and it is green
heading.classList.add("underline") ;
console.dir(heading.classList) ; // now 2
heading.setAttribute("class" , "green") ;
// // as due to set attribute all classes are removed andomly that class which is in it 
// // stays as its a drawback of setattribute thats why classlist are mostly used
console.dir(heading.classList.contains("underline")) ; // we can also use log
console.dir(heading.classList.toggle("underline")) ; // as underline is absent clas so it will add it 
// // above one will return true
console.dir(heading.classList) ;