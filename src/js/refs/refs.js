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

  //support

  //book-list

  //book-card-popup

  //shopping list

  //sign-in
};
