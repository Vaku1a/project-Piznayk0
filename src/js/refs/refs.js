// Імпортуємо refs в свій файл partials js
// Приклад:
// import { refs } from '../refs/refs';
// console.log(refs.body);

export const refs = {
  body: document.querySelector('body'),

  //header
  mobileMenu: document.querySelector('.js-menu-container'),
  openMenuBtn: document.querySelector('.js-open-menu'),
  closeMenuBtn: document.querySelector('.js-close-menu'),
  toggleEl: document.querySelector('.header-toggle-bg'),
  //categories
  categoriesList: document.querySelector('.categories-list'),
  //support

  //book-list
  booksPart: document.querySelector('.books-part'),
  booksCaregoriesContainer: document.querySelector('.book-categories-container'),
  //book-card-popup

  //shopping list
  shoppingList: document.querySelector('.shopping-list'),

  //sign-in
  openModalBtn: document.querySelector("[data-form-open]"),
  closeModalBtn: document.querySelector("[data-form-close]"),
  modal: document.querySelector("[data-form]"),
};
