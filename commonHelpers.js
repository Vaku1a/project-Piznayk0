import{g as d,r as A,a as u,b as k,c as f}from"./assets/sign-in-3895db2b.js";import"./assets/vendor-c1cf73b3.js";d().then(e=>{if(!e||e.length===0){A.booksPart.insertAdjacentHTML("afterbegin",`<div class="books-not-found-wrapper">
                <p class="books-not-found-message">No books were found😒<br> Please, reload the page or try later😉</p>
                <img
                class="books-not-found-img"
                srcset="../img/empty-bin@1x.png 1x, ../img/empty-bin@2x.png 2x"
                src="../img/empty-bin@1x.png"
                alt="Books not found"
                height="241"
                width="332"
                />
                </div>`);return}A.booksPart.insertAdjacentHTML("beforeend",`<h2 class="books-part-title">Best Sellers
                <span class="books-part-title-span"> Books</span>
            </h2>
            <div class="book-categories-container">
            ${b(e)}
            </div>`)}).catch(e=>{console.error(e)});A.booksPart.addEventListener("click",h);function h(e){if(e.target.nodeName!=="BUTTON")return;window.scrollTo(0,0);const s=e.target.parentElement.querySelector(".book-category-title").textContent;u(s).then(t=>{if(!t||t.length===0){A.booksPart.innerHTML=`${r(s)}
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
                </div>`;return}A.booksPart.innerHTML=`${r(s)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${l(t)}                  
                </ul>                             
            </div>`,A.booksPart.querySelectorAll(".book-cards-list-item").forEach(n=>n.style.display="block")}).catch(t=>{console.error(t)})}function b(e){return e.map(({list_name:o,books:s})=>`<div class="book-category-container">
                <h3 class="book-category-title">${o}</h3>
                <ul class="book-cards-list">
                ${l(s)}                  
                </ul>
                <button type="button" class="see-more-btn">See more</button>             
            </div>`).join("")}const p="data:image/png;base64,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",T="data:image/png;base64,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";k().then(e=>{A.categoriesList.innerHTML=M(e)}).catch(e=>{console.error(e)});A.categoriesList.addEventListener("click",x);function x(e){if(e.target.nodeName!=="LI")return;const o=e.target;if(o.classList.contains("active")){console.log("Repeat click on acrive category - No GET request - Just return");return}window.scrollTo(0,0),o.parentElement.querySelector(".categories-list-item.active").classList.remove("active"),o.classList.add("active");const s=e.target.dataset.categoryName;if(s==="All categories"){d().then(t=>{A.booksPart.innerHTML=`<h2 class="books-part-title">Best Sellers
                        <span class="books-part-title-span"> Books</span>
                        </h2>
                        <div class="book-categories-container">
                        <div class="books-not-found-wrapper">
                        <p class="books-not-found-message">No books were found in this category😒<br> Please, try other categories😉</p>
                        <img
                        class="books-not-found-img"
                        srcset="${p} 1x, ${T} 2x"
                        src="${p}"
                        alt="Books not found"
                        height="241"
                        width="332"
                        />
                        </div>
                        </div>`}).catch(t=>{console.error(t)});return}u(s).then(t=>{if(!t||t.length===0){A.booksPart.innerHTML=`${r(s)}
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
                    </div>`;return}A.booksPart.innerHTML=`${r(s)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${l(t)}                  
                </ul>                             
            </div>`,A.booksPart.querySelectorAll(".book-cards-list-item").forEach(n=>n.style.display="block")}).catch(t=>{console.error(t)})}function M(e){const o=e.map(({list_name:s})=>`<li class="categories-list-item" data-category-name="${s}">${s}</li>`).sort((s,t)=>s.localeCompare(t));return o.unshift('<li class="categories-list-item active" data-category-name="All categories">All categories</li>'),o.join("")}function r(e){const o=e.split(" ");if(o.includes("and")){const n=o.indexOf("and"),g=o.slice(0,n+1).join(" "),E=o.slice(n+1).join(" ");return`<h2 class="books-part-title">${g} <span class="books-part-title-span">${E}</span></h2>`}if(o.length>3){const n=o.slice(0,o.length/2).join(" "),g=o.slice(o.length/2).join(" ");return`<h2 class="books-part-title">${n} <span class="books-part-title-span">${g}</span></h2>`}const s=o.pop();return`<h2 class="books-part-title">${o.join(" ")} <span class="books-part-title-span">${s}</span></h2>`}function l(e){return e.map(({_id:o,book_image:s,author:t,title:n})=>`<li class="book-cards-list-item" data-book-id="${o}">
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
            <p class="book-card-author">${t}</p>
        </li>`).join("")}const i="bookList";let a={};A.booksPart.addEventListener("click",L);A.popupEl.firstElementChild.addEventListener("click",v);A.popupEl.parentNode.addEventListener("click",I);document.addEventListener("keydown",I);function I(e){(e.target===e.currentTarget||e.key==="Escape")&&(A.popupEl.parentNode.classList.toggle("is-hidden"),A.body.classList.toggle("popup-modal-open"))}function v(e){e.target.closest(".popup-btn-close")===A.popupEl.firstElementChild&&(A.popupEl.parentNode.classList.toggle("is-hidden"),A.body.classList.toggle("popup-modal-open"))}function L(e){if(e.target===e.currentTarget)return;e.preventDefault(),A.popupEl.parentNode.classList.toggle("is-hidden"),A.body.classList.toggle("popup-modal-open");const o=e.target.closest("LI").dataset.bookId||e.target.parentNode.dataset.bookId;f(o).then(s=>{a=s,C(a);let t=N(a);y(t)})}async function c(e){const o=await localStorage.getItem(e);return await JSON.parse(o)}async function m(e,o){try{await localStorage.setItem(e,JSON.stringify(o))}catch(s){console.log(s.message)}}async function C(e){try{(await c(i).then(t=>t||[]).catch(t=>{console.log(t.message)})).some(({_id:t})=>t===e._id)?(A.popupEl.lastElementChild.previousElementSibling.removeEventListener("click",B),A.popupEl.lastElementChild.previousElementSibling.addEventListener("click",Q),A.popupEl.lastElementChild.previousElementSibling.textContent="remove from the shopping list",A.popupEl.lastElementChild.hidden=!1):(A.popupEl.lastElementChild.previousElementSibling.removeEventListener("click",Q),A.popupEl.lastElementChild.previousElementSibling.addEventListener("click",B),A.popupEl.lastElementChild.previousElementSibling.textContent="Add to shopping list",A.popupEl.lastElementChild.hidden=!0)}catch(o){console.log(o.message)}}function y(e){A.popupEl.firstElementChild.nextElementSibling.innerHTML=e}function N({book_image:e,title:o,author:s,description:t,buy_links:[n,g]}){return`<img src="${e}" class="popup-image" />
            <h2 class="popup-book-title">${o}</h2>
            <p class="popup-book-author">${s}</p>
            <p class="popup-book-description">${t}</p>
            <div class="popup-links">
                <a href="${n.url}" target="_blank"><img class="popup-link-img" src="./img/modal-shop/amazon@1x.png"
                        srcset="./img/modal-shop/amazon@1x.png, ./img/modal-shop/amazon@2x.png"
                        alt="link to amazon" /></a>
                <a href="${g.url}" target="_blank"><img class="popup-link-img"  src="./img/modal-shop/apple-books@1x.png"
                        srcset="./img/modal-shop/apple-books@1x.png, ./img/modal-shop/apple-books@2x.png"
                        alt="link to apple books" /></a>
            </div>
            `}async function B(){try{const e=await c(i).then(o=>o||[]).catch(o=>{console.log(o.message)});e.push(a),m(i,e),C(a)}catch(e){console.log(e.message)}}async function Q(){try{const o=(await c(i)).filter(s=>s._id!==a._id);m(i,o),C(a)}catch(e){console.log(e.message)}}window.onscroll=()=>{H()};function H(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("back-to-up").classList.remove("is-hidden"):document.getElementById("back-to-up").classList.add("is-hidden")}(()=>{function e(){window.scrollTo({top:0,behavior:"smooth"})}document.querySelector("#back-to-up").addEventListener("click",e)})();
//# sourceMappingURL=commonHelpers.js.map
