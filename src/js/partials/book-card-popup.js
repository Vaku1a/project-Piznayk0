console.log('hELLO wORLD!');
const popupBookCardEl = document.querySelector('.popup-create-markup');
const popupBtnAddRemoveEl = document.querySelector('.popup-btn-add-remove');
const popupRemoveMessageEl = document.querySelector('.popup-remove-message');
const STORAGE_KEY = 'bookList';
let dataFromStorage = getDataFromStorage();
let newBook = {};

popupRemoveMessageEl.hidden = true;
popupBtnAddRemoveEl.addEventListener('click', addBookToStorage);
popupBtnAddRemoveEl.addEventListener('click', removeBookFromStorage);

function getDataFromStorage() {
  try {
    let data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error.message);
  }
}
// console.log(dataFromStorage);
function fetchBookInfo(id = '643282b1e85766588626a0dc') {
  return fetch(`https://books-backend.p.goit.global/books/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      // console.log(response);
      // newBook = response.json();
      // console.log(newBook);
      return response.json();
    })
    .catch(error => {
      // Error handling
    });
}
function checkingBookList(data) {
  const bookId = data._id;
  let status = true;
  status = dataFromStorage.some(({ _id }) => _id === bookId);
  if (status) {
    popupBtnAddRemoveEl.removeEventListener('click', addBookToStorage);
    popupBtnAddRemoveEl.textContent = 'remove from the shopping list';
  } else {
    popupBtnAddRemoveEl.removeEventListener('click', removeBookFromStorage);
    popupBtnAddRemoveEl.textContent = 'Add to shopping list';
  }
}

function addBookMarkup(markup) {
  popupBookCardEl.innerHTML = markup;
}

function createMarkup({
  book_image,
  // book_image_width,
  // book_image_height,
  title,
  author,
  description,
}) {
  const markup = `<img src="${book_image}" class="popup-image" />
            <h2 class="popup-book-title">${title}</h2>
            <p class="popup-book-author">${author}</p>
            <p class="popup-book-description">${description}</p>
            `;

  return markup;
}
function addBookToStorage() {
  dataFromStorage.push(newBook);
  console.log(dataFromStorage);
  console.log(typeof dataFromStorage);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataFromStorage));
  location.reload();
}
function removeBookFromStorage() {
  const clearStorage = dataFromStorage.filter(book => {
    book._id !== newBook._id;
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(clearStorage));
  location.reload();
}

fetchBookInfo('643282b1e85766588626a0dc').then(data => {
  newBook = data;
  checkingBookList(newBook);
  let markup = createMarkup(newBook);
  addBookMarkup(markup);
});
