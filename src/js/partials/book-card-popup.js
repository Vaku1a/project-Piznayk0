import { getBooksId } from '../api/api.js';
import { refs } from '../refs/refs';

const popupBookCardEl = document.querySelector('.popup-create-markup');

const STORAGE_KEY = 'bookList';
let newBook = {};

refs.booksCaregoriesContainer.addEventListener('click', callPopupWindow);
popupBookCardEl.previousElementSibling.addEventListener('click', onOff);
popupBookCardEl.parentNode.parentNode.addEventListener('click', onOff);
document.addEventListener('keydown', onOff);

function onOff(evt) {
  if (evt.target === evt.currentTarget || evt.key === 'Escape') {
    popupBookCardEl.parentNode.parentNode.classList.toggle('is-hidden');
    refs.body.classList.toggle('modal-open');
  }
}
function callPopupWindow(evt) {
  evt.preventDefault();
  popupBookCardEl.parentNode.parentNode.classList.toggle('is-hidden');
  refs.body.classList.toggle('modal-open');
  getBooksId(evt.target.dataset.bookId).then(data => {
    newBook = data;
    checkingBookList(newBook);
    let markup = createMarkup(newBook);
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
      popupBookCardEl.nextElementSibling.removeEventListener(
        'click',
        addBookToStorage
      );
      popupBookCardEl.nextElementSibling.addEventListener(
        'click',
        removeBookFromStorage
      );
      popupBookCardEl.nextElementSibling.textContent =
        'remove from the shopping list';
      popupBookCardEl.nextElementSibling.nextElementSibling.hidden = false;
    } else {
      popupBookCardEl.nextElementSibling.removeEventListener(
        'click',
        removeBookFromStorage
      );
      popupBookCardEl.nextElementSibling.addEventListener(
        'click',
        addBookToStorage
      );
      popupBookCardEl.nextElementSibling.textContent = 'Add to shopping list';
      popupBookCardEl.nextElementSibling.nextElementSibling.hidden = true;
    }
  } catch (error) {
    console.log(error.message);
  }
}
function addBookMarkup(markup) {
  popupBookCardEl.innerHTML = markup;
}
function createMarkup({
  book_image,
  title,
  author,
  description,
  buy_links: [amazon, apple],
}) {
  const markup = `<img src="${book_image}" class="popup-image" />
            <h2 class="popup-book-title">${title}</h2>
            <p class="popup-book-author">${author}</p>
            <p class="popup-book-description">${description}</p>
            <div class="popup-links">
                <a href="${amazon.url}" target="_blank"><img class="popup-link-img" src="./img/modal-shop/amazon@1x.png"
                        srcset="./img/modal-shop/amazon@1x.png, ./img/modal-shop/amazon@2x.png"
                        alt="link to amazon" /></a>
                <a href="${apple.url}" target="_blank"><img class="popup-link-img"  src="./img/modal-shop/apple-books@1x.png"
                        srcset="./img/modal-shop/apple-books@1x.png, ./img/modal-shop/apple-books@2x.png"
                        alt="link to apple books" /></a>
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
