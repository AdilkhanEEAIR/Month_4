// Основы асинхронности

// Синхронный код
// console.log(1);
// console.log(2);
// console.log(3);

// Асинхронный код
// 1000 mls --> 1s
// setTimeout( () => {
//     console.log(1);
// }, 0)
// console.log(2);

// const button = document.querySelector('.button');
// button.onclick = () => {
//     setTimeout(() => {
//         console.log(1);
//     }, 500)
// }
// console.log(2);

// const h1 = document.querySelector('h1');
// let num = 0;

// const interval = setInterval(() => {
//     num++;
//     h1.innerHTML = num;
// }, 1000);
// setTimeout(() => {
//     clearInterval(interval);
// }, 5000)


// Chrome --> V8
// Firefox --> Quantum

// Event Loop - цикл событий

// Characters 

// const characters = [
//     {
//         name: "Чебурашка",
//         age: 7,
//     }, 
//     {
//         name: "MackLover",
//         age: 20,
//     },
//     {
//         name: "John Miller",
//         age: 52,
//     },
//     {
//         name: "Sponge Bob",
//         age: 19,
//     },
//     {
//         name: "Tom",
//         age: 10,
//     },
//     {
//         name: "Subaru",
//         age: 17,
//     },
//     {
//         name: "Iron Man",
//         age: 53,
//     }

// ];

//forEach - только для массивов
// characters.forEach((item, index) => {
//     console.log(item.name, index);
// });

// const arr = [1, 2, 3, 4];
// arr.forEach((item) => {
//     console.log(item);
// })

// const defaultImg = "https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}";

// characters.forEach((character) => {
//     const personBlock = document.createElement("div");
//     // personBlock.setAttribute("id", `person-${character.name}`);
//     personBlock.setAttribute("class", "person");
//     personBlock.innerHTML = `
//     <div class= "person_img">
//         <img src="defaultImg" alt="${character.name}">
//     </div>
//     <h3>${character.name}</h3>
//     <span><i><b><u>Age: </u></b></i>${character.age}</span>
//     `;

//     document.body.append(personBlock);
//     // document.body.prepend(personBlock); - задом наперёд

// });






// УРОК 3

// // ES5

// устаревшие методы
// const button = document.getElementById('btn');
// const buttons = document.getElementsByClassName('btn');
// const buttons = document.getElementsByTagName('button');

// ES6

// const button = document.querySelector('.btn');
// const button = document.querySelector('#btn');
// const button = document.querySelector('button');

// const buttons = document.querySelectorAll('.btn');
// const buttons = document.querySelectorAll('button');
// const buttons = document.querySelectorAll('#btn');

// const wrapper = document.querySelector('.wrapper');
// const newButton = document.createElement('button');
// wrapper.appendChild(newButton);
// const buttons = document.querySelectorAll('button');
// // console.log(buttons[0].checkValidity());   проверяет HTML ли элемент 
// // buttons[0].classList.add('red', 'btn');
// // buttons[0].classList.remove('red');
// // buttons[0].classList.contains('red'); 
// buttons.forEach((button) => {
//     button.onclick = (event) => {
//         event.target.classList.toggle('red');
//         // if(event.target.classList.contains('red')){
//         //     event.target.classList.remove('red');
//         // }
//         // else{
//         //     event.target.classList.add('red');
//         // }
//     }
// })

// Делегирование событий

const wrapper = document.querySelector('.wrapper');
wrapper.onclick = (event) => {  
    if(event.target.tagName.toLowerCase() === 'button'){
        event.target.classList.toggle('red');
    }
}