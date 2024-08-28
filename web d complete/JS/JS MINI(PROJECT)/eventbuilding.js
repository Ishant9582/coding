let div = document.querySelector("div")
let ol = document.querySelector("ol")
let g = document.querySelectorAll("li")
div.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("div clicked")
    }
)
ol.addEventListener("click", function(event)
{
    console.log("ol clicked")
    event.stopPropagation(); // ye likhne se div clicked nhu  ayega
}
)

for(li of g){
    li.addEventListener("click", function(event){
        console.log("li clicked")
        event.stopPropagation()
    }
    )
}

