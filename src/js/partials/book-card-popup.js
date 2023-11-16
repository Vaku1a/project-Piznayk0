import { getBooksId } from '../api/api.js';
import {
  getDataFromStorage,
  addDataToStorage,
} from '../utils/localstorage/localStorageApi.js';
import { createMarkupForPopup } from '../utils/markup/markup.js';
import { refs } from '../refs/refs';

// назва ключа для localStorage та змінна що зберігає обєкт поточної книги
const STORAGE_KEY = 'bookList';
// змінна що приймає обєкти поточної книги
let newBook = {};
// змінна, що містить посилання на кнопку додати(видалити) книгу
const btnAddRemove = refs.popupEl.lastElementChild.previousElementSibling;

// слухач для виклику модального вікна
refs.booksPart.addEventListener('click', callPopupWindow);

// слухачі для виклику функції, що закриває модальне вікно
// слухач на кнопку закриття
refs.popupEl.firstElementChild.addEventListener('click', OffFunction);
// слухач на бекдроп
refs.popupEl.parentNode.addEventListener('click', OffFunction);
// Слухач для кнопки ESC
document.addEventListener('keydown', OffFunction);

// Функція закриття модального вікна для бекдропу та кнопки ESC
function OffFunction(evt) {
  if (
    //Перевірка того подія викликана саме на бекдропі
    evt.target === evt.currentTarget ||
    //Перевірка того, що натиснута саме клавіша ESC
    evt.key === 'Escape' ||
    //Перевірка того, що клік відбувся або по кнопці закриття, або по елементу всередені
    evt.target.closest('.popup-btn-close')
  ) {
    // Додавання до бекдропу стилю "is-hidden"
    refs.popupEl.parentNode.classList.add('is-hidden');
    // видалення з боді стилю для заморозки скролу на фоні модального вікна
    refs.body.classList.remove('popup-modal-open');
    // очистка розмітки картки з книгою, щоб попередньо відкрита книга не зявлялася на мить перед новою
    refs.popupEl.firstElementChild.nextElementSibling.innerHTML = '';
  }
}
// Функція виклику модального вікна
function callPopupWindow(evt) {
  // перевічка того чи клік справді ввідбувся по елементу li
  if (!evt.target.closest('.book-cards-list-item')) {
    return;
  }
  // Робить модальне вікно не прихованим
  refs.popupEl.parentNode.classList.toggle('is-hidden');
  // заморожує скрол на бекдроп
  refs.body.classList.toggle('popup-modal-open');
  // отримує id книги
  const id = evt.target.closest('LI').dataset.bookId;
  // Виклик функції, що робить запит на бекенд
  getBooksId(id).then(data => {
    newBook = data;
    // Виклик функції перевірки наявності даної книги в локальному сховищі
    checkingBookList(newBook);
    let markup = createMarkupForPopup(newBook);
    addBookMarkup(markup);
  }).catch((err) => {
    console.error(err);
}).finally(_ => refs.loaderForAllCategories.style.display = 'none'); 
}

// Функція перевірки наявності обєкта книги в локальному сховищі
async function checkingBookList(data) {
  try {
    // отримання масиву обєктів книг, що вже додані до сховища
    const arr = await getDataFromStorage(STORAGE_KEY)
      .then(data => {
        return data ? data : [];
      })
      .catch(error => {
        console.log(error.message);
      });
    // перевірка методом some чи є серед масиву обєктів книг, обєкт з таким же id як id поточної книги
    const status = arr.some(({ _id }) => _id === data._id);
    if (status) {
      // в разі підтвердження: видаляється слухач з функцією дадавання книги
      btnAddRemove.removeEventListener('click', addBookToStorage);
      // додається слухач з функцією видалення книги
      btnAddRemove.addEventListener('click', removeBookFromStorage);
      // змінюється назва кнопки на кнопку видалення
      btnAddRemove.textContent = 'remove from the shopping list';
      // Показується повідомлення про наявність книги в списку доданих
      refs.popupEl.lastElementChild.hidden = false;
    } else {
      // в разі підтвердження: видаляється слухач з функцією видалення книги
      btnAddRemove.removeEventListener('click', removeBookFromStorage);
      // додається слухач з функцією додавання книги
      btnAddRemove.addEventListener('click', addBookToStorage);
      // змінюється назва кнопки на кнопку додавання
      btnAddRemove.textContent = 'Add to shopping list';
      // Приховується повідомлення про наявність книги в списку доданих
      refs.popupEl.lastElementChild.hidden = true;
    }
  } catch (error) {
    console.log(error.message);
  }
}

// Функція додавання обєкта книги до локального сховища
async function addBookToStorage() {
  try {
    // отримання масиву обєктів книг, що вже зберігається в локальному сховищі
    const dataFromStorage = await getDataFromStorage(STORAGE_KEY)
      .then(data => {
        return data ? data : [];
      })
      .catch(error => {
        console.log(error.message);
      });
    // додавання до масиву книг у сховищі, ще одного обєкту з новою книгою
    dataFromStorage.push(newBook);
    // поміщаємо новий маисв, що містить додану книгу в локальне сховище на місце старого масиву
    addDataToStorage(STORAGE_KEY, dataFromStorage);
    // запускаємо функцію перевіри,
    //яка змінить картку поточної книги,
    //на картку книги, яка вже є в списку доданих книг
    checkingBookList(newBook);
  } catch (error) {
    console.log(error.message);
  }
}

// Функція видалення обєкта книги з локального сховища
async function removeBookFromStorage() {
  try {
    // отримання масиву обєктів книг, що вже зберігається в локальному сховищі
    const dataFromStorage = await getDataFromStorage(STORAGE_KEY);
    // створення нового масиву в якому не буде обєкта поточної книги
    const clearStorage = dataFromStorage.filter(
      book => book._id !== newBook._id
    );
    // поміщаємо новий масив, який вже не містить поточної книги в схровище замість старого
    addDataToStorage(STORAGE_KEY, clearStorage);
    // запускаємо функцію перевіри,
    //яка змінить картку поточної книги,
    //на картку книги, якої ще немає в списку доданих книг
    checkingBookList(newBook);
  } catch (error) {
    console.log(error.message);
  }
}
