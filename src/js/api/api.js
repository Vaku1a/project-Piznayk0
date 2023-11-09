import axios from 'axios';

const GET_ALL_CATEGORIES = 'books/category-list ';
const GET_TOP_BOOKS = 'books/top-books';
const GET_CATEGORY_BY_ID = 'books/category?category={}';
const GET_BOOKS_BY_ID = 'books/{bookId}';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/';

// Функція отримає усі категорії
export async function GetCategoryList() {}
