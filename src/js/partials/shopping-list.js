// Список портів
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import jsonData from '../partials/data.json';

// Шукаємо клас shoping-list
const shoppingList = document.querySelector('.shopping-list');

// Кількість карточок на сторінці
const cardsPerPage = 4;

// Розділення даних на сторінки
const paginatedData = [];
for (let i = 0; i < jsonData.length; i += cardsPerPage) {
  paginatedData.push(jsonData.slice(i, i + cardsPerPage));
}

// SVG-код для видалення
const deleteIconSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

// Створюємо розмітку (картку) для кожної книжки
const pagesHTML = paginatedData.map(pageData => {
  return pageData.map(book => `
    <li class="shopping-item">
      <div class="shopping-card">
        <div class="shopping-image">
          <img src="${book.book_image}" alt="${book.title}" class="shopping-image">
        </div>
        <div class="shopping-info">
          <h2 class="book-title">${book.title}</h2>
          <p class="book-category">${book.publisher}</p>
          <p class="book-desc">${book.description}</p>
          <p class="book-author">${book.author}</p>
        </div>
        <button class="delete-book">${deleteIconSVG}</button>
        <div class="extra-logo">
          <img class="amazon" src="./img/amazon.svg" alt="amazon" />
          <img class "apple" src="./img/apple.svg" alt="apple" />
        </div>
      </div>
    </li>
  `).join('');
});

// Створюємо пагінацію
const pagination = new Pagination('pagination', {
  totalItems: paginatedData.length,
  itemsPerPage: 1, // Один елемент на сторінку оскільки ми маємо HTML для кожної сторінки
});

// Функція, яка відображає відповідну сторінку
const updatePage = (pageIndex) => {
  shoppingList.innerHTML = pagesHTML[pageIndex - 1];
  
};

// Встановлюємо обробник подій для зміни сторінки пагінації
pagination.on('afterMove', (event) => {
  updatePage(event.page);
});


// Відображаємо першу сторінку при завантаженні
updatePage(1);

