import { getBooksId } from '../../api/api';

const key = 'bookID';
const value = '643282b1e85766588626a080';

export function loadFromLocalStorage(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

// Функція додавання книги
export async function addBookToStorage(bookId) {
  try {
    if (!isBookInLocalsStorage(bookId)) {
      return console.log('the book is already added');
    }
    const book = await getBooksId(value);
    const serializedState = JSON.stringify(book);
    localStorage.setItem(STORAGE_KEY, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

// Функція видалення
export function removeBookFromLocalStorage(key) {
  try {
    const serializedState = localStorage.removeItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

// saveToLocalStorage(key, value);
// saveToLocalStorage(key, value);
// loadFromLocalStorage(key);
// console.log(loadFromLocalStorage(key));
// removeFromLocalStorage(key);

// export async function saveToLocalStorage(key, value) {
//   try {
//     const arr = [];
//     const valueLS = loadFromLocalStorage(key); //underfined ? {}
//     if (!valueLS) {
//       const res = await getBooksId(value); // get bookid = {}
//       arr.push(res);
//       const serializedState = JSON.stringify(valueLS);
//       localStorage.setItem(key, serializedState);
//     } else {
//       valueLS.map(arr => {
//         console.log(arr);
//       });
//     }
//   } catch (error) {
//     console.error('Set state error: ', error.message);
//   }
// }

// export async function saveToLocalStorage(key, value) {
//   try {
//     const res = await getBooksId(value);
//     const serializedState = JSON.stringify(res);
//     localStorage.setItem(key, serializedState);
//   } catch (error) {
//     console.error('Set state error: ', error.message);
//   }
// }

// export function loadFromLocalStorage(key) {
//   try {
//     const serializedState = localStorage.getItem(key);
//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (error) {
//     console.error('Get state error: ', error.message);
//   }
// }
