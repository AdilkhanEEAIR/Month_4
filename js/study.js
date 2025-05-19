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

// const wrapper = document.querySelector('.wrapper');
// wrapper.onclick = (event) => {  
//     if(event.target.tagName.toLowerCase() === 'button'){
//         event.target.classList.toggle('red');
//     }
// }


// УРОК 4
//JSON - JavaScript Object Notation

// const user = {
//     name: 'John',
//     age: '25',
// }
// const strUser = JSON.stringify(123);
// console.log(strUser);

// const strUser = JSON.stringify('qwerty');
// console.log(strUser);

// const jsonUser = JSON.stringify(user);
// console.log(jsonUser);

// const jsonUser = JSON.stringify(user);
// const objectUser = JSON.parse(jsonUser);
// console.log(jsonUser);
// console.log(objectUser);


// AJAX - Asynchronous Javascript and XML
// HTTP - HyperText Transfer Protocol
// HTTPS - HyperText Transfer Protocol Secure
// Client <-------HTTP-------> Server

// Запросы - requests

// XHR - XML HTTP Request

// XML - Extensible Markup Language
// HTML -  HyperText Markup Language

// GET POST DELETE PATCH   <-- methods

const button1 = document.querySelector('.btn');
button1.onclick = () => {
    const request = new XMLHttpRequest(); // 1. Создание запроса
    request.open('GET', '/js/data.json');  // 2. Указание метода запроса и создание пути
    request.setRequestHeader('Content-type', 'application/json');// 3. Указание заголовка запроса
    request.send(); // 4. Отправка запроса
    request.onload = () => {
        const data = JSON.parse(request.response);
        document.querySelector('.name').innerHTML = data.name
        document.querySelector('.age').innerHTML = data.age
    }
}





// УРОК 6

// Деструктуризация
const user = {
    name: 'John',
    age: 21,
    isMarried: false,
}

const { name, age } = user
console.log(name, age);

// console.log(user.name, user.age);

// Hell CallBack
const loggerProduct = (product) => {
    const {product_name, price} = product;
    console.log(`Name: ${product_name}\nprice: ${price}som`);
    
}


console.log("Loading...");
// setTimeout(() => {
//     const product = {
//         product_name: 'Coca-cola',
//         price: 100
//     }
//     loggerProduct(product);
//     setTimeout(() => {
//         product.product_name = "Fanta";
//         loggerProduct(product);
//             setTimeout(() => {
//                 product.product_name = "Pepsi";
//                 loggerProduct(product);
//                     setTimeout(() => {
//                         product.product_name = "Mirinda";
//                         product.price = 87;
//                         loggerProduct(product);
//                             setTimeout(() => {
//                                 product.product_name = "Sultan Chay";
//                                 product.price = 60;
//                                 loggerProduct(product);
//                                     setTimeout(() => {
//                                         product.product_name = "Milk";
//                                         product.price = 90;
//                                         loggerProduct(product);
//                                     }, 1500);
//                                 }, 1500);
//                             }, 1500);
//                         }, 1500);
//                     }, 1500);
// }, 2000);

// Promise ---> pending ---> fulfilled || rejected


// const delay = 2000;
// const promise = new Promise((resolve, reject) => {
//     // throw new Error('Nurdin')
//     setTimeout(() => {
//         const product = {
//             product_name: "Coca-cola",
//             price: 100
//         } 
//         loggerProduct(product);
//         resolve(product);
//         reject();
//     }, delay)
// })
// promise.then((product) => {
//     return new Promise (() => {
//         setTimeout(() => {
//         product.product_name = "Fanta";
//         loggerProduct(product);
//     }, delay)
//     // console.log("Resolve");
//     })
// }, () => {
//     console.log("Promise one error");
    
// }).then((product) => {
//     setTimeout(() => {
//         product.product_name = "Pepsi";
//         loggerProduct(product);
//         resolve(product);
//         reject();
//     }, delay)
// }, () => {
//     console.log("Promise two error");
// })  

// Fetch
// XHR --> fetch

// const res = fetch('/data/fetch.json')
//     .then((response) => {
//         response.json()
//         .then((data) => 
//             console.log(data)
//         )
//     },)


    // .catch(err => console.log(err))
    // .finally(() => console.log('FINALLY')
    // )




// API - Application Programming Interface
// LINK
// https://jsonplaceholder.typicode.com

// API
// протокол, домен, endpoint
// https://jsonplaceholder.typicode.com/todos - endpoint

// https://jsonplaceholder.typicode.com/todos/id - query param

fetch('https://jsonplaceholder.typicode.com/todos/101')
    .then((response) => {
        response.json()
        .then((data) => 
            console.log(data)
        )
    },)