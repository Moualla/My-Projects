const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionEl = document.getElementById("question");

const formEl = document.getElementById("form");
const scoreEl =document.getElementById("score");
const inputEl = document.getElementById("input");

let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score = 0;
}
scoreEl.innerText =`score : ${score}`;

questionEl.innerText = `what is ${num1} multiplay by ${num2} ?`

const correctAns = num1 * num2 ;

formEl.addEventListener("submit",() => {
        const uesrAns = +inputEl.value;
        if (uesrAns === correctAns){
            score++;
            updatelocalstorge();
        }
        else{
            score--;
            updatelocalstorge();
        }});

function updatelocalstorge(){
    localStorage.setItem("score", JSON.stringify(score))
} 