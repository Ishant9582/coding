let form = document.querySelector("form")
form.addEventListener("submit" , function(event){
    event.preventDefault();
    let user = document.querySelector("#name")
    let pass = document.querySelector("#pass")
    console.dir(user) ;
    //after scrolling downwards we can see that value of it changes everytime like what we give as an input
   // in name 
    console.log(user.value)
    console.log(pass.value)
    alert(`your name is ${user.value} and pass is ${pass.value}`)
   
   // or in place of doing above
    
  ///  console.dir(form);
    // then go to elements
   // console.dir(form.elements)
   // alert(`your name is ${form.elements[0].value} and pass is ${form.elements[1].value}`)

    
})