const num1 = Math.round(Math.random()*10);
const num2 = Math.round(Math.random()*10);

const formEl = document.querySelector("#form");
const buttonEl = document.querySelector("button");
const questionEl = document.querySelector('h2');

const inputEl = document.querySelector("input");

const scoreEl =document.querySelector("h4");

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
  score = 0;
}
scoreEl.innerText = `score: ${score}`;

questionEl.innerHTML = `What is ${num1} multiply by ${num2} ?`;

const correctAns = num1*num2;

formEl.addEventListener("submit",myFunction);
buttonEl.addEventListener("click",myFunction);

function myFunction(){
  const userAns = +inputEl.value;
  if(userAns === correctAns){
       score++;
       updateLocalStorage(); 
       scoreEl.innerText = `score: ${score}`;
      }
  else{   
    score--;
    updateLocalStorage();
    scoreEl.innerText = `score: ${score}`;

  }
}

function updateLocalStorage(){
  localStorage.setItem("score",JSON.stringify(score))
}