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
const child = document.querySelector(".child_block");
let position = 0;
const step = 1;
const maxRight = 450; 

function moveRight() {
  if (position < maxRight) {
    position += step;
    child.style.left = position + "px";
    requestAnimationFrame(moveRight); 
  }
}
moveRight();