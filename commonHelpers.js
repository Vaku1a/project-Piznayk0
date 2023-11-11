import{g as n,a as i,b as k}from"./assets/api-ff1110d2.js";import"./assets/vendor-313c7975.js";const l="bookID";function g(e){try{const o=localStorage.getItem(e);return o===null?void 0:JSON.parse(o)}catch(o){console.error("Get state error: ",o.message)}}g(l);console.log(g(l));const a={body:document.querySelector("body"),categoriesList:document.querySelector(".categories-list"),booksPart:document.querySelector(".books-part"),booksCaregoriesContainer:document.querySelector(".book-categories-container")};n().then(e=>{a.booksCaregoriesContainer.insertAdjacentHTML("beforeend",d(e))}).catch(e=>{console.error(e)});a.booksCaregoriesContainer.addEventListener("click",b);function b(e){if(e.target.nodeName!=="BUTTON")return;window.scrollTo(0,0);const t=e.target.parentElement.querySelector(".book-category-title").textContent;i(t).then(r=>{a.booksPart.innerHTML=`${u(t)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${s(r)}                  
                </ul>                             
            </div>`}).catch(r=>{console.error(r)})}function d(e){return e.map(({list_name:o,books:t})=>`<div class="book-category-container">
                <h2 class="book-category-title">${o}</h2>
                <ul class="book-cards-list">
                ${s(t)}                  
                </ul>
                <button type="button" class="see-more-btn">See more</button>             
            </div>`).join("")}k().then(e=>{a.categoriesList.innerHTML=m(e)}).catch(e=>{console.error(e)});a.categoriesList.addEventListener("click",p);function p(e){if(e.target.nodeName!=="LI")return;window.scrollTo(0,0);const o=e.target;o.parentElement.querySelector(".categories-list-item.active").classList.remove("active"),o.classList.add("active");const t=e.target.dataset.categoryName;if(t==="All categories"){n().then(r=>{a.booksPart.innerHTML=`<h1 class="books-part-title">Best Sellers
                <span class="books-part-title-span"> Books</span>
                </h1>
                <div class="book-categories-container">
                ${d(r)}
                </div>`}).catch(r=>{console.error(r)});return}i(t).then(r=>{console.log(r),a.booksPart.innerHTML=`${u(t)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${s(r)}                  
                </ul>                             
            </div>`}).catch(r=>{console.error(r)})}function m(e){const o=e.map(({list_name:t})=>`<li class="categories-list-item" data-category-name="${t}">${t}</li>`).sort((t,r)=>t.localeCompare(r));return o.unshift('<li class="categories-list-item active" data-category-name="All categories">All categories</li>'),o.join("")}function u(e){const o=e.split(" "),t=o.pop();return`<h1 class="books-part-title">${o.join(" ")} <span class="books-part-title-span">${t}</span></h1>`}function s(e){return e.map(({_id:o,book_image:t,author:r,title:c})=>`<li class="book-cards-list-item">
            <img
            class="book-card-img"
            src="${t}"
            alt="${c}"
            data-book-id="${o}"
            loading="lazy"
            />
            <p class="book-card-title">${c}</p>
            <p class="book-card-author">${r}</p>
        </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
