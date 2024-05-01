const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];

let option = document
let h2 = document.querySelector("h1")
let h3 = document.querySelector("h2")

let btn = document.querySelector("button")
let g = document.querySelectorAll(".option")
let tick = document.querySelectorAll(".ok")
let div = document.querySelector(".box")
let correct = 0 ;
let index = 0 ;
// console.dir(g)
btn.addEventListener("click",()=>{
    console.log("clicked") ;
    submitquiz() ;
    clear() ;
}) 
function submitquiz(){
    console.log("submitted clicked")
    const a = getAnswer() ;
    console.log(index)
    console.log(a)
    let c = quizData[index].correct
    console.log(c)
    if(a == quizData[index].correct){    
        correct++ ;
    }
    h3.innerText = `score is ${correct}` ;
    //console.log(index-2) ;
    index++ ;
    print() ;
    
}


const getAnswer = () => {
    let ans;
    tick.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

function print(){
    console.log(index)
    
    //console.log(data)
    // h2.innnerText = "hello"
    if(index == 4){
        h2.innerText = `YOUR SCORE IS ${correct}/${index}`
        // g[0].innerText = ""
        // g[1].innerText = ""
        // g[2].innerText = ""
        // g[3].innerText = ""
        tick.forEach(
                (input) => {
                    let g =(input.parentElement) ;
                    g.remove() ;
                }
        )
        btn.remove();
        h2.setAttribute("class" , "center") ;
        h3.remove();
        // div.setAttribute("id","new");
        div.classList.add("new") ;
    }
    else{
    const data = quizData[index] ;
    (h2.innerText) = data.question ;
    g[0].innerText = data.a
    g[1].innerText = data.b
    g[2].innerText = data.c
    g[3].innerText = data.d
    }
    
    
}
const clear = () => {
    tick.forEach(
        (input) => {
            input.checked = false ;
        }
    )
}
print();