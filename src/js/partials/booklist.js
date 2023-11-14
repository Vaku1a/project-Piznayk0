// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getTopBooks, getCategoryId } from "../api/api";
import { createBooksCaregoryTitle, createBooksInCategoryMarkup } from "./categories";
import { refs } from "../refs/refs";

import booksNotFound_1x from '../../img/shopping-list/empty-bin@1x.png';
import booksNotFound_2x from '../../img/shopping-list/empty-bin@2x.png';

// Notify.init({
//     width: '300px',
//     position: 'center-top',
//     fontSize: '16px',
//     fontFamily: 'DM Sans',
//     showOnlyTheLastOne: true,
//     clickToClose: true,
//     timeout: 5000,
//     failure: {
//         notiflixIconColor: '#111',
//         background: '#4f2ee8',
//         textColor: '#fff',
//     }
// });

getTopBooks()
    .then(categories => {        
        if (categories.length === 0) {
            refs.booksPart.insertAdjacentHTML('afterbegin',
                `<div class="books-not-found-wrapper">
                <p class="books-not-found-message">No books found😒<br> Try other categories😉</p>
                <img
                class="books-not-found-img"
                srcset="${booksNotFound_1x} 1x, ${booksNotFound_2x} 2x"
                src="${booksNotFound_1x}"
                alt="Books not found"
                height="241"
                width="332"
                />
                </div>`
            );
            return;
        }
        
        refs.booksPart.insertAdjacentHTML('beforeend',
            `<h2 class="books-part-title">Best Sellers
                <span class="books-part-title-span"> Books</span>
            </h2>
            <div class="book-categories-container">
            ${createBooksCategoriesCardsMarkup(categories)}
            </div>`
        );
    }
    )
    .catch((err) => {
        console.error(err);
        // Notify.failure('Oops! Something went wrong! Try reloading the page!');
    });

refs.booksPart.addEventListener('click', onSeeMoreBtn);

function onSeeMoreBtn(evt) {
    if (evt.target.nodeName !== "BUTTON") {
        return;
    }

    window.scrollTo(0, 0);

    const btn = evt.target;
    const categoryName = btn.parentElement.querySelector('.book-category-title').textContent;
    
    getCategoryId(categoryName)
        .then(books => {
            if (books.length === 0) {
                refs.booksPart.innerHTML = 
                `${createBooksCaregoryTitle(categoryName)}
                <div class="book-category-wrapper">
                <div class="books-not-found-wrapper">
                <p class="books-not-found-message">No books found😒<br> Try other categories😉</p>
                <img
                class="books-not-found-img"
                srcset="${booksNotFound_1x} 1x, ${booksNotFound_2x} 2x"
                src="${booksNotFound_1x}"
                alt="Books not found"
                height="241"
                width="332"
                />
                </div>                                
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
            // Notify.failure('Oops! Something went wrong! Try reloading the page!');
        });  
}

function createBooksCategoriesCardsMarkup(categories) {
    return categories.map(({ list_name, books }) => {              
        return `<div class="book-category-container">
                <h3 class="book-category-title">${list_name}</h3>
                <ul class="book-cards-list">
                ${createBooksInCategoryMarkup(books)}                  
                </ul>
                <button type="button" class="see-more-btn">See more</button>             
            </div>`
    }).join('');
};

export { createBooksCategoriesCardsMarkup };