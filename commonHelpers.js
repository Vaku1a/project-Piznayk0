import{g as f,r as e,a as y,b as L,c as T}from"./assets/sign-in-3895db2b.js";import"./assets/vendor-c1cf73b3.js";const r="/project-Piznayk0/assets/empty-bin@1x-a278a77f.png",p="/project-Piznayk0/assets/empty-bin@2x-1268a808.png";f().then(o=>{if(o.length===0){e.booksPart.insertAdjacentHTML("afterbegin",`<div class="books-not-found-wrapper">
                <p class="books-not-found-message">No books found😒<br> Try other categories😉</p>
                <img
                class="books-not-found-img"
                srcset="${r} 1x, ${p} 2x"
                src="${r}"
                alt="Books not found"
                height="241"
                width="332"
                />
                </div>`);return}e.booksPart.insertAdjacentHTML("beforeend",`<h2 class="books-part-title">Best Sellers
                <span class="books-part-title-span"> Books</span>
            </h2>
            <div class="book-categories-container">
            ${E(o)}
            </div>`)}).catch(o=>{console.error(o)});e.booksPart.addEventListener("click",S);function S(o){if(o.target.nodeName!=="BUTTON")return;window.scrollTo(0,0);const a=o.target.parentElement.querySelector(".book-category-title").textContent;y(a).then(s=>{if(s.length===0){e.booksPart.innerHTML=`${d(a)}
                <div class="book-category-wrapper">
                <div class="books-not-found-wrapper">
                <p class="books-not-found-message">No books found😒<br> Try other categories😉</p>
                <img
                class="books-not-found-img"
                srcset="${r} 1x, ${p} 2x"
                src="${r}"
                alt="Books not found"
                height="241"
                width="332"
                />
                </div>                                
                </div>`;return}e.booksPart.innerHTML=`${d(a)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${g(s)}                  
                </ul>                             
            </div>`,e.booksPart.querySelectorAll(".book-cards-list-item").forEach(n=>n.style.display="block")}).catch(s=>{console.error(s)})}function E(o){return o.map(({list_name:t,books:a})=>`<div class="book-category-container">
                <h3 class="book-category-title">${t}</h3>
                <ul class="book-cards-list">
                ${g(a)}                  
                </ul>
                <button type="button" class="see-more-btn">See more</button>             
            </div>`).join("")}L().then(o=>{e.categoriesList.innerHTML=C(o)}).catch(o=>{console.error(o)});e.categoriesList.addEventListener("click",w);function w(o){if(o.target.nodeName!=="LI")return;const t=o.target;if(t.classList.contains("active")){console.log("Repeat click on acrive category - No GET request - Just return");return}window.scrollTo(0,0),t.parentElement.querySelector(".categories-list-item.active").classList.remove("active"),t.classList.add("active");const a=o.target.dataset.categoryName;if(a==="All categories"){f().then(s=>{if(s.length===0){e.booksPart.innerHTML=`<h2 class="books-part-title">Best Sellers
                        <span class="books-part-title-span"> Books</span>
                        </h2>
                        <div class="book-categories-container">
                        <div class="books-not-found-wrapper">
                        <p class="books-not-found-message">No books found😒<br> Try other categories😉</p>
                        <img
                        class="books-not-found-img"
                        srcset="${r} 1x, ${p} 2x"
                        src="${r}"
                        alt="Books not found"
                        height="241"
                        width="332"
                        />
                        </div>
                        </div>`;return}e.booksPart.innerHTML=`<h2 class="books-part-title">Best Sellers
                    <span class="books-part-title-span"> Books</span>
                    </h2>
                    <div class="book-categories-container">
                    ${E(s)}
                    </div>`}).catch(s=>{console.error(s)});return}y(a).then(s=>{if(s.length===0){e.booksPart.innerHTML=`${d(a)}
                    <div class="book-category-wrapper">
                    <div class="books-not-found-wrapper">
                    <p class="books-not-found-message">No books found😒<br> Try other categories😉</p>
                    <img
                    class="books-not-found-img"
                    srcset="${r} 1x, ${p} 2x"
                    src="${r}"
                    alt="Books not found"
                    height="241"
                    width="332"
                    />
                    </div>                                
                    </div>`;return}e.booksPart.innerHTML=`${d(a)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${g(s)}                  
                </ul>                             
            </div>`,e.booksPart.querySelectorAll(".book-cards-list-item").forEach(n=>n.style.display="block")}).catch(s=>{console.error(s)})}function C(o){const t=o.map(({list_name:a})=>`<li class="categories-list-item" data-category-name="${a}">${a}</li>`).sort((a,s)=>a.localeCompare(s));return t.unshift('<li class="categories-list-item active" data-category-name="All categories">All categories</li>'),t.join("")}function d(o){const t=o.split(" ");if(t.includes("and")){const n=t.indexOf("and"),l=t.slice(0,n+1).join(" "),m=t.slice(n+1).join(" ");return`<h2 class="books-part-title">${l} <span class="books-part-title-span">${m}</span></h2>`}if(t.length>3){const n=t.slice(0,t.length/2).join(" "),l=t.slice(t.length/2).join(" ");return`<h2 class="books-part-title">${n} <span class="books-part-title-span">${l}</span></h2>`}const a=t.pop();return`<h2 class="books-part-title">${t.join(" ")} <span class="books-part-title-span">${a}</span></h2>`}function g(o){return o.map(({_id:t,book_image:a,author:s,title:n})=>`<li class="book-cards-list-item" data-book-id="${t}">
            <img
            class="book-card-img"
            src="${a}"
            alt="${n}"            
            loading="lazy"
            />
            <div class="book-card-hover">
                <p>quick view</p>
            </div>
            <p class="book-card-title">${n}</p>
            <p class="book-card-author">${s}</p>
        </li>`).join("")}const c="bookList";let i={};e.booksPart.addEventListener("click",N);e.popupEl.firstElementChild.addEventListener("click",B);e.popupEl.parentNode.addEventListener("click",v);document.addEventListener("keydown",v);function v(o){(o.target===o.currentTarget||o.key==="Escape")&&(e.popupEl.parentNode.classList.toggle("is-hidden"),e.body.classList.toggle("popup-modal-open"))}function B(o){o.target.closest(".popup-btn-close")===e.popupEl.firstElementChild&&(e.popupEl.parentNode.classList.toggle("is-hidden"),e.body.classList.toggle("popup-modal-open"))}function N(o){if(o.target===o.currentTarget)return;o.preventDefault(),e.popupEl.parentNode.classList.toggle("is-hidden"),e.body.classList.toggle("popup-modal-open");const t=o.target.closest("LI").dataset.bookId||o.target.parentNode.dataset.bookId;T(t).then(a=>{i=a,k(i);let s=P(i);x(s)})}async function u(o){const t=await localStorage.getItem(o);return await JSON.parse(t)}async function $(o,t){try{await localStorage.setItem(o,JSON.stringify(t))}catch(a){console.log(a.message)}}async function k(o){try{(await u(c).then(s=>s||[]).catch(s=>{console.log(s.message)})).some(({_id:s})=>s===o._id)?(e.popupEl.lastElementChild.previousElementSibling.removeEventListener("click",b),e.popupEl.lastElementChild.previousElementSibling.addEventListener("click",h),e.popupEl.lastElementChild.previousElementSibling.textContent="remove from the shopping list",e.popupEl.lastElementChild.hidden=!1):(e.popupEl.lastElementChild.previousElementSibling.removeEventListener("click",h),e.popupEl.lastElementChild.previousElementSibling.addEventListener("click",b),e.popupEl.lastElementChild.previousElementSibling.textContent="Add to shopping list",e.popupEl.lastElementChild.hidden=!0)}catch(t){console.log(t.message)}}function x(o){e.popupEl.firstElementChild.nextElementSibling.innerHTML=o}function P({book_image:o,title:t,author:a,description:s,buy_links:[n,l]}){return`<img src="${o}" class="popup-image" />
            <div class ="info-book">
            <h2 class="popup-book-title">${t}</h2>
            <p class="popup-book-author">${a}</p>
            <p class="popup-book-description">${s}</p>
              <div class="popup-links">
                <a href="${n="../../img/modal-shop/amazon.png"}" target="_blank">
                  <img class="popup-link-img" src="${n}" alt="link to amazon" />
                </a>
                <a href="${l="../../img/modal-shop/apple-books.png"}" target="_blank">
                  <img class="popup-link-img" src="${l}" alt="link to apple books" />
                </a>
              </div>
            </div>
            `}async function b(){try{const o=await u(c).then(t=>t||[]).catch(t=>{console.log(t.message)});o.push(i),$(c,o),k(i)}catch(o){console.log(o.message)}}async function h(){try{const t=(await u(c)).filter(a=>a._id!==i._id);$(c,t),k(i)}catch(o){console.log(o.message)}}window.onscroll=()=>{M()};function M(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("back-to-up").classList.remove("is-hidden"):document.getElementById("back-to-up").classList.add("is-hidden")}(()=>{function o(){window.scrollTo({top:0,behavior:"smooth"})}document.querySelector("#back-to-up").addEventListener("click",o)})();
//# sourceMappingURL=commonHelpers.js.map
