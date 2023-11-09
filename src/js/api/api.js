import axios from 'axios';

const GET_ALL_CATEGORIES = '/category-list';
const GET_TOP_BOOKS = '/top-books';
const GET_CATEGORY_BY_ID = '/category/?category=';
const GET_BOOKS_BY_ID = '/';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books';

//Повертає об'єкт з категоріями
export async function getAllCategories() {
  const response = await axios.get(`${GET_ALL_CATEGORIES}`);
  return response.data;
}

//Повертає топові книжки
export async function getTopBooks() {
  const response = await axios.get(`${GET_TOP_BOOKS}`);
  return response.data;
}

//Повертає колекцію з 20 книжок відповідної категорії category ='Audio Fiction';
export async function getCategoryId(category) {
  const response = await axios.get(`${GET_CATEGORY_BY_ID}${category}`);
  return response.data;
}

//Повертає об'єкт ід книжки id = "643282b1e85766588626a080";
export async function getBooksId(id) {
  const response = await axios.get(`${GET_BOOKS_BY_ID}${id}`);
  return response.data;
}
