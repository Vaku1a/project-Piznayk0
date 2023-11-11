import{g as n,a as i,b as d}from"./assets/api-ff1110d2.js";import"./assets/vendor-313c7975.js";const a={body:document.querySelector("body"),categoriesList:document.querySelector(".categories-list"),booksPart:document.querySelector(".books-part"),booksCaregoriesContainer:document.querySelector(".book-categories-container")};n().then(e=>{a.booksCaregoriesContainer.insertAdjacentHTML("beforeend",l(e))}).catch(e=>{console.error(e)});a.booksCaregoriesContainer.addEventListener("click",u);function u(e){if(e.target.nodeName!=="BUTTON")return;window.scrollTo(0,0);const o=e.target.parentElement.querySelector(".book-category-title").textContent;i(o).then(t=>{a.booksPart.innerHTML=`${g(o)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${s(t)}                  
                </ul>                             
            </div>`}).catch(t=>{console.error(t)})}function l(e){return e.map(({list_name:r,books:o})=>`<div class="book-category-container">
                <h2 class="book-category-title">${r}</h2>
                <ul class="book-cards-list">
                ${s(o)}                  
                </ul>
                <button type="button" class="see-more-btn">See more</button>             
            </div>`).join("")}d().then(e=>{a.categoriesList.innerHTML=k(e)}).catch(e=>{console.error(e)});a.categoriesList.addEventListener("click",b);function b(e){if(e.target.nodeName!=="LI")return;window.scrollTo(0,0);const r=e.target;r.parentElement.querySelector(".categories-list-item.active").classList.remove("active"),r.classList.add("active");const o=e.target.dataset.categoryName;if(o==="All categories"){n().then(t=>{a.booksPart.innerHTML=`<h1 class="books-part-title">Best Sellers
                <span class="books-part-title-span"> Books</span>
                </h1>
                <div class="book-categories-container">
                ${l(t)}
                </div>`}).catch(t=>{console.error(t)});return}i(o).then(t=>{console.log(t),a.booksPart.innerHTML=`${g(o)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${s(t)}                  
                </ul>                             
            </div>`}).catch(t=>{console.error(t)})}function k(e){const r=e.map(({list_name:o})=>`<li class="categories-list-item" data-category-name="${o}">${o}</li>`).sort((o,t)=>o.localeCompare(t));return r.unshift('<li class="categories-list-item active" data-category-name="All categories">All categories</li>'),r.join("")}function g(e){const r=e.split(" "),o=r.pop();return`<h1 class="books-part-title">${r.join(" ")} <span class="books-part-title-span">${o}</span></h1>`}function s(e){return e.map(({_id:r,book_image:o,author:t,title:c})=>`<li class="book-cards-list-item">
            <img
            class="book-card-img"
            src="${o}"
            alt="${c}"
            data-book-id="${r}"
            loading="lazy"
            />
            <p class="book-card-title">${c}</p>
            <p class="book-card-author">${t}</p>
        </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
