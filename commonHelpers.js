import{g as E,r as e,a as h,b as v,c as B}from"./assets/sign-in-05cc8f21.js";import"./assets/vendor-313c7975.js";const A="/project-Piznayk0/assets/empty-bin@1x-a278a77f.png",C="/project-Piznayk0/assets/empty-bin@2x-1268a808.png";E().then(t=>{if(t.length===0){e.booksPart.insertAdjacentHTML("afterbegin",`${c}`);return}e.booksPart.insertAdjacentHTML("beforeend",`<h2 class="books-part-title">Best Sellers
                <span class="books-part-title-span"> Books</span>
            </h2>
            <div class="book-categories-container">
            ${y(t)}
            </div>`)}).catch(t=>{console.error(t)});e.booksPart.addEventListener("click",S);function S(t){if(t.target.nodeName!=="BUTTON")return;window.scrollTo(0,0);const s=t.target.parentElement.querySelector(".book-category-title").textContent,a=[...document.querySelectorAll(".categories-list-item")];a.find(n=>{n.classList.contains("active")&&n.classList.remove("active")}),a.find(n=>{n.textContent===s&&(n.classList.add("active"),console.log(a.find(r=>r.textContent===s)))}),h(s).then(n=>{if(n.length===0){e.booksPart.innerHTML=`${p(s)}
                <div class="book-category-wrapper">
                ${c}                                
                </div>`;return}e.booksPart.innerHTML=`${p(s)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${d(n)}                  
                </ul>                             
            </div>`,e.booksPart.querySelectorAll(".book-cards-list-item").forEach(r=>r.style.display="block")}).catch(n=>{console.error(n)})}function y(t){return t.map(({list_name:o,books:s})=>`<div class="book-category-container">
                <h3 class="book-category-title">${o}</h3>
                <ul class="book-cards-list">
                ${d(s)}                  
                </ul>
                <button type="button" class="see-more-btn">See more</button>             
            </div>`).join("")}const c=`
<div class="books-not-found-wrapper">
<p class="books-not-found-message">No books found😒<br> Try other categories😉</p>
<img
class="books-not-found-img"
srcset="${A} 1x, ${C} 2x"
src="${A}"
alt="Books not found"
height="241"
width="332"
/>
</div>`;v().then(t=>{e.categoriesList.innerHTML=I(t)}).catch(t=>{console.error(t)});e.categoriesList.addEventListener("click",T);function T(t){if(t.target.nodeName!=="LI")return;const o=t.target;if(o.classList.contains("active")){console.log("Repeat click on acrive category - No GET request - Just return");return}window.scrollTo(0,0),o.parentElement.querySelector(".categories-list-item.active").classList.remove("active"),o.classList.add("active");const s=t.target.dataset.categoryName;if(s==="All categories"){E().then(a=>{if(a.length===0){e.booksPart.innerHTML=`<h2 class="books-part-title">Best Sellers
                        <span class="books-part-title-span"> Books</span>
                        </h2>
                        <div class="book-categories-container">
                        ${c}
                        </div>`;return}e.booksPart.innerHTML=`<h2 class="books-part-title">Best Sellers
                    <span class="books-part-title-span"> Books</span>
                    </h2>
                    <div class="book-categories-container">
                    ${y(a)}
                    </div>`}).catch(a=>{console.error(a)});return}h(s).then(a=>{if(a.length===0){e.booksPart.innerHTML=`${p(s)}
                    <div class="book-category-wrapper">
                    ${c}                                
                    </div>`;return}e.booksPart.innerHTML=`${p(s)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${d(a)}                  
                </ul>                             
            </div>`,e.booksPart.querySelectorAll(".book-cards-list-item").forEach(n=>n.style.display="block")}).catch(a=>{console.error(a)})}function I(t){const o=t.map(({list_name:s})=>`<li class="categories-list-item" data-category-name="${s}">${s}</li>`).sort((s,a)=>s.localeCompare(a));return o.unshift('<li class="categories-list-item active" data-category-name="All categories">All categories</li>'),o.join("")}function p(t){const o=t.split(" ");if(o.includes("and")){const n=o.indexOf("and"),r=o.slice(0,n+1).join(" "),k=o.slice(n+1).join(" ");return`<h2 class="books-part-title">${r} <span class="books-part-title-span">${k}</span></h2>`}if(o.length>3){const n=o.slice(0,o.length/2).join(" "),r=o.slice(o.length/2).join(" ");return`<h2 class="books-part-title">${n} <span class="books-part-title-span">${r}</span></h2>`}const s=o.pop();return`<h2 class="books-part-title">${o.join(" ")} <span class="books-part-title-span">${s}</span></h2>`}function d(t){return t.map(({_id:o,book_image:s,author:a,title:n})=>`<li class="book-cards-list-item" data-book-id="${o}">
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
            <p class="book-card-author">${a}</p>
        </li>`).join("")}const w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAUCAYAAADV9o4UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAdESURBVHgBxVhrbFRFFD4zd7e0WwpbbIWW7S5bVCggiIAWA1IVxASjggpGE6BQBAyiQDBGElspJvIDRRTCyxgUraQJ/DFAgOIPNW2RpwZ5tdvttmgfPPtcunvv+M3du7dLW2SBNZ5keubOnDmPOY85W0YR4EpLy2IWyyROlKAKcfZ6S0vpNUB43+l0ZrJAoFcHUWOC3x8I2mxjOecWam4u94IuJSUlKclqHS8UhVNLS5k34qyEQYMG2UUw+ARXlCyhaVcsnJ+sqK4+Ed6X5/vExw8SRIy6AA8E6irr6xvC326320XB4CjQ3iC//5S3sbHOlGO320VCQpqqKIHa2toK54ABwxRFGaZZLJXVhjxdQGpq6oDeCQmb8TGNGLOY0oSoCBK95PP5TuvCXK460PTH9CuMcRgjDbo/VMbm4uBOKJKlLxFVBVR1IgRflN+DXa7pWNuOab9O9kKA3waPz7dMfoLmadCUUE8gxFrQvT9mzBjrlYaGTxnnC7Day9it1zStwFtTs1mX5XQuFYx9LudYXwznrDdphVgNPvlczvvYbIWMsRdBzEG5B0u7dSLGHrAwtiYsm4U9IcRzptEhuofB6Puw0Qat28rYIjl/yOEYqBFtlEbLC2FCbAGPi5DJcPadwenp4w2+1/H3WsQImHYz1izx1cbGFTB6iWFICeScAe4PVusyMzLGGvrEdarGPoy4ILmwDJE3QBrOoMwjOm+iIk9NzQxPdfXLWCs3PPcodYdemqpmw2GvRngkFeE0BXhK6BgYcz5cYj/nQ8HbLh2AFJpc6fMtkgabRxUlW2KsH4PsZDmoo2MUloIGia/N71+fk5NjwQW8a+hVBrrJzGodjfllGGgTETwj4Dfm9/eHXgeM7yQM3XABBuPiExPjk1NScvv169cHN5INr3DDc9ZurBg74q2tLa/y+fZEeOXEBY/nEMLoEOaXQncR4oFUKYEMW3xbW1/MqzIyMgYjBJ2m4ZzHd5GgUFyc5J1g6JBbX1/fWlVVNdJINXhL7JO4oqLiBuZlIbXYdHk5N6kqRKGsDcBFpjwhEkyi9qamN/2trbn2pKTRJFOPdasvkdBkYJVkcQldTkvEvjAUEeEFl8uV1S7E8kyXaxaFbv2WgBxdYUYa0gKRcFhOuRDDI/Rq6rSO1RuzxHPnztltcWakk8q5XmNIUdrByzyheyTT7d7IFOULCgkrwo3MBMkJig54VyOpS1Ue4nK5FaL9oMkD0UXUkeVQIr8nZoMdjgdEKC+l0ZUomh+ZgoRQejoDb4ZTgmw2G79pr1Ovm3Ti8IQbiszXvzRtN0LyDYRwMYQ2UnQgbrcXEGI2kB7aWkfHDNSRz6DQL9STDYpSDJwYUkfLw/Pzd3gTz5PXZCxEojlnrE/nlF2/jU46cKaq91O46jFWIxFyPF5WaoOmdw6Rhe4F8DqEp0HOGwzFx5n7mjZQIrfTmUehQhtSTlH2ITVqEfrbHA7HgxaL5TiFvcvYJInk84a1CTpPXKbMeYoCOI+LuwolNOPgTAifjZAqQlykGTRJPqezkO4NmsMTK+eFbodjCWQti9BiBiIvDd56vMs5WfQGgjbPqihbYVQT5jvkBvR7Cn3FKjxvG3AJDl1/Vd1EUQL3eDwXgIsNZlK4ZDwVsfIxcBuGDLWSWzFg0YSVEBvBtylkI18s6wnOVcJTmw0eZdhv14mFOIrxCfJ2Lgx6HfMC+XQxI79b29tX4fusbLRwbg0ZvQLW1qGB2UVRggxhEdC0t9A+HgajERjtKCg/yNbO5XAcRwvr8VZXnwxZyQoQlqmqqh4LM8C7vArVxI48Ptl5Gyw/kq4CnZ87Pf0x8JqD6EqC9adgfHFycnLblUuXjuGNLpLPFcL5PYRzW9Vcb5BSqC96PEbnaRekrkb6DZG8Ghoa6tFpjutts82C3GzIUtH+/jhn3ry9BQUFuhPQYxxED5GP6NC8Xq9eq4JCnFKMgtpL06pZNLcDvzxDdVQKBdroPwSxnVx4IGUTItvR3voiQwfH6XmWR79SDIFHSedDxh9Bo7m0px8QMYMOVH6NfkbcTgOeALwSw475fRRjiNoIsYkycU37STYrjLbg73dsHtVQjEF8CSOtJPP2PLzvQQ93FL3hCLaETlMM4Y68B4/3BfoAYyXJwifoJ3D4BvNythBRcZcg1qKT60vTSf465PQC+J6Bsa/hkc2GtwvAO5NiDHcVtriAoUDbMCZELFdglGL8CcV/B2cPOu0aNptazXMFKKZplA5jsrAvu0Q3sPyBIn/VyULbjL0VeMS+ZbnkF1vpAPZ3sgX65cYU7ilfxTaaCEVlMXqWbt1/y34+iMvgkGbpQaasxGfxdzuodiCkL+uLXyO3b+C5Wkhvoz2/7ZN5pxCTQoUISAGnV3AJU4Hl73TZnv5btye7t1qYsxf4IM6UIpwD3fgK2WrH3mgJMa/Q+IWu0JMwXMHPR4bMZfp/XKz4ljXhL2qnRjxUdWx+Zzf3f8A/L2T3ZcnjLesAAAAASUVORK5CYII=",P="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOTSURBVHgB7VdJaFRBEH3VfyYTMa4QGYxCjBCXgyLkoKgILiB6EBE8eVTvoqh48STiCnoRFfGsXjwogrggiIoGNLkYUeOGWTCELBKTSabL+v/Pn+n+07ME4y0Fze+ufl39urq6pgaYllCo3CRfQzMS3nqtuF5pVSNowqREZ2SLrsxEtjV1AO8xGRJ8A8sYyVvSXS0jByzScQkTpp5zH+okjG+m/fhWkcTYVSxPeomXMjUXUy2McXFmCx3ItJvqRByXpJoH0Jh6AjnzzHybGSuIIhcBykTwlZrd0NQoDX5jR4PR2PxyTi9fZhtrrmVWy3Dd227ua5HQoM3CElGDo8Xn81+d0+vAkIVFDKt1Yqe5r3UdwrbJGanebKBJ1iXrBJQFhr4AP57IEUy09Bs2ArOaBJ8CRrqB3jfhNyYMbihJAlmkQDEaLcdAaw6BUrNtQz2t4If7hNB3YOYi0NbroMWbbMzYAPj1GaDtMlAIAb9bZ+KUPfDDJXe/fmvcBbX2ZBGB4NzpFtn4ZuB62nW3iECASc2F2ngatHQPLLsgVdoTOlhaMCInLCe0cB14zgrQ/JVlcahNh0EaCdvetkhoreykqKtIkPNWVcYEAVs63cZigmySjMp5mpKVEOGr0FZUlCERPCGyx9VsUBFEZb0ai4kgaCZFIoyjSiQQI1EmJsDKXshVxES1RCMSDpNFMYFYTEwJCfNAXLzGzpi+J4xLpqo8USVGU6EAiAXSv3uiypjg3HVwRKokibzbuDCOZHQQ3PcZflKlhjXGGsPgRAbc3wn8GQQtaAZmzCtg8mSLPefwhFEV+T/JP9ug7x0Hd78VQxMhsVpJx2sPQm05mieafXIR/OqKEOhH+PsTklW7LzueqE3EGk2cqH/IxNvyk3X14JEBMTAOl6gtQq73o2TNxeDnl5xJw79/qp0jJduQqX6cPNW31ekJMfHbdC8P9zmZR6IfnQeWbAC/uwPyPCcuSNajw9ac1pwxMRYJeQ1dQSFibM1FRvOEEVz0p2eiTATFjIkv1/eIOk2byj6aus9F5Rty43DPojLPf9Y5jHstDH3YzzKeug4WnY4yR9IdRNyM/yQSIV9T53qWmDr7OgST0d5eULYVjkp8ChgMiUd2xNXuPz/H043jY/RYuk0oJa6AKbs/t9ck1V462/XBZaqkjB1Or/QYLVLCL5S7T0qRW0WOzluWfVVGUsavrMcvUhe6OzAtFeQvBzyhnfEyHm0AAAAASUVORK5CYII=",l="bookList";let i={};e.booksPart.addEventListener("click",M);e.popupEl.firstElementChild.addEventListener("click",x);e.popupEl.parentNode.addEventListener("click",f);document.addEventListener("keydown",f);function f(t){(t.target===t.currentTarget||t.key==="Escape")&&(e.popupEl.parentNode.classList.toggle("is-hidden"),e.body.classList.toggle("popup-modal-open"))}function x(t){t.target.closest(".popup-btn-close")===e.popupEl.firstElementChild&&(e.popupEl.parentNode.classList.toggle("is-hidden"),e.body.classList.toggle("popup-modal-open"))}function M(t){if(!t.target.closest("LI")===t.target.closest(".book-cards-list-item")||t.target.closest("LI")===null)return;t.preventDefault(),e.popupEl.parentNode.classList.toggle("is-hidden"),e.body.classList.toggle("popup-modal-open");const o=t.target.closest("LI").dataset.bookId;B(o).then(s=>{i=s,u(i);let a=j(i);Q(a)})}async function g(t){const o=await localStorage.getItem(t);return await JSON.parse(o)}async function L(t,o){try{await localStorage.setItem(t,JSON.stringify(o))}catch(s){console.log(s.message)}}async function u(t){try{(await g(l).then(a=>a||[]).catch(a=>{console.log(a.message)})).some(({_id:a})=>a===t._id)?(e.popupEl.lastElementChild.previousElementSibling.removeEventListener("click",b),e.popupEl.lastElementChild.previousElementSibling.addEventListener("click",m),e.popupEl.lastElementChild.previousElementSibling.textContent="remove from the shopping list",e.popupEl.lastElementChild.hidden=!1):(e.popupEl.lastElementChild.previousElementSibling.removeEventListener("click",m),e.popupEl.lastElementChild.previousElementSibling.addEventListener("click",b),e.popupEl.lastElementChild.previousElementSibling.textContent="Add to shopping list",e.popupEl.lastElementChild.hidden=!0)}catch(o){console.log(o.message)}}function Q(t){e.popupEl.firstElementChild.nextElementSibling.innerHTML=t}function j({book_image:t,title:o,author:s,description:a,buy_links:[n,r]}){return`<img src="${t}" class="popup-image" />
            <div class ="info-book">
            <h2 class="popup-book-title">${o}</h2>
            <p class="popup-book-author">${s}</p>
            <p class="popup-book-description">${a}</p>
              <div class="popup-links">
                <a href="${n.url}" target="_blank">
                  <img class="popup-link-img" src="${w}" alt="link to amazon" />
                </a>
                <a href="${r.url}" target="_blank">
                  <img class="popup-link-img" src="${P}" alt="link to apple books" />
                </a>
              </div>
            </div>
            `}async function b(){try{const t=await g(l).then(o=>o||[]).catch(o=>{console.log(o.message)});t.push(i),L(l,t),u(i)}catch(t){console.log(t.message)}}async function m(){try{const o=(await g(l)).filter(s=>s._id!==i._id);L(l,o),u(i)}catch(t){console.log(t.message)}}window.onscroll=()=>{R()};function R(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("back-to-up").classList.remove("is-hidden"):document.getElementById("back-to-up").classList.add("is-hidden")}(()=>{function t(){window.scrollTo({top:0,behavior:"smooth"})}document.querySelector("#back-to-up").addEventListener("click",t)})();
//# sourceMappingURL=commonHelpers.js.map
