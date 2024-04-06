let img = document.querySelector("img") ;
console.dir(img.src)
console.dir(img.getAttribute("id")) ;
img.setAttribute("id" , "spider") ; // agter using this size of image changes as styling attached with it changes as id changes
img.setAttribute("src" , "assets/creation_1.png") // this will change image address results in picture change