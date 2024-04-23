const enddate = "25 April 2024 10:00 PM"
document.querySelector("h3").innerText = enddate ;
let inputs = document.querySelectorAll("input")

const clock = ()=>{
    const end = new Date(enddate)
    const now = new Date();
    //console.log(end,now)
    const diff = (end - now)/1000 ; //result will be in milliseconds so 
    //divide by 1000 to make in seconds
    //console.log(diff) // 
    //convert into dates
    inputs[0].value = Math.floor((diff/86400)) ;
    inputs[1].value = Math.floor((diff/3600)%24) ;
    inputs[2].value = Math.floor((diff/60)%60) ;
    inputs[3].value = Math.floor((diff)%60) ;
}
setInterval(clock , 1000) ;
clock()