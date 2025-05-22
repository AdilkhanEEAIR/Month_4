const innerMain = document.querySelector('.inner_main');
const imageURL = 'https://games.24tv.ua/resources/photos/news/202012/1480495.jpg?v=1661266487000';

async function loadCards() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    innerMain.innerHTML = ''; 
    posts.forEach(post => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${imageURL}" alt="Карточка">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;

      innerMain.appendChild(card);
    });
  } catch (error) {
    console.error('Ошибка:', error);
    innerMain.innerHTML = `<p>Не удалось загрузить карточки</p>`;
  }
}
loadCards();