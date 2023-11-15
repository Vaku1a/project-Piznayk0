import { getBooksId } from '../api/api.js';
// import { createMarkupForPopup } from '../utils/markup/markup.js';
import { refs } from '../refs/refs';
console.log(createMarkupForPopup);
// імпорт логотипів
import amazonimg from '../../img/modal-shop/amazon.png';
import appleimg from '../../img/modal-shop/apple-books.png';

// назва ключа для localStorage та змінна що зберігає обєкт поточної книги
const STORAGE_KEY = 'bookList';
let newBook = {};

// слухач для виклику модального вікна
refs.booksPart.addEventListener('click', callPopupWindow);

// слухачі для виклику функції, що закриває модальне вікно
refs.popupEl.firstElementChild.addEventListener('click', OffFunctionBtn);
refs.popupEl.parentNode.addEventListener('click', OffFunction);
document.addEventListener('keydown', OffFunction);

// Функція закриття модального вікна для бекдропу та кнопки ESC
function OffFunction(evt) {
  if (evt.target === evt.currentTarget || evt.key === 'Escape') {
    refs.popupEl.parentNode.classList.toggle('is-hidden');
    refs.body.classList.toggle('popup-modal-open');
  }
}
// Функція закриття модального вікна для кнопки
function OffFunctionBtn(evt) {
  if (
    evt.target.closest('.popup-btn-close') === refs.popupEl.firstElementChild
  ) {
    refs.popupEl.parentNode.classList.toggle('is-hidden');
    refs.body.classList.toggle('popup-modal-open');
  }
}

// Функція виклику модального вікна
function callPopupWindow(evt) {
  // перевічка того чи клік справді ввідбувся по елементу li
  if (!evt.target.closest('.book-cards-list-item')) {
    return;
  }
  // evt.preventDefault();

  // Робить модальне вікно не прихованим, заморожує скрол на бекдроп, отримує id книги
  refs.popupEl.parentNode.classList.toggle('is-hidden');
  refs.body.classList.toggle('popup-modal-open');
  const id = evt.target.closest('LI').dataset.bookId;
  // Виклик функції, що робить запит на бекенд
  getBooksId(id).then(data => {
    newBook = data;
    // Виклик функції перевірки наявності даної книги в локальному сховищі
    checkingBookList(newBook);
    // створення розмітки
    // let markup = createMarkupForPopup(newBook);
    let markup = createMarkupForPopup(newBook);
    // Додавання розмітки до ДОМу
    addBookMarkup(markup);
  });
}

async function getDataFromStorage(key) {
  const response = await localStorage.getItem(key);
  const data = await JSON.parse(response);
  return data;
}
async function addDataToStorage(key, value) {
  try {
    await localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error.message);
  }
}

async function checkingBookList(data) {
  try {
    const arr = await getDataFromStorage(STORAGE_KEY)
      .then(data => {
        return data ? data : [];
      })
      .catch(error => {
        console.log(error.message);
      });
    const status = arr.some(({ _id }) => _id === data._id);
    if (status) {
      refs.popupEl.lastElementChild.previousElementSibling.removeEventListener(
        'click',
        addBookToStorage
      );
      refs.popupEl.lastElementChild.previousElementSibling.addEventListener(
        'click',
        removeBookFromStorage
      );
      refs.popupEl.lastElementChild.previousElementSibling.textContent =
        'remove from the shopping list';
      refs.popupEl.lastElementChild.hidden = false;
    } else {
      refs.popupEl.lastElementChild.previousElementSibling.removeEventListener(
        'click',
        removeBookFromStorage
      );
      refs.popupEl.lastElementChild.previousElementSibling.addEventListener(
        'click',
        addBookToStorage
      );
      refs.popupEl.lastElementChild.previousElementSibling.textContent =
        'Add to shopping list';
      refs.popupEl.lastElementChild.hidden = true;
    }
  } catch (error) {
    console.log(error.message);
  }
}

function addBookMarkup(markup) {
  refs.popupEl.firstElementChild.nextElementSibling.innerHTML = markup;
}
function createMarkupForPopup({
  book_image,
  title,
  author,
  description,
  buy_links: [amazon, apple],
}) {
  const markup = `<img src="${book_image}" class="popup-image" />
            <div class ="info-book">
            <h2 class="popup-book-title">${title}</h2>
            <p class="popup-book-author">${author}</p>
            <p class="popup-book-description">${description}</p>
              <div class="popup-links">
                <a href="${amazon.url}" target="_blank">
                  <img class="popup-link-img" src="${amazonimg}" alt="link to amazon" />
                </a>
                <a href="${apple.url}" target="_blank">
                  <img class="popup-link-img" src="${appleimg}" alt="link to apple books" />
                </a>
              </div>
            </div>
            `;

  return markup;
}
async function addBookToStorage() {
  try {
    const dataFromStorage = await getDataFromStorage(STORAGE_KEY)
      .then(data => {
        return data ? data : [];
      })
      .catch(error => {
        console.log(error.message);
      });
    dataFromStorage.push(newBook);
    addDataToStorage(STORAGE_KEY, dataFromStorage);
    checkingBookList(newBook);
  } catch (error) {
    console.log(error.message);
  }
}

async function removeBookFromStorage() {
  try {
    const dataFromStorage = await getDataFromStorage(STORAGE_KEY);

    const clearStorage = dataFromStorage.filter(
      book => book._id !== newBook._id
    );
    addDataToStorage(STORAGE_KEY, clearStorage);
    checkingBookList(newBook);
  } catch (error) {
    console.log(error.message);
  }
}
