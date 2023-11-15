import{g as E,r as e,a as y,b as B,c as C}from"./assets/sign-in-eed5bcf9.js";import{i as S,g as I,a as T,c as w}from"./assets/vendor-63749fbb.js";const A="/project-Piznayk0/assets/empty-bin@1x-a278a77f.png",P="/project-Piznayk0/assets/empty-bin@2x-1268a808.png";E().then(t=>{if(t.length===0){e.booksPart.insertAdjacentHTML("afterbegin",`${l}`);return}e.booksPart.insertAdjacentHTML("beforeend",`<h2 class="books-part-title">Best Sellers
                <span class="books-part-title-span"> Books</span>
            </h2>
            <div class="book-categories-container">
            ${f(t)}
            </div>`)}).catch(t=>{console.error(t)});e.booksPart.addEventListener("click",x);function x(t){if(t.target.nodeName!=="BUTTON")return;window.scrollTo(0,0);const a=t.target.parentElement.querySelector(".book-category-title").textContent,s=[...document.querySelectorAll(".categories-list-item")];s.find(n=>{n.classList.contains("active")&&n.classList.remove("active")}),s.find(n=>{n.textContent===a&&(n.classList.add("active"),console.log(s.find(r=>r.textContent===a)))}),y(a).then(n=>{if(n.length===0){e.booksPart.innerHTML=`${p(a)}
                <div class="book-category-wrapper">
                ${l}                                
                </div>`;return}e.booksPart.innerHTML=`${p(a)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${d(n)}                  
                </ul>                             
            </div>`,e.booksPart.querySelectorAll(".book-cards-list-item").forEach(r=>r.style.display="block")}).catch(n=>{console.error(n)})}function f(t){return t.map(({list_name:o,books:a})=>`<div class="book-category-container">
                <h3 class="book-category-title">${o}</h3>
                <ul class="book-cards-list">
                ${d(a)}                  
                </ul>
                <button type="button" class="see-more-btn">See more</button>             
            </div>`).join("")}const l=`
<div class="books-not-found-wrapper">
<p class="books-not-found-message">No books found😒<br> Try other categories😉</p>
<img
class="books-not-found-img"
srcset="${A} 1x, ${P} 2x"
src="${A}"
alt="Books not found"
height="241"
width="332"
/>
</div>`;B().then(t=>{e.categoriesList.innerHTML=j(t)}).catch(t=>{console.error(t)});e.categoriesList.addEventListener("click",M);function M(t){if(t.target.nodeName!=="LI")return;const o=t.target;if(o.classList.contains("active")){console.log("Repeat click on acrive category - No GET request - Just return");return}window.scrollTo(0,0),o.parentElement.querySelector(".categories-list-item.active").classList.remove("active"),o.classList.add("active");const a=t.target.dataset.categoryName;if(a==="All categories"){E().then(s=>{if(s.length===0){e.booksPart.innerHTML=`<h2 class="books-part-title">Best Sellers
                        <span class="books-part-title-span"> Books</span>
                        </h2>
                        <div class="book-categories-container">
                        ${l}
                        </div>`;return}e.booksPart.innerHTML=`<h2 class="books-part-title">Best Sellers
                    <span class="books-part-title-span"> Books</span>
                    </h2>
                    <div class="book-categories-container">
                    ${f(s)}
                    </div>`}).catch(s=>{console.error(s)});return}y(a).then(s=>{if(s.length===0){e.booksPart.innerHTML=`${p(a)}
                    <div class="book-category-wrapper">
                    ${l}                                
                    </div>`;return}e.booksPart.innerHTML=`${p(a)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${d(s)}                  
                </ul>                             
            </div>`,e.booksPart.querySelectorAll(".book-cards-list-item").forEach(n=>n.style.display="block")}).catch(s=>{console.error(s)})}function j(t){const o=t.map(({list_name:a})=>`<li class="categories-list-item" data-category-name="${a}">${a}</li>`).sort((a,s)=>a.localeCompare(s));return o.unshift('<li class="categories-list-item active" data-category-name="All categories">All categories</li>'),o.join("")}function p(t){const o=t.split(" ");if(o.includes("and")){const n=o.indexOf("and"),r=o.slice(0,n+1).join(" "),m=o.slice(n+1).join(" ");return`<h2 class="books-part-title">${r} <span class="books-part-title-span">${m}</span></h2>`}if(o.length>3){const n=o.slice(0,o.length/2).join(" "),r=o.slice(o.length/2).join(" ");return`<h2 class="books-part-title">${n} <span class="books-part-title-span">${r}</span></h2>`}const a=o.pop();return`<h2 class="books-part-title">${o.join(" ")} <span class="books-part-title-span">${a}</span></h2>`}function d(t){return t.map(({_id:o,book_image:a,author:s,title:n})=>`<li class="book-cards-list-item" data-book-id="${o}">
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
        </li>`).join("")}const Q="data:image/png;base64,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",R="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOTSURBVHgB7VdJaFRBEH3VfyYTMa4QGYxCjBCXgyLkoKgILiB6EBE8eVTvoqh48STiCnoRFfGsXjwogrggiIoGNLkYUeOGWTCELBKTSabL+v/Pn+n+07ME4y0Fze+ufl39urq6pgaYllCo3CRfQzMS3nqtuF5pVSNowqREZ2SLrsxEtjV1AO8xGRJ8A8sYyVvSXS0jByzScQkTpp5zH+okjG+m/fhWkcTYVSxPeomXMjUXUy2McXFmCx3ItJvqRByXpJoH0Jh6AjnzzHybGSuIIhcBykTwlZrd0NQoDX5jR4PR2PxyTi9fZhtrrmVWy3Dd227ua5HQoM3CElGDo8Xn81+d0+vAkIVFDKt1Yqe5r3UdwrbJGanebKBJ1iXrBJQFhr4AP57IEUy09Bs2ArOaBJ8CRrqB3jfhNyYMbihJAlmkQDEaLcdAaw6BUrNtQz2t4If7hNB3YOYi0NbroMWbbMzYAPj1GaDtMlAIAb9bZ+KUPfDDJXe/fmvcBbX2ZBGB4NzpFtn4ZuB62nW3iECASc2F2ngatHQPLLsgVdoTOlhaMCInLCe0cB14zgrQ/JVlcahNh0EaCdvetkhoreykqKtIkPNWVcYEAVs63cZigmySjMp5mpKVEOGr0FZUlCERPCGyx9VsUBFEZb0ai4kgaCZFIoyjSiQQI1EmJsDKXshVxES1RCMSDpNFMYFYTEwJCfNAXLzGzpi+J4xLpqo8USVGU6EAiAXSv3uiypjg3HVwRKokibzbuDCOZHQQ3PcZflKlhjXGGsPgRAbc3wn8GQQtaAZmzCtg8mSLPefwhFEV+T/JP9ug7x0Hd78VQxMhsVpJx2sPQm05mieafXIR/OqKEOhH+PsTklW7LzueqE3EGk2cqH/IxNvyk3X14JEBMTAOl6gtQq73o2TNxeDnl5xJw79/qp0jJduQqX6cPNW31ekJMfHbdC8P9zmZR6IfnQeWbAC/uwPyPCcuSNajw9ac1pwxMRYJeQ1dQSFibM1FRvOEEVz0p2eiTATFjIkv1/eIOk2byj6aus9F5Rty43DPojLPf9Y5jHstDH3YzzKeug4WnY4yR9IdRNyM/yQSIV9T53qWmDr7OgST0d5eULYVjkp8ChgMiUd2xNXuPz/H043jY/RYuk0oJa6AKbs/t9ck1V462/XBZaqkjB1Or/QYLVLCL5S7T0qRW0WOzluWfVVGUsavrMcvUhe6OzAtFeQvBzyhnfEyHm0AAAAASUVORK5CYII=",c="bookList";let i={};e.booksPart.addEventListener("click",F);e.popupEl.firstElementChild.addEventListener("click",V);e.popupEl.parentNode.addEventListener("click",L);document.addEventListener("keydown",L);function L(t){(t.target===t.currentTarget||t.key==="Escape")&&(e.popupEl.parentNode.classList.toggle("is-hidden"),e.body.classList.toggle("popup-modal-open"))}function V(t){t.target.closest(".popup-btn-close")===e.popupEl.firstElementChild&&(e.popupEl.parentNode.classList.toggle("is-hidden"),e.body.classList.toggle("popup-modal-open"))}function F(t){if(!t.target.closest("LI")===t.target.closest(".book-cards-list-item")||t.target.closest("LI")===null)return;t.preventDefault(),e.popupEl.parentNode.classList.toggle("is-hidden"),e.body.classList.toggle("popup-modal-open");const o=t.target.closest("LI").dataset.bookId;C(o).then(a=>{i=a,u(i);let s=U(i);N(s)})}async function g(t){const o=await localStorage.getItem(t);return await JSON.parse(o)}async function v(t,o){try{await localStorage.setItem(t,JSON.stringify(o))}catch(a){console.log(a.message)}}async function u(t){try{(await g(c).then(s=>s||[]).catch(s=>{console.log(s.message)})).some(({_id:s})=>s===t._id)?(e.popupEl.lastElementChild.previousElementSibling.removeEventListener("click",b),e.popupEl.lastElementChild.previousElementSibling.addEventListener("click",h),e.popupEl.lastElementChild.previousElementSibling.textContent="remove from the shopping list",e.popupEl.lastElementChild.hidden=!1):(e.popupEl.lastElementChild.previousElementSibling.removeEventListener("click",h),e.popupEl.lastElementChild.previousElementSibling.addEventListener("click",b),e.popupEl.lastElementChild.previousElementSibling.textContent="Add to shopping list",e.popupEl.lastElementChild.hidden=!0)}catch(o){console.log(o.message)}}function N(t){e.popupEl.firstElementChild.nextElementSibling.innerHTML=t}function U({book_image:t,title:o,author:a,description:s,buy_links:[n,r]}){return`<img src="${t}" class="popup-image" />
            <div class ="info-book">
            <h2 class="popup-book-title">${o}</h2>
            <p class="popup-book-author">${a}</p>
            <p class="popup-book-description">${s}</p>
              <div class="popup-links">
                <a href="${n.url}" target="_blank">
                  <img class="popup-link-img amazon-icon" src="${Q}" alt="link to amazon" />
                </a>
                <a href="${r.url}" target="_blank">
                  <img class="popup-link-img apple-icon" src="${R}" alt="link to apple books" />
                </a>
              </div>
            </div>
            `}async function b(){try{const t=await g(c).then(o=>o||[]).catch(o=>{console.log(o.message)});t.push(i),v(c,t),u(i)}catch(t){console.log(t.message)}}async function h(){try{const o=(await g(c)).filter(a=>a._id!==i._id);v(c,o),u(i)}catch(t){console.log(t.message)}}window.onscroll=()=>{z()};function z(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("back-to-up").classList.remove("is-hidden"):document.getElementById("back-to-up").classList.add("is-hidden")}(()=>{function t(){window.scrollTo({top:0,behavior:"smooth"})}document.querySelector("#back-to-up").addEventListener("click",t)})();const G={apiKey:"AIzaSyAgxt77z4guvGeb-hLfEEShLOOJCexE6KA",authDomain:"project-piznayk0-54a5b.firebaseapp.com",projectId:"project-piznayk0-54a5b",storageBucket:"project-piznayk0-54a5b.appspot.com",messagingSenderId:"414681312063",appId:"1:414681312063:web:4c2a191ae3a1338ea9818a",measurementId:"G-SN3VTV9KJG"},k=S(G);I(k);console.log(k);const O="daria@email.com",Y="12344321123",X=T(k);w(X,O,Y).then(t=>{const o=t.user;console.log(o)}).catch(t=>{t.code,t.message,console.log(t)});
//# sourceMappingURL=commonHelpers.js.map
