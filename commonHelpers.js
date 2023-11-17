import{g as C,r as t,a as E,s as m,b as v,c as T,d as S}from"./assets/cursor-2ca2d77e.js";import{n}from"./assets/vendor-99cc852e.js";async function u(o){const e=await localStorage.getItem(o);return await JSON.parse(e)}async function L(o,e){try{await localStorage.setItem(o,JSON.stringify(e))}catch(a){console.log(a.message)}}n.Notify.init({width:"300px",position:"center-center",fontSize:"16px",fontFamily:"DM Sans",showOnlyTheLastOne:!0,clickToClose:!0,timeout:5e3,failure:{notiflixIconColor:"#111",background:"#4f2ee8",textColor:"#fff"}});C().then(o=>{if(t.loaderForAllCategories.style.display="block",o.length===0){t.booksPart.insertAdjacentHTML("afterbegin",`${g}`);return}t.booksPart.insertAdjacentHTML("beforeend",`<h2 class="books-part-title">Best Sellers
                <span class="books-part-title-span"> Books</span>
            </h2>
            <div class="book-categories-container">
            ${w(o)}
            </div>`)}).catch(o=>{console.error(o),n.Notify.failure("Oops! Something went wrong! Try reloading the page!")}).finally(o=>t.loaderForAllCategories.style.display="none");t.booksPart.addEventListener("click",B);function B(o){if(t.loaderForAllCategories.style.display="block",o.target.nodeName!=="BUTTON")return;window.scrollTo(0,0);const a=o.target.parentElement.querySelector(".book-category-title").textContent,s=[...document.querySelectorAll(".categories-list-item")];s.find(r=>{r.classList.contains("active")&&r.classList.remove("active")}),s.find(r=>{r.textContent===a&&(r.classList.add("active"),r.scrollIntoView({behavior:"smooth",block:"center"}))}),E(a).then(r=>{if(r.length===0){t.booksPart.innerHTML=`${d(a)}
                <div class="book-category-wrapper">
                ${g}                                
                </div>`;return}t.booksPart.innerHTML=n.Notify`${d(a)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${y(r)}                  
                </ul>                             
            </div>`,t.booksPart.querySelectorAll(".book-cards-list-item").forEach(i=>i.style.display="block")}).catch(r=>{console.error(r),n.Notify.failure("Oops! Something went wrong! Try reloading the page!")}).finally(r=>t.loaderForAllCategories.style.display="none")}function w(o){return o.map(({list_name:e,books:a})=>`<div class="book-category-container">
                <h3 class="book-category-title">${e}</h3>
                <ul class="book-cards-list">
                ${y(a)}                  
                </ul>
                <button type="button" class="see-more-btn">See more</button>             
            </div>`).join("")}const g=`
<div class="books-not-found-wrapper">
<p class="books-not-found-message">No books found😒<br> Try other categories😉</p>
<img
class="books-not-found-img"
srcset="${m} 1x, ${v} 2x"
src="${m}"
alt="Books not found"
height="241"
width="332"
/>
</div>`;n.Notify.init({width:"300px",position:"center-center",fontSize:"16px",fontFamily:"DM Sans",showOnlyTheLastOne:!0,clickToClose:!0,timeout:5e3,failure:{notiflixIconColor:"#111",background:"#4f2ee8",textColor:"#fff"}});T().then(o=>{t.loaderForAllCategories.style.display="block",t.categoriesList.innerHTML=x(o)}).catch(o=>{console.error(o),n.Notify.failure("Oops! Something went wrong! Try reloading the page!")});t.categoriesList.addEventListener("click",I);function I(o){if(t.loaderForAllCategories.style.display="block",o.target.nodeName!=="LI")return;const e=o.target;if(e.classList.contains("active")){console.log("Repeat click on acrive category - No GET request - Just return");return}window.scrollTo(0,0),e.parentElement.querySelector(".categories-list-item.active").classList.remove("active"),e.classList.add("active");const a=o.target.dataset.categoryName;if(a==="All categories"){C().then(s=>{if(t.loaderForAllCategories.style.display="block",s.length===0){t.booksPart.innerHTML=`<h2 class="books-part-title">Best Sellers
                        <span class="books-part-title-span"> Books</span>
                        </h2>
                        <div class="book-categories-container">
                        ${g}
                        </div>`;return}t.booksPart.innerHTML=`<h2 class="books-part-title">Best Sellers
                    <span class="books-part-title-span"> Books</span>
                    </h2>
                    <div class="book-categories-container">
                    ${w(s)}
                    </div>`}).catch(s=>{console.error(s),n.Notify.failure("Oops! Something went wrong! Try reloading the page!")}).finally(s=>t.loaderForAllCategories.style.display="none");return}E(a).then(s=>{if(t.loaderForAllCategories.style.display="none",s.length===0){t.booksPart.innerHTML=`${d(a)}
                    <div class="book-category-wrapper">
                    ${g}                                
                    </div>`;return}t.booksPart.innerHTML=`${d(a)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${y(s)}                  
                </ul>                             
            </div>`,t.booksPart.querySelectorAll(".book-cards-list-item").forEach(r=>r.style.display="block")}).catch(s=>{console.error(s),n.Notify.failure("Oops! Something went wrong! Try reloading the page!")}).finally(s=>t.loaderForAllCategories.style.display="none")}function x(o){const e=o.map(({list_name:a})=>`<li class="categories-list-item" data-category-name="${a}">${a}</li>`).sort((a,s)=>a.localeCompare(s));return e.unshift('<li class="categories-list-item active" data-category-name="All categories">All categories</li>'),e.join("")}function d(o){const e=o.split(" ");if(e.includes("and")){const r=e.indexOf("and"),i=e.slice(0,r+1).join(" "),f=e.slice(r+1).join(" ");return`<h2 class="books-part-title">${i} <span class="books-part-title-span">${f}</span></h2>`}if(e.length>3){const r=e.slice(0,e.length/2).join(" "),i=e.slice(e.length/2%2===0?e.length/2:e.length/2-1).join(" ");return`<h2 class="books-part-title">${r} <span class="books-part-title-span">${i}</span></h2>`}const a=e.pop();return`<h2 class="books-part-title">${e.join(" ")} <span class="books-part-title-span">${a}</span></h2>`}function y(o){return o.map(({_id:e,book_image:a,author:s,title:r})=>`<li class="book-cards-list-item" data-book-id="${e}">
            <img
            class="book-card-img"
            src="${a}"
            alt="${r}"            
            loading="lazy"
            />
            <div class="book-card-hover">
                <p>quick view</p>
            </div>
            <p class="book-card-title">${r}</p>
            <p class="book-card-author">${s}</p>
        </li>`).join("")}const P="data:image/png;base64,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",F="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOTSURBVHgB7VdJaFRBEH3VfyYTMa4QGYxCjBCXgyLkoKgILiB6EBE8eVTvoqh48STiCnoRFfGsXjwogrggiIoGNLkYUeOGWTCELBKTSabL+v/Pn+n+07ME4y0Fze+ufl39urq6pgaYllCo3CRfQzMS3nqtuF5pVSNowqREZ2SLrsxEtjV1AO8xGRJ8A8sYyVvSXS0jByzScQkTpp5zH+okjG+m/fhWkcTYVSxPeomXMjUXUy2McXFmCx3ItJvqRByXpJoH0Jh6AjnzzHybGSuIIhcBykTwlZrd0NQoDX5jR4PR2PxyTi9fZhtrrmVWy3Dd227ua5HQoM3CElGDo8Xn81+d0+vAkIVFDKt1Yqe5r3UdwrbJGanebKBJ1iXrBJQFhr4AP57IEUy09Bs2ArOaBJ8CRrqB3jfhNyYMbihJAlmkQDEaLcdAaw6BUrNtQz2t4If7hNB3YOYi0NbroMWbbMzYAPj1GaDtMlAIAb9bZ+KUPfDDJXe/fmvcBbX2ZBGB4NzpFtn4ZuB62nW3iECASc2F2ngatHQPLLsgVdoTOlhaMCInLCe0cB14zgrQ/JVlcahNh0EaCdvetkhoreykqKtIkPNWVcYEAVs63cZigmySjMp5mpKVEOGr0FZUlCERPCGyx9VsUBFEZb0ai4kgaCZFIoyjSiQQI1EmJsDKXshVxES1RCMSDpNFMYFYTEwJCfNAXLzGzpi+J4xLpqo8USVGU6EAiAXSv3uiypjg3HVwRKokibzbuDCOZHQQ3PcZflKlhjXGGsPgRAbc3wn8GQQtaAZmzCtg8mSLPefwhFEV+T/JP9ug7x0Hd78VQxMhsVpJx2sPQm05mieafXIR/OqKEOhH+PsTklW7LzueqE3EGk2cqH/IxNvyk3X14JEBMTAOl6gtQq73o2TNxeDnl5xJw79/qp0jJduQqX6cPNW31ekJMfHbdC8P9zmZR6IfnQeWbAC/uwPyPCcuSNajw9ac1pwxMRYJeQ1dQSFibM1FRvOEEVz0p2eiTATFjIkv1/eIOk2byj6aus9F5Rty43DPojLPf9Y5jHstDH3YzzKeug4WnY4yR9IdRNyM/yQSIV9T53qWmDr7OgST0d5eULYVjkp8ChgMiUd2xNXuPz/H043jY/RYuk0oJa6AKbs/t9ck1V462/XBZaqkjB1Or/QYLVLCL5S7T0qRW0WOzluWfVVGUsavrMcvUhe6OzAtFeQvBzyhnfEyHm0AAAAASUVORK5CYII=";function N({book_image:o,title:e,author:a,description:s,buy_links:[r,i]}){return`<img src="${o}" class="popup-image" />
            <div class ="info-book">
            <h2 class="popup-book-title">${e}</h2>
            <p class="popup-book-author">${a}</p>
            <p class="popup-book-description">${s}</p>
              <div class="popup-links">
                <a href="${r.url}" target="_blank">
                  <img class="popup-link-img amazon-icon" src="${P}" />
                </a>
                <a href="${i}" target="_blank">
                  <img class="popup-link-img" src="${F}" />
                </a>
              </div>
            </div>
            `}n.Notify.init({width:"300px",position:"center-center",fontSize:"16px",fontFamily:"DM Sans",showOnlyTheLastOne:!0,clickToClose:!0,timeout:5e3,failure:{notiflixIconColor:"#111",background:"#4f2ee8",textColor:"#fff"}});const p="bookList";let l={};const c=t.popupEl.lastElementChild.previousElementSibling;t.booksPart.addEventListener("click",M);t.popupEl.firstElementChild.addEventListener("click",k);t.popupEl.parentNode.addEventListener("click",k);document.addEventListener("keydown",k);function k(o){(o.target===o.currentTarget||o.key==="Escape"||o.target.closest(".popup-btn-close"))&&(t.popupEl.parentNode.classList.add("is-hidden"),t.body.classList.remove("popup-modal-open"),t.popupEl.firstElementChild.nextElementSibling.innerHTML="")}function M(o){if(!o.target.closest(".book-cards-list-item"))return;t.popupEl.parentNode.classList.toggle("is-hidden"),t.body.classList.toggle("popup-modal-open");const e=o.target.closest("LI").dataset.bookId;S(e).then(a=>{l=a,A(l);let s=N(l);t.popupEl.firstElementChild.nextElementSibling.innerHTML=s}).catch(a=>{console.error(a),n.Notify.failure("Oops! Something went wrong! Try reloading the page!")}).finally(a=>t.loaderForAllCategories.style.display="none")}async function A(o){try{(await u(p).then(s=>s||[]).catch(s=>{console.log(s.message),n.Notify.failure("Oops! Something went wrong! Try reloading the page!")})).some(({_id:s})=>s===o._id)?(c.removeEventListener("click",h),c.addEventListener("click",b),c.textContent="remove from the shopping list",t.popupEl.lastElementChild.hidden=!1):(c.removeEventListener("click",b),c.addEventListener("click",h),c.textContent="Add to shopping list",t.popupEl.lastElementChild.hidden=!0)}catch(e){console.log(e.message),n.Notify.failure("Oops! Something went wrong! Try reloading the page!")}}async function h(){try{const o=await u(p).then(e=>e||[]).catch(e=>{console.log(e.message),n.Notify.failure("Oops! Something went wrong! Try reloading the page!")});o.push(l),L(p,o),A(l)}catch(o){console.log(o.message),n.Notify.failure("Oops! Something went wrong! Try reloading the page!")}}async function b(){try{const e=(await u(p)).filter(a=>a._id!==l._id);L(p,e),A(l)}catch(o){console.log(o.message),n.Notify.failure("Oops! Something went wrong! Try reloading the page!")}}window.onscroll=()=>{O()};function O(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("back-to-up").classList.remove("is-hidden"):document.getElementById("back-to-up").classList.add("is-hidden")}(()=>{function o(){window.scrollTo({top:0,behavior:"smooth"})}document.querySelector("#back-to-up").addEventListener("click",o)})();
//# sourceMappingURL=commonHelpers.js.map
