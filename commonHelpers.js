import{g as f,r as o,a as v,s as b,b as C,c as $,d as S}from"./assets/sign-in-0db434d3.js";import"./assets/vendor-27c5a77b.js";async function g(e){const t=await localStorage.getItem(e);return await JSON.parse(t)}async function L(e,t){try{await localStorage.setItem(e,JSON.stringify(t))}catch(s){console.log(s.message)}}f().then(e=>{if(o.loaderForAllCategories.style.display="block",e.length===0){o.booksPart.insertAdjacentHTML("afterbegin",`${d}`);return}o.booksPart.insertAdjacentHTML("beforeend",`<h2 class="books-part-title">Best Sellers
                <span class="books-part-title-span"> Books</span>
            </h2>
            <div class="book-categories-container">
            ${E(e)}
            </div>`)}).catch(e=>{console.error(e)}).finally(e=>o.loaderForAllCategories.style.display="none");o.booksPart.addEventListener("click",A);function A(e){if(o.loaderForAllCategories.style.display="block",e.target.nodeName!=="BUTTON")return;window.scrollTo(0,0);const s=e.target.parentElement.querySelector(".book-category-title").textContent,a=[...document.querySelectorAll(".categories-list-item")];a.find(r=>{r.classList.contains("active")&&r.classList.remove("active")}),a.find(r=>{r.textContent===s&&(r.classList.add("active"),console.log(a.find(n=>n.textContent===s)))}),v(s).then(r=>{if(r.length===0){o.booksPart.innerHTML=`${p(s)}
                <div class="book-category-wrapper">
                ${d}                                
                </div>`;return}o.booksPart.innerHTML=`${p(s)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${u(r)}                  
                </ul>                             
            </div>`,o.booksPart.querySelectorAll(".book-cards-list-item").forEach(n=>n.style.display="block")}).catch(r=>{console.error(r)}).finally(r=>o.loaderForAllCategories.style.display="none")}function E(e){return e.map(({list_name:t,books:s})=>`<div class="book-category-container">
                <h3 class="book-category-title">${t}</h3>
                <ul class="book-cards-list">
                ${u(s)}                  
                </ul>
                <button type="button" class="see-more-btn">See more</button>             
            </div>`).join("")}const d=`
<div class="books-not-found-wrapper">
<p class="books-not-found-message">No books found😒<br> Try other categories😉</p>
<img
class="books-not-found-img"
srcset="${b} 1x, ${C} 2x"
src="${b}"
alt="Books not found"
height="241"
width="332"
/>
</div>`;$().then(e=>{o.loaderForAllCategories.style.display="block",o.categoriesList.innerHTML=B(e)}).catch(e=>{console.error(e)});o.categoriesList.addEventListener("click",w);function w(e){if(o.loaderForAllCategories.style.display="block",e.target.nodeName!=="LI")return;const t=e.target;if(t.classList.contains("active")){console.log("Repeat click on acrive category - No GET request - Just return");return}window.scrollTo(0,0),t.parentElement.querySelector(".categories-list-item.active").classList.remove("active"),t.classList.add("active");const s=e.target.dataset.categoryName;if(s==="All categories"){f().then(a=>{if(o.loaderForAllCategories.style.display="block",a.length===0){o.booksPart.innerHTML=`<h2 class="books-part-title">Best Sellers
                        <span class="books-part-title-span"> Books</span>
                        </h2>
                        <div class="book-categories-container">
                        ${d}
                        </div>`;return}o.booksPart.innerHTML=`<h2 class="books-part-title">Best Sellers
                    <span class="books-part-title-span"> Books</span>
                    </h2>
                    <div class="book-categories-container">
                    ${E(a)}
                    </div>`}).catch(a=>{console.error(a)}).finally(a=>o.loaderForAllCategories.style.display="none");return}v(s).then(a=>{if(o.loaderForAllCategories.style.display="none",a.length===0){o.booksPart.innerHTML=`${p(s)}
                    <div class="book-category-wrapper">
                    ${d}                                
                    </div>`;return}o.booksPart.innerHTML=`${p(s)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${u(a)}                  
                </ul>                             
            </div>`,o.booksPart.querySelectorAll(".book-cards-list-item").forEach(r=>r.style.display="block")}).catch(a=>{console.error(a)}).finally(a=>o.loaderForAllCategories.style.display="none")}function B(e){const t=e.map(({list_name:s})=>`<li class="categories-list-item" data-category-name="${s}">${s}</li>`).sort((s,a)=>s.localeCompare(a));return t.unshift('<li class="categories-list-item active" data-category-name="All categories">All categories</li>'),t.join("")}function p(e){const t=e.split(" ");if(t.includes("and")){const r=t.indexOf("and"),n=t.slice(0,r+1).join(" "),T=t.slice(r+1).join(" ");return`<h2 class="books-part-title">${n} <span class="books-part-title-span">${T}</span></h2>`}if(t.length>3){const r=t.slice(0,t.length/2).join(" "),n=t.slice(t.length/2).join(" ");return`<h2 class="books-part-title">${r} <span class="books-part-title-span">${n}</span></h2>`}const s=t.pop();return`<h2 class="books-part-title">${t.join(" ")} <span class="books-part-title-span">${s}</span></h2>`}function u(e){return e.map(({_id:t,book_image:s,author:a,title:r})=>`<li class="book-cards-list-item" data-book-id="${t}">
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
        </li>`).join("")}const c="bookList";let l={};const i=o.popupEl.lastElementChild.previousElementSibling;o.booksPart.addEventListener("click",P);o.popupEl.firstElementChild.addEventListener("click",k);o.popupEl.parentNode.addEventListener("click",k);document.addEventListener("keydown",k);function k(e){(e.target===e.currentTarget||e.key==="Escape"||e.target.closest(".popup-btn-close"))&&(o.popupEl.parentNode.classList.add("is-hidden"),o.body.classList.remove("popup-modal-open"),o.popupEl.firstElementChild.nextElementSibling.innerHTML="")}function P(e){if(!e.target.closest(".book-cards-list-item"))return;o.popupEl.parentNode.classList.toggle("is-hidden"),o.body.classList.toggle("popup-modal-open");const t=e.target.closest("LI").dataset.bookId;S(t).then(s=>{l=s,m(l);let a=createMarkup(l);addBookMarkup(a)}).catch(s=>{console.error(s)}).finally(s=>o.loaderForAllCategories.style.display="none")}async function m(e){try{(await g(c).then(a=>a||[]).catch(a=>{console.log(a.message)})).some(({_id:a})=>a===e._id)?(i.removeEventListener("click",y),i.addEventListener("click",h),i.textContent="remove from the shopping list",o.popupEl.lastElementChild.hidden=!1):(i.removeEventListener("click",h),i.addEventListener("click",y),i.textContent="Add to shopping list",o.popupEl.lastElementChild.hidden=!0)}catch(t){console.log(t.message)}}async function y(){try{const e=await g(c).then(t=>t||[]).catch(t=>{console.log(t.message)});e.push(l),L(c,e),m(l)}catch(e){console.log(e.message)}}async function h(){try{const t=(await g(c)).filter(s=>s._id!==l._id);L(c,t),m(l)}catch(e){console.log(e.message)}}window.onscroll=()=>{F()};function F(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("back-to-up").classList.remove("is-hidden"):document.getElementById("back-to-up").classList.add("is-hidden")}(()=>{function e(){window.scrollTo({top:0,behavior:"smooth"})}document.querySelector("#back-to-up").addEventListener("click",e)})();
//# sourceMappingURL=commonHelpers.js.map
