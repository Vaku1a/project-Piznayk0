window.onscroll = () => {
    toggleTopButton();
}


function toggleTopButton() {
    if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) {
        document.getElementById('back-to-up').classList.remove('is-hidden');
    } else {
        document.getElementById('back-to-up').classList.add('is-hidden');
    }
}

(() => {
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const toUp = document.querySelector('#back-to-up');
    toUp.addEventListener('click', scrollToTop);
    
})();