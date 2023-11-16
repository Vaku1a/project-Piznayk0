import{g as L,r as a,a as E,s as f,b as S,c as w,d as C}from"./assets/sign-in-a048ea29.js";import{i as B,g as A,a as P,c as I}from"./assets/vendor-63749fbb.js";async function g(t){const e=await localStorage.getItem(t);return await JSON.parse(e)}async function T(t,e){try{await localStorage.setItem(t,JSON.stringify(e))}catch(o){console.log(o.message)}}L().then(t=>{if(t.length===0){a.booksPart.insertAdjacentHTML("afterbegin",`${p}`);return}a.booksPart.insertAdjacentHTML("beforeend",`<h2 class="books-part-title">Best Sellers
                <span class="books-part-title-span"> Books</span>
            </h2>
            <div class="book-categories-container">
            ${$(t)}
            </div>`)}).catch(t=>{console.error(t)});a.booksPart.addEventListener("click",M);function M(t){if(t.target.nodeName!=="BUTTON")return;window.scrollTo(0,0);const o=t.target.parentElement.querySelector(".book-category-title").textContent,s=[...document.querySelectorAll(".categories-list-item")];s.find(n=>{n.classList.contains("active")&&n.classList.remove("active")}),s.find(n=>{n.textContent===o&&(n.classList.add("active"),console.log(s.find(r=>r.textContent===o)))}),E(o).then(n=>{if(n.length===0){a.booksPart.innerHTML=`${d(o)}
                <div class="book-category-wrapper">
                ${p}                                
                </div>`;return}a.booksPart.innerHTML=`${d(o)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${u(n)}                  
                </ul>                             
            </div>`,a.booksPart.querySelectorAll(".book-cards-list-item").forEach(r=>r.style.display="block")}).catch(n=>{console.error(n)})}function $(t){return t.map(({list_name:e,books:o})=>`<div class="book-category-container">
                <h3 class="book-category-title">${e}</h3>
                <ul class="book-cards-list">
                ${u(o)}                  
                </ul>
                <button type="button" class="see-more-btn">See more</button>             
            </div>`).join("")}const p=`
<div class="books-not-found-wrapper">
<p class="books-not-found-message">No books found😒<br> Try other categories😉</p>
<img
class="books-not-found-img"
srcset="${f} 1x, ${S} 2x"
src="${f}"
alt="Books not found"
height="241"
width="332"
/>
</div>`;w().then(t=>{a.categoriesList.innerHTML=j(t)}).catch(t=>{console.error(t)});a.categoriesList.addEventListener("click",N);function N(t){if(t.target.nodeName!=="LI")return;const e=t.target;if(e.classList.contains("active")){console.log("Repeat click on acrive category - No GET request - Just return");return}window.scrollTo(0,0),e.parentElement.querySelector(".categories-list-item.active").classList.remove("active"),e.classList.add("active");const o=t.target.dataset.categoryName;if(o==="All categories"){L().then(s=>{if(s.length===0){a.booksPart.innerHTML=`<h2 class="books-part-title">Best Sellers
                        <span class="books-part-title-span"> Books</span>
                        </h2>
                        <div class="book-categories-container">
                        ${p}
                        </div>`;return}a.booksPart.innerHTML=`<h2 class="books-part-title">Best Sellers
                    <span class="books-part-title-span"> Books</span>
                    </h2>
                    <div class="book-categories-container">
                    ${$(s)}
                    </div>`}).catch(s=>{console.error(s)});return}E(o).then(s=>{if(s.length===0){a.booksPart.innerHTML=`${d(o)}
                    <div class="book-category-wrapper">
                    ${p}                                
                    </div>`;return}a.booksPart.innerHTML=`${d(o)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${u(s)}                  
                </ul>                             
            </div>`,a.booksPart.querySelectorAll(".book-cards-list-item").forEach(n=>n.style.display="block")}).catch(s=>{console.error(s)})}function j(t){const e=t.map(({list_name:o})=>`<li class="categories-list-item" data-category-name="${o}">${o}</li>`).sort((o,s)=>o.localeCompare(s));return e.unshift('<li class="categories-list-item active" data-category-name="All categories">All categories</li>'),e.join("")}function d(t){const e=t.split(" ");if(e.includes("and")){const n=e.indexOf("and"),r=e.slice(0,n+1).join(" "),h=e.slice(n+1).join(" ");return`<h2 class="books-part-title">${r} <span class="books-part-title-span">${h}</span></h2>`}if(e.length>3){const n=e.slice(0,e.length/2).join(" "),r=e.slice(e.length/2).join(" ");return`<h2 class="books-part-title">${n} <span class="books-part-title-span">${r}</span></h2>`}const o=e.pop();return`<h2 class="books-part-title">${e.join(" ")} <span class="books-part-title-span">${o}</span></h2>`}function u(t){return t.map(({_id:e,book_image:o,author:s,title:n})=>`<li class="book-cards-list-item" data-book-id="${e}">
            <img
            class="book-card-img"
            src="${o}"
            alt="${n}"            
            loading="lazy"
            />
            <div class="book-card-hover">
                <p>quick view</p>
            </div>
            <p class="book-card-title">${n}</p>
            <p class="book-card-author">${s}</p>
        </li>`).join("")}function x({book_image:t,title:e,author:o,description:s,buy_links:[n,r]}){return`<img src="${t}" class="popup-image" />
            <div class ="info-book">
            <h2 class="popup-book-title">${e}</h2>
            <p class="popup-book-author">${o}</p>
            <p class="popup-book-description">${s}</p>
              <div class="popup-links">
                <a href="${n.url}" target="_blank">
                  <img class="popup-link-img" src="./img/modal-shop/amazon.png" alt="link to amazon" />
                </a>
                <a href="${r}" target="_blank">
                  <img class="popup-link-img" src="./img/modal-shop/apple-books.png" alt="link to apple books" />
                </a>
              </div>
            </div>
            `}const l="bookList";let i={};const c=a.popupEl.lastElementChild.previousElementSibling;a.booksPart.addEventListener("click",H);a.popupEl.firstElementChild.addEventListener("click",m);a.popupEl.parentNode.addEventListener("click",m);document.addEventListener("keydown",m);function m(t){(t.target===t.currentTarget||t.key==="Escape"||t.target.closest(".popup-btn-close"))&&(a.popupEl.parentNode.classList.add("is-hidden"),a.body.classList.remove("popup-modal-open"),a.popupEl.firstElementChild.nextElementSibling.innerHTML="")}function H(t){if(!t.target.closest(".book-cards-list-item"))return;a.popupEl.parentNode.classList.toggle("is-hidden"),a.body.classList.toggle("popup-modal-open");const e=t.target.closest("LI").dataset.bookId;C(e).then(o=>{i=o,k(i);let s=x(i);a.popupEl.firstElementChild.nextElementSibling.innerHTML=s})}async function k(t){try{(await g(l).then(s=>s||[]).catch(s=>{console.log(s.message)})).some(({_id:s})=>s===t._id)?(c.removeEventListener("click",y),c.addEventListener("click",v),c.textContent="remove from the shopping list",a.popupEl.lastElementChild.hidden=!1):(c.removeEventListener("click",v),c.addEventListener("click",y),c.textContent="Add to shopping list",a.popupEl.lastElementChild.hidden=!0)}catch(e){console.log(e.message)}}async function y(){try{const t=await g(l).then(e=>e||[]).catch(e=>{console.log(e.message)});t.push(i),T(l,t),k(i)}catch(t){console.log(t.message)}}async function v(){try{const e=(await g(l)).filter(o=>o._id!==i._id);T(l,e),k(i)}catch(t){console.log(t.message)}}window.onscroll=()=>{z()};function z(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("back-to-up").classList.remove("is-hidden"):document.getElementById("back-to-up").classList.add("is-hidden")}(()=>{function t(){window.scrollTo({top:0,behavior:"smooth"})}document.querySelector("#back-to-up").addEventListener("click",t)})();const O={apiKey:"AIzaSyAgxt77z4guvGeb-hLfEEShLOOJCexE6KA",authDomain:"project-piznayk0-54a5b.firebaseapp.com",projectId:"project-piznayk0-54a5b",storageBucket:"project-piznayk0-54a5b.appspot.com",messagingSenderId:"414681312063",appId:"1:414681312063:web:4c2a191ae3a1338ea9818a",measurementId:"G-SN3VTV9KJG"},b=B(O);A(b);console.log(b);const q="daria@email.com",F="12344321123",_=P(b);I(_,q,F).then(t=>{const e=t.user;console.log(e)}).catch(t=>{t.code,t.message,console.log(t)});
//# sourceMappingURL=commonHelpers.js.map
