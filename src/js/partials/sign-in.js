 import {refs} from '../refs/refs'
// refs.body
(() => {
    refs.openModalBtn.forEach(element => element.addEventListener("click", toggleModal));   
    if (refs.closeModalBtn) {
        
        refs.closeModalBtn.addEventListener("click", toggleModal);
    }
    if (refs.openFormBtn) {
        refs.openFormBtn.addEventListener("click", toggleModal)
        
    }

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();

refs.formEl.addEventListener('submit', handlerUserData);

function handlerUserData(evt) {
    evt.preventDefault();
  const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData);
    localStorage.setItem('User-data', JSON.stringify(data));
  refs.formEl.reset();
}

const formMainBtn = refs.formEl.querySelector('.form-main-btn');
const formSingUpBtn = document.querySelector('.sign-up-btn');
const formSingInBtn = document.querySelector('.sign-in-btn');

formSingUpBtn.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('active-btn')) {
    return;
  };
  formMainBtn.textContent = "Sign up";
  formSingInBtn.classList.remove('active-btn');
  evt.target.classList.add('active-btn');
});

formSingInBtn.addEventListener('click', (evt) => {
   if (evt.target.classList.contains('active-btn')) {
    return;
  };
  formMainBtn.textContent = "Sign in";
  formSingUpBtn.classList.remove('active-btn');
  evt.target.classList.add('active-btn');
});