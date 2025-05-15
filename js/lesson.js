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