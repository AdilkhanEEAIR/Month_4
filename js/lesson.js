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