import{g as h,r as e,e as r,a as p,b as E,c as L,d as B}from"./assets/sign-in-ebfc0d37.js";import"./assets/vendor-c1cf73b3.js";h().then(o=>{if(o.length===0){e.booksPart.insertAdjacentHTML("afterbegin",`<div class="books-not-found-wrapper">
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
            ${f(o)}
            </div>`)}).catch(o=>{console.error(o)});e.booksPart.addEventListener("click",C);function C(o){if(o.target.nodeName!=="BUTTON")return;window.scrollTo(0,0);const a=o.target.parentElement.querySelector(".book-category-title").textContent;E(a).then(s=>{if(s.length===0){e.booksPart.innerHTML=`${d(a)}
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
            </div>`,e.booksPart.querySelectorAll(".book-cards-list-item").forEach(n=>n.style.display="block")}).catch(s=>{console.error(s)})}function f(o){return o.map(({list_name:t,books:a})=>`<div class="book-category-container">
                <h3 class="book-category-title">${t}</h3>
                <ul class="book-cards-list">
                ${g(a)}                  
                </ul>
                <button type="button" class="see-more-btn">See more</button>             
            </div>`).join("")}L().then(o=>{e.categoriesList.innerHTML=S(o)}).catch(o=>{console.error(o)});e.categoriesList.addEventListener("click",T);function T(o){if(o.target.nodeName!=="LI")return;const t=o.target;if(t.classList.contains("active")){console.log("Repeat click on acrive category - No GET request - Just return");return}window.scrollTo(0,0),t.parentElement.querySelector(".categories-list-item.active").classList.remove("active"),t.classList.add("active");const a=o.target.dataset.categoryName;if(a==="All categories"){h().then(s=>{if(s.length===0){e.booksPart.innerHTML=`<h2 class="books-part-title">Best Sellers
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
                    ${f(s)}
                    </div>`}).catch(s=>{console.error(s)});return}E(a).then(s=>{if(s.length===0){e.booksPart.innerHTML=`${d(a)}
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
            </div>`,e.booksPart.querySelectorAll(".book-cards-list-item").forEach(n=>n.style.display="block")}).catch(s=>{console.error(s)})}function S(o){const t=o.map(({list_name:a})=>`<li class="categories-list-item" data-category-name="${a}">${a}</li>`).sort((a,s)=>a.localeCompare(s));return t.unshift('<li class="categories-list-item active" data-category-name="All categories">All categories</li>'),t.join("")}function d(o){const t=o.split(" ");if(t.includes("and")){const n=t.indexOf("and"),l=t.slice(0,n+1).join(" "),b=t.slice(n+1).join(" ");return`<h2 class="books-part-title">${l} <span class="books-part-title-span">${b}</span></h2>`}if(t.length>3){const n=t.slice(0,t.length/2).join(" "),l=t.slice(t.length/2).join(" ");return`<h2 class="books-part-title">${n} <span class="books-part-title-span">${l}</span></h2>`}const a=t.pop();return`<h2 class="books-part-title">${t.join(" ")} <span class="books-part-title-span">${a}</span></h2>`}function g(o){return o.map(({_id:t,book_image:a,author:s,title:n})=>`<li class="book-cards-list-item" data-book-id="${t}">
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
        </li>`).join("")}const w="data:image/png;base64,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",I="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOTSURBVHgB7VdJaFRBEH3VfyYTMa4QGYxCjBCXgyLkoKgILiB6EBE8eVTvoqh48STiCnoRFfGsXjwogrggiIoGNLkYUeOGWTCELBKTSabL+v/Pn+n+07ME4y0Fze+ufl39urq6pgaYllCo3CRfQzMS3nqtuF5pVSNowqREZ2SLrsxEtjV1AO8xGRJ8A8sYyVvSXS0jByzScQkTpp5zH+okjG+m/fhWkcTYVSxPeomXMjUXUy2McXFmCx3ItJvqRByXpJoH0Jh6AjnzzHybGSuIIhcBykTwlZrd0NQoDX5jR4PR2PxyTi9fZhtrrmVWy3Dd227ua5HQoM3CElGDo8Xn81+d0+vAkIVFDKt1Yqe5r3UdwrbJGanebKBJ1iXrBJQFhr4AP57IEUy09Bs2ArOaBJ8CRrqB3jfhNyYMbihJAlmkQDEaLcdAaw6BUrNtQz2t4If7hNB3YOYi0NbroMWbbMzYAPj1GaDtMlAIAb9bZ+KUPfDDJXe/fmvcBbX2ZBGB4NzpFtn4ZuB62nW3iECASc2F2ngatHQPLLsgVdoTOlhaMCInLCe0cB14zgrQ/JVlcahNh0EaCdvetkhoreykqKtIkPNWVcYEAVs63cZigmySjMp5mpKVEOGr0FZUlCERPCGyx9VsUBFEZb0ai4kgaCZFIoyjSiQQI1EmJsDKXshVxES1RCMSDpNFMYFYTEwJCfNAXLzGzpi+J4xLpqo8USVGU6EAiAXSv3uiypjg3HVwRKokibzbuDCOZHQQ3PcZflKlhjXGGsPgRAbc3wn8GQQtaAZmzCtg8mSLPefwhFEV+T/JP9ug7x0Hd78VQxMhsVpJx2sPQm05mieafXIR/OqKEOhH+PsTklW7LzueqE3EGk2cqH/IxNvyk3X14JEBMTAOl6gtQq73o2TNxeDnl5xJw79/qp0jJduQqX6cPNW31ekJMfHbdC8P9zmZR6IfnQeWbAC/uwPyPCcuSNajw9ac1pwxMRYJeQ1dQSFibM1FRvOEEVz0p2eiTATFjIkv1/eIOk2byj6aus9F5Rty43DPojLPf9Y5jHstDH3YzzKeug4WnY4yR9IdRNyM/yQSIV9T53qWmDr7OgST0d5eULYVjkp8ChgMiUd2xNXuPz/H043jY/RYuk0oJa6AKbs/t9ck1V462/XBZaqkjB1Or/QYLVLCL5S7T0qRW0WOzluWfVVGUsavrMcvUhe6OzAtFeQvBzyhnfEyHm0AAAAASUVORK5CYII=",c="bookList";let i={};e.booksPart.addEventListener("click",x);e.popupEl.firstElementChild.addEventListener("click",P);e.popupEl.parentNode.addEventListener("click",y);document.addEventListener("keydown",y);function y(o){(o.target===o.currentTarget||o.key==="Escape")&&(e.popupEl.parentNode.classList.toggle("is-hidden"),e.body.classList.toggle("popup-modal-open"))}function P(o){o.target.closest(".popup-btn-close")===e.popupEl.firstElementChild&&(e.popupEl.parentNode.classList.toggle("is-hidden"),e.body.classList.toggle("popup-modal-open"))}function x(o){if(!o.target.closest("LI")===o.target.closest(".book-cards-list-item")||o.target.closest("LI")===null)return;o.preventDefault(),e.popupEl.parentNode.classList.toggle("is-hidden"),e.body.classList.toggle("popup-modal-open");const t=o.target.closest("LI").dataset.bookId;B(t).then(a=>{i=a,k(i);let s=Q(i);M(s)})}async function u(o){const t=await localStorage.getItem(o);return await JSON.parse(t)}async function v(o,t){try{await localStorage.setItem(o,JSON.stringify(t))}catch(a){console.log(a.message)}}async function k(o){try{(await u(c).then(s=>s||[]).catch(s=>{console.log(s.message)})).some(({_id:s})=>s===o._id)?(e.popupEl.lastElementChild.previousElementSibling.removeEventListener("click",m),e.popupEl.lastElementChild.previousElementSibling.addEventListener("click",A),e.popupEl.lastElementChild.previousElementSibling.textContent="remove from the shopping list",e.popupEl.lastElementChild.hidden=!1):(e.popupEl.lastElementChild.previousElementSibling.removeEventListener("click",A),e.popupEl.lastElementChild.previousElementSibling.addEventListener("click",m),e.popupEl.lastElementChild.previousElementSibling.textContent="Add to shopping list",e.popupEl.lastElementChild.hidden=!0)}catch(t){console.log(t.message)}}function M(o){e.popupEl.firstElementChild.nextElementSibling.innerHTML=o}function Q({book_image:o,title:t,author:a,description:s,buy_links:[n,l]}){return`<img src="${o}" class="popup-image" />
            <div class ="info-book">
            <h2 class="popup-book-title">${t}</h2>
            <p class="popup-book-author">${a}</p>
            <p class="popup-book-description">${s}</p>
              <div class="popup-links">
                <a href="${n.url}" target="_blank">
                  <img class="popup-link-img" src="${w}" alt="link to amazon" />
                </a>
                <a href="${l.url}" target="_blank">
                  <img class="popup-link-img" src="${I}" alt="link to apple books" />
                </a>
              </div>
            </div>
            `}async function m(){try{const o=await u(c).then(t=>t||[]).catch(t=>{console.log(t.message)});o.push(i),v(c,o),k(i)}catch(o){console.log(o.message)}}async function A(){try{const t=(await u(c)).filter(a=>a._id!==i._id);v(c,t),k(i)}catch(o){console.log(o.message)}}window.onscroll=()=>{R()};function R(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("back-to-up").classList.remove("is-hidden"):document.getElementById("back-to-up").classList.add("is-hidden")}(()=>{function o(){window.scrollTo({top:0,behavior:"smooth"})}document.querySelector("#back-to-up").addEventListener("click",o)})();
//# sourceMappingURL=commonHelpers.js.map
