// MODAL
const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector("#btn-get");
const closeModalBtn = document.querySelector(".modal_close");
const openModal = () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Блокируем прокрутку страницы
}


// Спецсимволы HTML
const closeModal = () => {
    modal.style.display = "none";
    document.body.style.overflow = ""; 
}
openModalBtn.onclick = openModal;
// openModalBtn.addEventListener("click", openModal);
closeModalBtn.onclick = closeModal;
modal.onclick = (event) => {
    if(event.target === modal) {
        closeModal();
    }
}



// ДОМАШНЕЕ ЗАДАНИЕ 3
// 2) Модальное окно в конце 
function scrollModal(){
    if(innerHeight + scrollY >= document.body.scrollHeight -1){
        openModal();
        removeEventListener('scroll', scrollModal);
    }
}
addEventListener('scroll', scrollModal);

// 3) Модально окно через 10 секунд
const afterModal = setTimeout(() => {
    openModal();    
}, 10000);