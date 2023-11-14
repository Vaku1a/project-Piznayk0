// Імпортуємо компонент Pagination та стилі для нього
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import emptyImg_1x from '../../img/shopping-list/empty-bin@1x.png';
import emptyImg_2x from '../../img/shopping-list/empty-bin@2x.png';
import amzonImg from '../../img/shopping-list/amazon.png';
import appleImg from '../../img/shopping-list/apple-book.png';

// Отримуємо дані з локального сховища або створюємо порожній масив
const fromLocalStr = JSON.parse(localStorage.getItem('bookList')) || [];

// Кількість елементів на сторінці
const itemsPerPage = 3;

// Перевіряємо чи потрібно відображати пагінацію
const showPagination = fromLocalStr.length > itemsPerPage;

// Опції для пагінації
const options = {
  totalItems: fromLocalStr.length,
  itemsPerPage: itemsPerPage,
  visiblePages: 4,
  page: 1,
};

// Якщо пагінація потрібна, створюємо об'єкт Pagination
if (showPagination) {
  const pagination = new Pagination('pagination', options);

  // Додаємо обробник події після переміщення по сторінках пагінації
  pagination.on('afterMove', event => {
    const currentPage = event.page;
    console.log(event);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Рендеримо книги для поточної сторінки
    renderBooks(startIndex, endIndex);
  });
}

// Створюємо об'єкт Pagination для випадку, коли пагінація не потрібна (щоб не було помилок)
const pagination = new Pagination('pagination', options);

// Елемент, в якому будуть відображені книги
const shoppingList = document.querySelector('.shopping-list');

// Функція для рендерингу книг для поточної сторінки
function renderBooks(startIndex, endIndex) {
  const booksToRender = fromLocalStr.slice(startIndex, endIndex);

  // Генеруємо HTML для кожної книги
  const bookCardsHTML = booksToRender
    .map(
      book => `
      <li class="shopping-item" id="${book._id}">
        <div class="shopping-card">
          <div class="shopping-image">
            <img src="${book.book_image}" alt="${
        book.title
      }" class="shopping-image">
          </div>
          <div class="shopping-info">
            <h2 class="book-title">${book.title}</h2>
            <p class="book-category">${book.publisher}</p>
            <p class="book-desc">${book.description}</p>
            <p class="book-author">${book.author}</p>
          </div>
          <button class="delete-book">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M6.75 2.25H11.25M2.25 4.5H15.75M14.25 4.5L13.724 12.3895C13.6451 13.5732 13.6057 14.165 13.35 14.6138C13.1249 15.0088 12.7854 15.3265 12.3762 15.5248C11.9115 15.75 11.3183 15.75 10.132 15.75H7.86799C6.68168 15.75 6.08852 15.75 5.62375 15.5248C5.21457 15.3265 4.87507 15.0088 4.64999 14.6138C4.39433 14.165 4.35488 13.5732 4.27596 12.3895L3.75 4.5M7.5 7.875V11.625M10.5 7.875V11.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="extra-logo">
 ${generateBuyLinks(book.buy_links)}
          </div>
        </div>
      </li>

    `
    )
    .join('');

  // Змінюємо стилі для заголовка
  const h1Element = document.querySelector('.shopping-title');
  h1Element.style.paddingBottom = '40px';

  // Вставляємо HTML з книгами в елемент
  shoppingList.innerHTML = bookCardsHTML;
}

// Функція для генерації посилань на придбання книги
function generateBuyLinks(buyLinks) {
  const amazonLink = buyLinks.find(link => link.name === 'Amazon');
  const appleBooksLink = buyLinks.find(link => link.name === 'Apple Books');

  return `
    <a href="${amazonLink.url}" target="_blank">
      <img class="amazon" src="${amzonImg}" alt="amazon" />
    </a>
    <a href="${appleBooksLink.url}" target="_blank">
      <img class="apple" src="${appleImg}" alt="apple" />
    </a>
  `;
}

// Додаємо обробник події після переміщення по сторінках пагінації (дублюємо код)
pagination.on('afterMove', event => {
  const currentPage = event.page;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Рендеримо книги для поточної сторінки
  renderBooks(startIndex, endIndex);
});

// Рендеримо книги для першої сторінки
renderBooks(0, itemsPerPage);

// Додаємо обробник подій для видалення книг
shoppingList.addEventListener('click', onClick);

// Обробник події видалення книги
function onClick(event) {
  if (
    event.target.classList.contains('delete-book') ||
    event.target.classList.contains('trash-delete')
  ) {
    const listItem = event.target.closest('.shopping-item');
    if (listItem) {
      const itemId = listItem.id;
      shoppingList.removeChild(listItem);
      removeFromLocalStorage(itemId);
    }
  }
}

// Функція для видалення книги з локального сховища
function removeFromLocalStorage(id) {
  const items = JSON.parse(localStorage.getItem('bookList')) || fromLocalStr;
  const updatedItems = items.filter(item => item._id !== id);
  localStorage.setItem('bookList', JSON.stringify(updatedItems));
}

// Перевіряємо, чи немає книг або чи не потрібна пагінація
if (fromLocalStr.length === 0 || !showPagination) {
  // Ховаємо елемент пагінації
  const paginationElement = document.querySelector('#pagination');
  paginationElement.style.display = 'none';
}

// Якщо немає книг, показуємо повідомлення про порожню сторінку
if (fromLocalStr.length === 0) {
  // Ховаємо елемент пагінації
  const paginationElement = document.querySelector('#pagination');
  paginationElement.style.display = 'none';

  // Генеруємо HTML для порожньої сторінки
  const emptyPageHTML = `
      <div class="container-none-card">
        <p class="shopping-text-none">
          This page is empty, add some books and proceed to order.
        </p>
        <img
          class="image-big"
          src="${emptyImg_2x}"
          alt="empty list"
        />
        <img
          class="image-small"
          src="${emptyImg_1x}"
          alt="empty list"
        />
      </div>
  `;

  // Змінюємо стилі для заголовка в залежності від ширини вікна
  const h1Element = document.querySelector('.shopping-title');
  function setH1Element() {
    if (window.innerWidth >= 768) {
      h1Element.style.paddingBottom = '140px';
    } else {
      h1Element.style.paddingBottom = '120px';
    }
  }

  // Запускаємо функцію для встановлення стилів
  setH1Element();
  // Слухаємо подію зміни розміру вікна
  window.addEventListener('resize', setH1Element);

  // Вставляємо HTML для порожньої сторінки в елемент
  shoppingList.innerHTML = emptyPageHTML;
}
