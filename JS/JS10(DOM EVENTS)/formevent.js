let form = document.querySelector("form")
form.addEventListener("submit",function(event){
    console.log("form submitted")
    //alert("form submitted") ;
    event.preventDefault() ; // through this command we canyt able to 
    // reach our destination site we remain on the same pge
})