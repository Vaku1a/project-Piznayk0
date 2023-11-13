import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';


const fromLocalStr = JSON.parse(localStorage.getItem('bookList')) || [];

const itemsPerPage = 4; 

const options = {
  totalItems: fromLocalStr.length,
  itemsPerPage: itemsPerPage,
  visiblePages: 4,
  page: 1,
  
};



const pagination = new Pagination('pagination', options);

const shoppingList = document.querySelector('.shopping-list');

function renderBooks(startIndex, endIndex) {
  const booksToRender = fromLocalStr.slice(startIndex, endIndex);

  const bookCardsHTML = booksToRender
    .map(
      book => `
      <li class="shopping-item" id="${book._id}">
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
          <button class="delete-book">
            <svg class="trash-delete">
              <use href="./img/icons.svg#icon-trash"></use>
            </svg>
          </button>
          <div class="extra-logo">
            <img class="amazon" src="./img/shopping-list/amazon.svg" alt="amazon" />
            <img class="apple" src="./img/shopping-list/apple-books.svg" alt="apple" />
          </div>
        </div>
      </li>

    `
    )
    .join('');

  shoppingList.innerHTML = bookCardsHTML;
}

pagination.on('afterMove', event => {
  const currentPage = event.page;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  renderBooks(startIndex, endIndex);
});


renderBooks(0, itemsPerPage);

shoppingList.addEventListener('click', onClick);

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

function removeFromLocalStorage(id) {
  const items = JSON.parse(localStorage.getItem('bookList')) || fromLocalStr;
  const updatedItems = items.filter(item => item._id !== id);
  localStorage.setItem('bookList', JSON.stringify(updatedItems));
}

if (fromLocalStr.length === 0) {
  const emptyPageHTML = `
  <div class="shopping-wrap-none">
      <div class="container-none-card">
        <h1 class="shopping-title-none">
          Shopping <span class="shopping-title-span-none">List</span>
        </h1>
        <p class="shopping-text-none">
          This page is empty, add some books and proceed to order.
        </p>
        <img
          class="image-big"
          src="../img/shopping-list/empty-bin@2x.png"
          alt="empty list"
        />
        <img
          class="image-small"
          src="../img/shopping-list/empty-bin@1x.png"
          alt="empty list"
        />
      </div>
    </div>
  `;

  shoppingList.innerHTML = emptyPageHTML;
}
