// ДОМАШНЕЕ ЗАДАНИЕ 1
// 1) Валидация почты
const gmailInput = document.getElementById("gmail_input");
const gmailButton = document.getElementById("gmail_button");
const gmailResult = document.getElementById("gmail_result");

const gmailExpression = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
gmailButton.onclick = () => {
    if(gmailExpression.test(gmailInput.value)){
        gmailResult.innerHTML = "OK!";
        gmailResult.style.color = 'green';
    }
    else{
        gmailResult.innerHTML = "Ошибка, введите корректную почту (gmail)";
        gmailResult.style.color = 'red';
    }
}

// 2) Рекурсивное движение блока
// const child = document.querySelector(".child_block");
// let position = 0;
// const step = 1;
// const maxRight = 450; 

// function moveRight() {
//   if (position < maxRight) {
//     position += step;
//     child.style.left = position + "px";
//     requestAnimationFrame(moveRight); 
//   }
// }
// moveRight();




// ДОМАШНЕЕ ЗАДАНИЕ 2
// 1) Рекурсивное движение блока по кругу
const child = document.querySelector(".child_block");
const parent = document.querySelector(".parent_block");
const step = 10;
let x = 0;
let y = 0;

function moveRight() {
    const maxX = parent.clientWidth - child.clientWidth;
    if(x < maxX) {
        x += step;
        child.style.left = x + "px";
        requestAnimationFrame(moveRight);
    }
    else {
      requestAnimationFrame(moveDown);
    }
}

function moveDown() {
    const maxY = parent.clientHeight - child.clientHeight;
    if(y < maxY) {
        y += step;
        child.style.top = y + "px";
        requestAnimationFrame(moveDown);
    }
    else {
      requestAnimationFrame(moveLeft);
    }
}

function moveLeft() {
    if(x > 0) {
        x -= step;
        child.style.left = x + "px";
        requestAnimationFrame(moveLeft);
    }
    else {
      requestAnimationFrame(moveUp);
    }
}
function moveUp() {
    if(y > 0) {
        y -= step;
        child.style.top = y + "px";
        requestAnimationFrame(moveUp);
    }
    else {
      requestAnimationFrame(moveRight);
    }
}
// Чтобы крутилось по кругу
requestAnimationFrame(moveRight);

// 2) Секундомер
const seconds = document.getElementById("seconds");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let num = 0;
let interval = null;

startBtn.onclick = () => {
  if (interval === null) {
    interval = setInterval(() => {
      num++;
      seconds.innerHTML = num;
    }, 1000);
  }
}
stopBtn.onclick = () => {
  clearInterval(interval);
  interval = null;
}
resetBtn.onclick = () => {
  clearInterval(interval);
  interval = null;
  num = 0;
  seconds.innerHTML = num;
}