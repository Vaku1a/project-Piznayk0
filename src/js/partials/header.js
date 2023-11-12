import { refs } from '../refs/refs';    

/* MOBILE MENU */

refs.openMenuBtn.addEventListener('click', toggleOpenModal);
refs.closeMenuBtn.addEventListener('click', toggleCloseModal);

function toggleOpenModal() {
  if (refs.mobileMenu.classList.contains('is-hidden')) {
    refs.mobileMenu.classList.remove('is-hidden');
      refs.closeMenuBtn.classList.remove('is-hidden');
      refs.openMenuBtn.classList.add('is-hidden')
    return;
  } 
}
function toggleCloseModal() {
    refs.mobileMenu.classList.add('is-hidden');
    refs.closeMenuBtn.classList.add('is-hidden');
    refs.openMenuBtn.classList.remove('is-hidden')
}

/* TOGGLE THEME */

refs.toggleEl.addEventListener('click', toggleClass);

function toggleClass() {
    refs.body.classList.toggle('body-dark-theme');

}