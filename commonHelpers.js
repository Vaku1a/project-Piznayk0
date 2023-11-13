import{g as h,r as a,a as y,b as E,c as x}from"./assets/sign-in-0b001ff7.js";import"./assets/vendor-c1cf73b3.js";h().then(o=>{if(!o||o.length===0){a.booksPart.insertAdjacentHTML("afterbegin",`<div class="books-not-found-wrapper">
                <p class="books-not-found-message">No books were found😒<br> Please, reload the page or try later😉</p>
                <img
                class="books-not-found-img"
                srcset="../img/empty-bin@1x.png 1x, ../img/empty-bin@2x.png 2x"
                src="../img/empty-bin@1x.png"
                alt="Books not found"
                height="241"
                width="332"
                />
                </div>`);return}a.booksPart.insertAdjacentHTML("beforeend",`<h2 class="books-part-title">Best Sellers
                <span class="books-part-title-span"> Books</span>
            </h2>
            <div class="book-categories-container">
            ${f(o)}
            </div>`)}).catch(o=>{console.error(o)});a.booksPart.addEventListener("click",B);function B(o){if(o.target.nodeName!=="BUTTON")return;window.scrollTo(0,0);const s=o.target.parentElement.querySelector(".book-category-title").textContent;y(s).then(e=>{if(!e||e.length===0){a.booksPart.innerHTML=`${c(s)}
                <div class="book-category-wrapper">
                <div class="books-not-found-wrapper">
                <p class="books-not-found-message">No books were found in this category😒<br> Please, try other categories😉</p>
                <img
                class="books-not-found-img"
                srcset="./img/empty-bin@1x.png 1x, ./img/empty-bin@2x.png 2x"
                src="./img/empty-bin@1x.png"
                alt="Books not found"
                height="241"
                width="332"
                />
                </div>                                
                </div>`;return}a.booksPart.innerHTML=`${c(s)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${p(e)}                  
                </ul>                             
            </div>`,a.booksPart.querySelectorAll(".book-cards-list-item").forEach(n=>n.style.display="block")}).catch(e=>{console.error(e)})}function f(o){return o.map(({list_name:t,books:s})=>`<div class="book-category-container">
                <h3 class="book-category-title">${t}</h3>
                <ul class="book-cards-list">
                ${p(s)}                  
                </ul>
                <button type="button" class="see-more-btn">See more</button>             
            </div>`).join("")}E().then(o=>{a.categoriesList.innerHTML=S(o)}).catch(o=>{console.error(o)});a.categoriesList.addEventListener("click",L);function L(o){if(o.target.nodeName!=="LI")return;window.scrollTo(0,0);const t=o.target;t.parentElement.querySelector(".categories-list-item.active").classList.remove("active"),t.classList.add("active");const s=o.target.dataset.categoryName;if(s==="All categories"){h().then(e=>{if(!e||e.length===0){a.booksPart.innerHTML=`<h2 class="books-part-title">Best Sellers
                        <span class="books-part-title-span"> Books</span>
                        </h2>
                        <div class="book-categories-container">
                        <div class="books-not-found-wrapper">
                        <p class="books-not-found-message">No books were found in this category😒<br> Please, try other categories😉</p>
                        <img
                        class="books-not-found-img"
                        srcset="./img/empty-bin@1x.png 1x, ./img/empty-bin@2x.png 2x"
                        src="./img/empty-bin@1x.png"
                        alt="Books not found"
                        height="241"
                        width="332"
                        />
                        </div>
                        </div>`;return}a.booksPart.innerHTML=`<h2 class="books-part-title">Best Sellers
                    <span class="books-part-title-span"> Books</span>
                    </h2>
                    <div class="book-categories-container">
                    ${f(e)}
                    </div>`}).catch(e=>{console.error(e)});return}y(s).then(e=>{if(!e||e.length===0){a.booksPart.innerHTML=`${c(s)}
                    <div class="book-category-wrapper">
                    <div class="books-not-found-wrapper">
                    <p class="books-not-found-message">No books were found in this category😒<br> Please, try other categories😉</p>
                    <img
                    class="books-not-found-img"
                    srcset="./img/empty-bin@1x.png 1x, ./img/empty-bin@2x.png 2x"
                    src="./img/empty-bin@1x.png"
                    alt="Books not found"
                    height="241"
                    width="332"
                    />
                    </div>                                
                    </div>`;return}a.booksPart.innerHTML=`${c(s)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${p(e)}                  
                </ul>                             
            </div>`,a.booksPart.querySelectorAll(".book-cards-list-item").forEach(n=>n.style.display="block")}).catch(e=>{console.error(e)})}function S(o){const t=o.map(({list_name:s})=>`<li class="categories-list-item" data-category-name="${s}">${s}</li>`).sort((s,e)=>s.localeCompare(e));return t.unshift('<li class="categories-list-item active" data-category-name="All categories">All categories</li>'),t.join("")}function c(o){const t=o.split(" ");if(t.includes("and")){const n=t.indexOf("and"),i=t.slice(0,n+1).join(" "),k=t.slice(n+1).join(" ");return`<h2 class="books-part-title">${i} <span class="books-part-title-span">${k}</span></h2>`}if(t.length>3){const n=t.slice(0,t.length/2).join(" "),i=t.slice(t.length/2).join(" ");return`<h2 class="books-part-title">${n} <span class="books-part-title-span">${i}</span></h2>`}const s=t.pop();return`<h2 class="books-part-title">${t.join(" ")} <span class="books-part-title-span">${s}</span></h2>`}function p(o){return o.map(({_id:t,book_image:s,author:e,title:n})=>`<li class="book-cards-list-item" data-book-id="${t}">
            <img
            class="book-card-img"
            src="${s}"
            alt="${n}"            
            loading="lazy"
            />
            <div class="book-card-hover">
                <p>quick view</p>
            </div>
            <p class="book-card-title">${n}</p>
            <p class="book-card-author">${e}</p>
        </li>`).join("")}const l="bookList";let r={};a.booksPart.addEventListener("click",w);a.popupBookCardEl.previousElementSibling.addEventListener("click",d);a.popupBookCardEl.parentNode.parentNode.addEventListener("click",d);document.addEventListener("keydown",d);function d(o){(o.target===o.currentTarget||o.key==="Escape")&&(a.popupBookCardEl.parentNode.parentNode.classList.toggle("is-hidden"),a.body.classList.toggle("popup-modal-open"))}function w(o){if(o.target===o.currentTarget)return;o.preventDefault(),a.popupBookCardEl.parentNode.parentNode.classList.toggle("is-hidden"),a.body.classList.toggle("popup-modal-open");const t=o.target.closest("LI").dataset.bookId||o.target.parentNode.dataset.bookId;x(t).then(s=>{r=s,m(r);let e=C(r);T(e)})}async function g(o){const t=await localStorage.getItem(o);return await JSON.parse(t)}async function v(o,t){try{await localStorage.setItem(o,JSON.stringify(t))}catch(s){console.log(s.message)}}async function m(o){try{(await g(l).then(e=>e||[]).catch(e=>{console.log(e.message)})).some(({_id:e})=>e===o._id)?(a.popupBookCardEl.nextElementSibling.removeEventListener("click",u),a.popupBookCardEl.nextElementSibling.addEventListener("click",b),a.popupBookCardEl.nextElementSibling.textContent="remove from the shopping list",a.popupBookCardEl.nextElementSibling.nextElementSibling.hidden=!1):(a.popupBookCardEl.nextElementSibling.removeEventListener("click",b),a.popupBookCardEl.nextElementSibling.addEventListener("click",u),a.popupBookCardEl.nextElementSibling.textContent="Add to shopping list",a.popupBookCardEl.nextElementSibling.nextElementSibling.hidden=!0)}catch(t){console.log(t.message)}}function T(o){a.popupBookCardEl.innerHTML=o}function C({book_image:o,title:t,author:s,description:e,buy_links:[n,i]}){return`<img src="${o}" class="popup-image" />
            <h2 class="popup-book-title">${t}</h2>
            <p class="popup-book-author">${s}</p>
            <p class="popup-book-description">${e}</p>
            <div class="popup-links">
                <a href="${n.url}" target="_blank"><img class="popup-link-img" src="./img/modal-shop/amazon@1x.png"
                        srcset="./img/modal-shop/amazon@1x.png, ./img/modal-shop/amazon@2x.png"
                        alt="link to amazon" /></a>
                <a href="${i.url}" target="_blank"><img class="popup-link-img"  src="./img/modal-shop/apple-books@1x.png"
                        srcset="./img/modal-shop/apple-books@1x.png, ./img/modal-shop/apple-books@2x.png"
                        alt="link to apple books" /></a>
            </div>
            `}async function u(){try{const o=await g(l).then(t=>t||[]).catch(t=>{console.log(t.message)});o.push(r),v(l,o),m(r)}catch(o){console.log(o.message)}}async function b(){try{const t=(await g(l)).filter(s=>s._id!==r._id);v(l,t),m(r)}catch(o){console.log(o.message)}}window.onscroll=()=>{$()};function $(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("back-to-up").classList.remove("is-hidden"):document.getElementById("back-to-up").classList.add("is-hidden")}(()=>{function o(){window.scrollTo({top:0,behavior:"smooth"})}document.querySelector("#back-to-up").addEventListener("click",o)})();
//# sourceMappingURL=commonHelpers.js.map
