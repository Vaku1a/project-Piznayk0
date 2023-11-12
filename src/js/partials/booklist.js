import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getTopBooks, getCategoryId } from "../api/api";
import { createBooksCaregoryTitle, createBooksInCategoryMarkup } from "./categories";
import { refs } from "../refs/refs";

Notify.init({
    width: '300px',
    position: 'center-top',
    fontSize: '16px',
    fontFamily: 'DM Sans',    
    timeout: 3000,
    failure: {
        notiflixIconColor: '#111',
        background: '#4f2ee8',
        textColor: '#fff',
    }
});

getTopBooks()
    .then(categories => {        
        if (!categories || categories.length === 0) {
            refs.booksCaregoriesContainer.insertAdjacentHTML('afterbegin',
                `<p class="books-not-found-message">No books were found in this category😒<br> Please, try other categories😉</p>
                <img
                class="books-not-found-img"
                srcset="../img/empty-bin@1x.png 1x, ../img/empty-bin@2x.png 2x"
                src="../img/empty-bin@1x.png"
                alt="Books not found"
                height="241"
                width="332"
                />`
            );
            return;
        }
        
        refs.booksCaregoriesContainer.insertAdjacentHTML('beforeend', createBooksCategoriesCardsMarkup(categories));        
    }
    )
    .catch((err) => {
        console.error(err);
        Notify.failure('Oops! Something went wrong! Try reloading the page!');
    });

refs.booksCaregoriesContainer.addEventListener('click', onSeeMoreBtn);

function onSeeMoreBtn(evt) {
    if (evt.target.nodeName !== "BUTTON") {
        return;
    }

    window.scrollTo(0, 0);

    const btn = evt.target;
    const categoryName = btn.parentElement.querySelector('.book-category-title').textContent;
    
    getCategoryId(categoryName)
        .then(books => {
            if (!books || books.length === 0) {
                refs.booksPart.innerHTML = 
                `${createBooksCaregoryTitle(categoryName)}
                <div class="book-category-wrapper">
                <p class="books-not-found-message">No books were found in this category😒<br> Please, try other categories😉</p>
                <img
                class="books-not-found-img"
                srcset="./img/empty-bin@1x.png 1x, ./img/empty-bin@2x.png 2x"
                src="./img/empty-bin@1x.png"
                alt="Books not found"
                height="241"
                width="332"
                />                                
                </div>`
                return;
            }
            refs.booksPart.innerHTML = 
            `${createBooksCaregoryTitle(categoryName)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${createBooksInCategoryMarkup(books)}                  
                </ul>                             
            </div>`
            
            refs.booksPart.querySelectorAll('.book-cards-list-item').forEach((item) => item.style.display = 'block');            
        })
        .catch((err) => {
            console.error(err);
            Notify.failure('Oops! Something went wrong! Try reloading the page!');
        });  
}

function createBooksCategoriesCardsMarkup(categories) {
    return categories.map(({ list_name, books }) => {              
        return `<div class="book-category-container">
                <h2 class="book-category-title">${list_name}</h2>
                <ul class="book-cards-list">
                ${createBooksInCategoryMarkup(books)}                  
                </ul>
                <button type="button" class="see-more-btn">See more</button>             
            </div>`
    }).join('');
};

export { createBooksCategoriesCardsMarkup };
