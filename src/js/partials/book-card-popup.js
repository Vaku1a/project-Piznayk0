import { getBooksId } from '../api/api.js';
console.log('hELLO wORLD!');
const popupBookCardEl = document.querySelector('.popup-create-markup');
const popupBtnAddRemoveEl = document.querySelector('.popup-btn-add-remove');
const popupAddMessageEl = document.querySelector('.popup-add-message');
const STORAGE_KEY = 'bookList';
let dataFromStorage = getDataFromStorage(STORAGE_KEY)
  .then(data => {
    return data ? data : [];
  })
  .catch(error => {
    console.log(error.message);
  });
let newBook = {};

popupAddMessageEl.hidden = true;
popupBtnAddRemoveEl.addEventListener('click', addBookToStorage);
popupBtnAddRemoveEl.addEventListener('click', removeBookFromStorage);

async function getDataFromStorage(key) {
  const response = await localStorage.getItem(key);
  const data = await JSON.parse(response);
  return data;
}
// getDataFromStorage(STORAGE_KEY).then(a => {
//   console.log(a);
//   return data ? JSON.parse(data) : [];
// }).catch ((error) => {
//   console.log(error.message);
//  })

// function getDataFromStorage(key) {
//   try {
//     let data = localStorage.getItem(STORAGE_KEY);
//     return data ? JSON.parse(data) : [];
//   } catch (error) {
//     console.log(error.message);
//   }
// }
function checkingBookList(data) {
  let arr = [];
  dataFromStorage.then(res => {
    arr = res;
  });
  try {
    const bookId = data._id;
    let status = true;
    status = arr.some(({ _id }) => _id === bookId);
    if (status) {
      popupBtnAddRemoveEl.removeEventListener('click', addBookToStorage);
      popupBtnAddRemoveEl.textContent = 'remove from the shopping list';
      popupAddMessageEl.hidden = false;
    } else {
      popupBtnAddRemoveEl.removeEventListener('click', removeBookFromStorage);
      popupBtnAddRemoveEl.textContent = 'Add to shopping list';
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

function addBookToStorage() {
  let arr = [];
  dataFromStorage.then(res => {
    arr = res;
  });
  console.log(arr);
  arr.push(newBook);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
  location.reload();
}
function removeBookFromStorage() {
  const clearStorage = dataFromStorage.filter(book => {
    book._id !== newBook._id;
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(clearStorage));
  location.reload();
}

getBooksId('643282b1e85766588626a0dc').then(data => {
  newBook = data;
  checkingBookList(newBook);
  let markup = createMarkup(newBook);
  addBookMarkup(markup);
});
