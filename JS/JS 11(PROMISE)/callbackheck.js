let h1 = document.querySelector("h1")
function color(color,delay,nextcolor){
    setTimeout(()=>{
        h1.style.color = color;
        if(nextcolor) nextcolor();
        console.log("changed")
    },delay);
}
color("red",1000,()=>{
    color("blue",1000,()=>{
        color("purple",1000,()=>{
            color("pink",1000);
        });
    });
});
// nesting of callbacks statement is called callback heck