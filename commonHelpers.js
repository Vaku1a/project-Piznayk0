import{g as v,r as t,a as L,s as y,b as $,c as C,d as S}from"./assets/sign-in-0db434d3.js";import"./assets/vendor-27c5a77b.js";async function g(o){const e=await localStorage.getItem(o);return await JSON.parse(e)}async function E(o,e){try{await localStorage.setItem(o,JSON.stringify(e))}catch(s){console.log(s.message)}}v().then(o=>{if(t.loaderForAllCategories.style.display="block",o.length===0){t.booksPart.insertAdjacentHTML("afterbegin",`${p}`);return}t.booksPart.insertAdjacentHTML("beforeend",`<h2 class="books-part-title">Best Sellers
                <span class="books-part-title-span"> Books</span>
            </h2>
            <div class="book-categories-container">
            ${T(o)}
            </div>`)}).catch(o=>{console.error(o)}).finally(o=>t.loaderForAllCategories.style.display="none");t.booksPart.addEventListener("click",A);function A(o){if(t.loaderForAllCategories.style.display="block",o.target.nodeName!=="BUTTON")return;window.scrollTo(0,0);const s=o.target.parentElement.querySelector(".book-category-title").textContent,a=[...document.querySelectorAll(".categories-list-item")];a.find(r=>{r.classList.contains("active")&&r.classList.remove("active")}),a.find(r=>{r.textContent===s&&(r.classList.add("active"),console.log(a.find(l=>l.textContent===s)))}),L(s).then(r=>{if(r.length===0){t.booksPart.innerHTML=`${d(s)}
                <div class="book-category-wrapper">
                ${p}                                
                </div>`;return}t.booksPart.innerHTML=`${d(s)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${u(r)}                  
                </ul>                             
            </div>`,t.booksPart.querySelectorAll(".book-cards-list-item").forEach(l=>l.style.display="block")}).catch(r=>{console.error(r)}).finally(r=>t.loaderForAllCategories.style.display="none")}function T(o){return o.map(({list_name:e,books:s})=>`<div class="book-category-container">
                <h3 class="book-category-title">${e}</h3>
                <ul class="book-cards-list">
                ${u(s)}                  
                </ul>
                <button type="button" class="see-more-btn">See more</button>             
            </div>`).join("")}const p=`
<div class="books-not-found-wrapper">
<p class="books-not-found-message">No books found😒<br> Try other categories😉</p>
<img
class="books-not-found-img"
srcset="${y} 1x, ${$} 2x"
src="${y}"
alt="Books not found"
height="241"
width="332"
/>
</div>`;C().then(o=>{t.loaderForAllCategories.style.display="block",t.categoriesList.innerHTML=B(o)}).catch(o=>{console.error(o)});t.categoriesList.addEventListener("click",w);function w(o){if(t.loaderForAllCategories.style.display="block",o.target.nodeName!=="LI")return;const e=o.target;if(e.classList.contains("active")){console.log("Repeat click on acrive category - No GET request - Just return");return}window.scrollTo(0,0),e.parentElement.querySelector(".categories-list-item.active").classList.remove("active"),e.classList.add("active");const s=o.target.dataset.categoryName;if(s==="All categories"){v().then(a=>{if(t.loaderForAllCategories.style.display="block",a.length===0){t.booksPart.innerHTML=`<h2 class="books-part-title">Best Sellers
                        <span class="books-part-title-span"> Books</span>
                        </h2>
                        <div class="book-categories-container">
                        ${p}
                        </div>`;return}t.booksPart.innerHTML=`<h2 class="books-part-title">Best Sellers
                    <span class="books-part-title-span"> Books</span>
                    </h2>
                    <div class="book-categories-container">
                    ${T(a)}
                    </div>`}).catch(a=>{console.error(a)}).finally(a=>t.loaderForAllCategories.style.display="none");return}L(s).then(a=>{if(t.loaderForAllCategories.style.display="none",a.length===0){t.booksPart.innerHTML=`${d(s)}
                    <div class="book-category-wrapper">
                    ${p}                                
                    </div>`;return}t.booksPart.innerHTML=`${d(s)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${u(a)}                  
                </ul>                             
            </div>`,t.booksPart.querySelectorAll(".book-cards-list-item").forEach(r=>r.style.display="block")}).catch(a=>{console.error(a)}).finally(a=>t.loaderForAllCategories.style.display="none")}function B(o){const e=o.map(({list_name:s})=>`<li class="categories-list-item" data-category-name="${s}">${s}</li>`).sort((s,a)=>s.localeCompare(a));return e.unshift('<li class="categories-list-item active" data-category-name="All categories">All categories</li>'),e.join("")}function d(o){const e=o.split(" ");if(e.includes("and")){const r=e.indexOf("and"),l=e.slice(0,r+1).join(" "),b=e.slice(r+1).join(" ");return`<h2 class="books-part-title">${l} <span class="books-part-title-span">${b}</span></h2>`}if(e.length>3){const r=e.slice(0,e.length/2).join(" "),l=e.slice(e.length/2).join(" ");return`<h2 class="books-part-title">${r} <span class="books-part-title-span">${l}</span></h2>`}const s=e.pop();return`<h2 class="books-part-title">${e.join(" ")} <span class="books-part-title-span">${s}</span></h2>`}function u(o){return o.map(({_id:e,book_image:s,author:a,title:r})=>`<li class="book-cards-list-item" data-book-id="${e}">
            <img
            class="book-card-img"
            src="${s}"
            alt="${r}"            
            loading="lazy"
            />
            <div class="book-card-hover">
                <p>quick view</p>
            </div>
            <p class="book-card-title">${r}</p>
            <p class="book-card-author">${a}</p>
        </li>`).join("")}function P({book_image:o,title:e,author:s,description:a,buy_links:[r,l]}){return`<img src="${o}" class="popup-image" />
            <div class ="info-book">
            <h2 class="popup-book-title">${e}</h2>
            <p class="popup-book-author">${s}</p>
            <p class="popup-book-description">${a}</p>
              <div class="popup-links">
                <a href="${r.url}" target="_blank">
                  <img class="popup-link-img" src="./img/modal-shop/amazon.png" alt="link to amazon" />
                </a>
                <a href="${l}" target="_blank">
                  <img class="popup-link-img" src="./img/modal-shop/apple-books.png" alt="link to apple books" />
                </a>
              </div>
            </div>
            `}const c="bookList";let n={};const i=t.popupEl.lastElementChild.previousElementSibling;t.booksPart.addEventListener("click",F);t.popupEl.firstElementChild.addEventListener("click",k);t.popupEl.parentNode.addEventListener("click",k);document.addEventListener("keydown",k);function k(o){(o.target===o.currentTarget||o.key==="Escape"||o.target.closest(".popup-btn-close"))&&(t.popupEl.parentNode.classList.add("is-hidden"),t.body.classList.remove("popup-modal-open"),t.popupEl.firstElementChild.nextElementSibling.innerHTML="")}function F(o){if(!o.target.closest(".book-cards-list-item"))return;t.popupEl.parentNode.classList.toggle("is-hidden"),t.body.classList.toggle("popup-modal-open");const e=o.target.closest("LI").dataset.bookId;S(e).then(s=>{n=s,m(n);let a=P(n);t.popupEl.firstElementChild.nextElementSibling.innerHTML=a}).catch(s=>{console.error(s)}).finally(s=>t.loaderForAllCategories.style.display="none")}async function m(o){try{(await g(c).then(a=>a||[]).catch(a=>{console.log(a.message)})).some(({_id:a})=>a===o._id)?(i.removeEventListener("click",h),i.addEventListener("click",f),i.textContent="remove from the shopping list",t.popupEl.lastElementChild.hidden=!1):(i.removeEventListener("click",f),i.addEventListener("click",h),i.textContent="Add to shopping list",t.popupEl.lastElementChild.hidden=!0)}catch(e){console.log(e.message)}}async function h(){try{const o=await g(c).then(e=>e||[]).catch(e=>{console.log(e.message)});o.push(n),E(c,o),m(n)}catch(o){console.log(o.message)}}async function f(){try{const e=(await g(c)).filter(s=>s._id!==n._id);E(c,e),m(n)}catch(o){console.log(o.message)}}window.onscroll=()=>{M()};function M(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("back-to-up").classList.remove("is-hidden"):document.getElementById("back-to-up").classList.add("is-hidden")}(()=>{function o(){window.scrollTo({top:0,behavior:"smooth"})}document.querySelector("#back-to-up").addEventListener("click",o)})();
//# sourceMappingURL=commonHelpers.js.map
