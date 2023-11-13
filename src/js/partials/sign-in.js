 import {refs} from '../refs/refs'
// refs.body
(() => {
    console.log(123);
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
