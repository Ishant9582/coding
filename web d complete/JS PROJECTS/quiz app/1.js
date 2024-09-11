import { quizData } from './quizData.js';  // Adjust the path based on the location of your files
// in 1.html scipt m type m module likhna pdega if we want to use this
let option = document;
let h2 = document.querySelector("h1");
let h3 = document.querySelector("h2");

let btn = document.querySelector("button");
let g = document.querySelectorAll(".option");
let tick = document.querySelectorAll(".ok");
let div = document.querySelector(".box");
let correct = 0;
let index = 0;

btn.addEventListener("click", () => {
    console.log("clicked");
    submitquiz();
    clear();
});

function submitquiz() {
    console.log("submitted clicked");
    const a = getAnswer();
    console.log(index);
    console.log(a);
    let c = quizData[index].correct;
    console.log(c);
    if (a == quizData[index].correct) {
        correct++;
    }
    h3.innerText = `score is ${correct}`;
    index++;
    print();
}

const getAnswer = () => {
    let ans;
    tick.forEach((inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    });
    return ans;
}

function print() {
    console.log(index);
    if (index == quizData.length) {
        h2.innerText = `YOUR SCORE IS ${correct}/${index}`;
        tick.forEach((input) => {
            let g = input.parentElement;
            g.remove();
        });
        btn.remove();
        h2.setAttribute("class", "center");
        h3.remove();
        div.classList.add("new");
    } else {
        const data = quizData[index];
        h2.innerText = data.question;
        g[0].innerText = data.a;
        g[1].innerText = data.b;
        g[2].innerText = data.c;
        g[3].innerText = data.d;
    }
}

const clear = () => {
    tick.forEach((input) => {
        input.checked = false;
    });
}

print();
