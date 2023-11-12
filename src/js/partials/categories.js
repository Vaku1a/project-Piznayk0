// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getAllCategories, getTopBooks, getCategoryId } from "../api/api";
import { createBooksCategoriesCardsMarkup } from "./booklist"
import { refs } from "../refs/refs";

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

getAllCategories()
    .then(categories => {
        refs.categoriesList.innerHTML = createCategoriesListMarkup(categories);        
    })
    .catch((err) => {
        console.error(err);
        // Notify.failure('Oops! Something went wrong! Try reloading the page!');
    });

refs.categoriesList.addEventListener('click', onLoadCategory);

function onLoadCategory(evt) {
    if (evt.target.nodeName !== "LI") {
        return;
    }

    window.scrollTo(0, 0);

    const curr = evt.target;
    curr.parentElement.querySelector('.categories-list-item.active').classList.remove('active');
    curr.classList.add('active');

    const categoryName = evt.target.dataset.categoryName;
        
    if (categoryName === 'All categories') {
        getTopBooks()
            .then(categories => {
                 if (!categories || categories.length === 0) {                      
                     refs.booksPart.innerHTML =
                         `<h1 class="books-part-title">Best Sellers
                        <span class="books-part-title-span"> Books</span>
                        </h1>
                        <div class="book-categories-container">
                        <p class="books-not-found-message">No books were found in this category😒<br> Please, try other categories😉</p>
                        <img
                        class="books-not-found-img"
                        srcset="./img/empty-bin@1x.png 1x, ./img/empty-bin@2x.png 2x"
                        src="./img/empty-bin@1x.png"
                        alt="Books not found"
                        height="241"
                        width="332"
                        />
                        </div>`;
                     return;
                }    
            
                refs.booksPart.innerHTML =
                    `<h1 class="books-part-title">Best Sellers
                <span class="books-part-title-span"> Books</span>
                </h1>
                <div class="book-categories-container">
                ${createBooksCategoriesCardsMarkup(categories)}
                </div>`;                
            }
            )
            .catch((err) => {
                console.error(err);
                // Notify.failure('Oops! Something went wrong! Try reloading the page!');
            });
        return;
    }     
           
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
            // Notify.failure('Oops! Something went wrong! Try reloading the page!');
        });          
};

function createCategoriesListMarkup(categories) {
    const result = categories.map(
        ({ list_name }) =>
            `<li class="categories-list-item" data-category-name="${list_name}">${list_name}</li>`
    ).sort((a,b) => a.localeCompare(b));    
    result.unshift(`<li class="categories-list-item active" data-category-name="All categories">All categories</li>`);
    return result.join('');
};

function createBooksCaregoryTitle(categoryName) {
    const categoryNameArr = categoryName.split(' ');
    const categoryTitleSpan = categoryNameArr.pop();
    const mainCategoryTitlePart = categoryNameArr.join(' ');
    return `<h1 class="books-part-title">${mainCategoryTitlePart} <span class="books-part-title-span">${categoryTitleSpan}</span></h1>`
};

function createBooksInCategoryMarkup(books) {
    return books.map(({ _id, book_image, author, title }) =>
            `<li class="book-cards-list-item">
            <img
            class="book-card-img"
            src="${book_image}"
            alt="${title}"
            data-book-id="${_id}"
            loading="lazy"
            />
            <p class="book-card-title">${title}</p>
            <p class="book-card-author">${author}</p>
        </li>`
        ).join('');
};

export { createBooksCaregoryTitle, createBooksInCategoryMarkup };