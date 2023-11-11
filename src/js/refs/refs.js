// Імпортуємо refs в свій файл partials js
// Приклад:
// import { refs } from '../refs/refs';
// console.log(refs.body);

export const refs = {
  body: document.querySelector('body'),

  //header

  //categories
  categoriesList: document.querySelector('.categories-list'),
  //support

  //book-list
  booksPart: document.querySelector('.books-part'),
  booksCaregoriesContainer: document.querySelector('.book-categories-container'),
  //book-card-popup

  //shopping list

  //sign-in
};
