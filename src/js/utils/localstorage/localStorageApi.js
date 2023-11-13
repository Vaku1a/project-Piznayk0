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
