const phoneInput = document.querySelector('#phone_input');
const phoneButton = document.querySelector('#phone_button');
const phoneResult = document.querySelector('#phone_result');

const regExpression = /\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}/
phoneButton.onclick = () => {
    if(regExpression.test(phoneInput.value)){
        phoneResult.innerHTML = 'OK!'
        phoneResult.style.color = 'green';
    } else{
        phoneResult.innerHTML = 'NOT OK!'
        phoneResult.style.color = 'red';
    }
}

// Lesson 3
// TAB SLIDER

const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items');

let currentIndex = 0;

const hideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = 'none';
    });
    tabs.forEach((tab) => {
        tab.classList.remove('tab_content_item_active');
    });
}

const showTabContent = (index = 0) => {
    tabContentBlocks[index].style.display = 'block';
    tabs[index].classList.add('tab_content_item_active');
    
}



hideTabContent();
showTabContent();

tabsParent.onclick = (event => {
    if(event.target.classList.contains('tab_content_item')){
        tabs.forEach((tab, tabIndex) => {
            if(event.target === tab){
                hideTabContent();
                showTabContent(tabIndex);
            }
        })
    }
})


// ДОМАШНЕЕ ЗАДАНИЕ 3
// 1) Автоматический слайдер каждые 3 секунды
setInterval(() => {
    currentIndex++;
    if (currentIndex >= tabs.length) {
        currentIndex = 0;
    }
    hideTabContent();
    showTabContent(currentIndex);
}, 3000);


// Урок 5
// CONVERTER
const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const eurInput = document.querySelector('#eur');

const converter = (element, targetElement1, targetElement2) => {
    element.oninput = () => {
        const request = new XMLHttpRequest();
        request.open('GET', '../data/converter.json');
        request.setRequestHeader('Content-type', 'application/json');
        request.send();
        request.onload = () => {
        const data = JSON.parse(request.response);
        if(element.id === 'som'){
            targetElement1.value = (element.value/data.usd).toFixed(2);
            targetElement2.value = (element.value/data.eur).toFixed(2);
        }
        if(element.id === 'usd'){
            targetElement1.value = (element.value*data.usd).toFixed(2);
            targetElement2.value = ((element.value * data.usd) / data.eur).toFixed(2);
        }
        if (element.id === 'eur') {
               targetElement1.value = (element.value * data.eur).toFixed(2);
               targetElement2.value = ((element.value * data.eur) / data.usd).toFixed(2);
        }
        if (element.value === '') {
            targetElement1.value = '';
            targetElement2.value = '';
        }
    }
}
}
converter(somInput, usdInput, eurInput);
converter(usdInput, somInput, eurInput);
converter(eurInput, somInput, usdInput);


// somInput.oninput = () => {
//     const request = new XMLHttpRequest();
//     request.open('GET', '../data/converter.json');
//     request.setRequestHeader('Content-type', 'application/json');
//     request.send();
//     request.onload = () => {
//         const data = JSON.parse(request.response);
//         usdInput.value = (somInput.value/data.usd).toFixed(2);
//     }    
// }

// usdInput.oninput = () => {
//     const request = new XMLHttpRequest();
//     request.open('GET', '../data/converter.json');
//     request.setRequestHeader('Content-type', 'application/json');
//     request.send();
//     request.onload = () => {
//         const data = JSON.parse(request.response);
//         somInput.value = (usdInput.value*data.usd).toFixed(2);
//     }    
// }

// DRY - Don't Repeat Yourself
// KISS - Keep It Super Simple


// УРОК 6
// Card switcher
// const cardBlock = document.querySelector('.card');
// const btnNext = document.querySelector('#btn-next');
// const btnPrev = document.querySelector('#btn-prev');
// let cardId = 0;

// btnNext.onclick = () => {
//     cardId++;
//     fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
//         .then(response => response.json())
//         .then(data => {
//             const { id, title, completed } = data;
//             cardBlock.innerHTML = 
//             `
//             <p>${title}</p>
//             <p style="color: ${completed ? 'green' : 'red'}">${completed}</p>
//             <span>${id}</span>
//             `;
//         });
// };


// ДОМАШНЕЕ ЗАДАНИЕ 6
// 1) Карточки
const cardBlock = document.querySelector('.card');
const btnNext = document.querySelector('#btn-next');
const btnPrev = document.querySelector('#btn-prev');
const maxId = 200;
let cardId = 1; 

async function loadCard(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const data = await response.json();
        const { id: dataId, title, completed } = data;
        cardBlock.innerHTML = `
            <p>${title}</p>
            <p style="color: ${completed ? 'green' : 'red'}">${completed}</p>
            <span>${dataId}</span>`
        ;
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

loadCard(cardId);

btnNext.onclick = () => {
    if (cardId === maxId) {
        cardId = 1;
    } else {
        cardId = cardId + 1;
    }
    loadCard(cardId);
};

btnPrev.onclick = () => {
    if (cardId === 1) {
        cardId = maxId;
    } else {
        cardId = cardId - 1;
    }
    loadCard(cardId);
};

// 2) fetch-запрос в консоль
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(answer => answer.json())
//     .then(info => {
//         console.log(info); 
// })

async function fetchPosts() {
    try {
        const answer = await fetch('https://jsonplaceholder.typicode.com/posts');
        const info = await answer.json();
        console.log(info);
    } catch (error) {
        console.error('Ошибка:', error);
    }
}
fetchPosts();


// Weather

// query params 
// q 

//api  e417df62e04d3b1b111abeab19cea714

// http://api.openweathermap.org/data/2.5/weather
const searchInput = document.querySelector('.cityName');
const searchButton = document.querySelector('#search');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');

const BASE_API = 'http://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'e417df62e04d3b1b111abeab19cea714';

searchButton.onclick = async () => {
    if (searchInput.value !== '') {
        try {
            const response = await fetch(`${BASE_API}?q=${searchInput.value}&units=metric&lang=fr&appid=${API_KEY}`);
            const data = await response.json();
            city.innerHTML = data.name ? data.name : 'City not found';
            temp.innerHTML = Math.round(data.main.temp) + '℃';
        } catch (error) {
            console.error('Ошибка при получении данных:', error);
            city.innerHTML = 'Ошибка запроса';
            temp.innerHTML = '';
        }
        searchInput.value = '';
    } else {
        city.innerHTML = 'Please enter a city name';
        temp.innerHTML = '';
    }
};