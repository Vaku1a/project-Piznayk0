import{g as w,r as e,a as E,b as T,c as S}from"./assets/header-cbd8d5e5.js";import"./assets/vendor-313c7975.js";w().then(t=>{if(!t||t.length===0){e.booksPart.insertAdjacentHTML("afterbegin",`<div class="books-not-found-wrapper">
                <p class="books-not-found-message">No books were found😒<br> Please, reload the page or try later😉</p>
                <img
                class="books-not-found-img"
                srcset="../img/empty-bin@1x.png 1x, ../img/empty-bin@2x.png 2x"
                src="../img/empty-bin@1x.png"
                alt="Books not found"
                height="241"
                width="332"
                />
                </div>`);return}e.booksPart.insertAdjacentHTML("beforeend",`<h2 class="books-part-title">Best Sellers
                <span class="books-part-title-span"> Books</span>
            </h2>
            <div class="book-categories-container">
            ${v(t)}
            </div>`)}).catch(t=>{console.error(t)});e.booksPart.addEventListener("click",C);function C(t){if(t.target.nodeName!=="BUTTON")return;window.scrollTo(0,0);const a=t.target.parentElement.querySelector(".book-category-title").textContent;E(a).then(s=>{if(!s||s.length===0){e.booksPart.innerHTML=`${p(a)}
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
                </div>`;return}e.booksPart.innerHTML=`${p(a)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${d(s)}                  
                </ul>                             
            </div>`,e.booksPart.querySelectorAll(".book-cards-list-item").forEach(n=>n.style.display="block")}).catch(s=>{console.error(s)})}function v(t){return t.map(({list_name:o,books:a})=>`<div class="book-category-container">
                <h3 class="book-category-title">${o}</h3>
                <ul class="book-cards-list">
                ${d(a)}                  
                </ul>
                <button type="button" class="see-more-btn">See more</button>             
            </div>`).join("")}T().then(t=>{e.categoriesList.innerHTML=P(t)}).catch(t=>{console.error(t)});e.categoriesList.addEventListener("click",M);function M(t){if(t.target.nodeName!=="LI")return;window.scrollTo(0,0);const o=t.target;o.parentElement.querySelector(".categories-list-item.active").classList.remove("active"),o.classList.add("active");const a=t.target.dataset.categoryName;if(a==="All categories"){w().then(s=>{if(!s||s.length===0){e.booksPart.innerHTML=`<h2 class="books-part-title">Best Sellers
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
                        </div>`;return}e.booksPart.innerHTML=`<h2 class="books-part-title">Best Sellers
                    <span class="books-part-title-span"> Books</span>
                    </h2>
                    <div class="book-categories-container">
                    ${v(s)}
                    </div>`}).catch(s=>{console.error(s)});return}E(a).then(s=>{if(!s||s.length===0){e.booksPart.innerHTML=`${p(a)}
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
                    </div>`;return}e.booksPart.innerHTML=`${p(a)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${d(s)}                  
                </ul>                             
            </div>`,e.booksPart.querySelectorAll(".book-cards-list-item").forEach(n=>n.style.display="block")}).catch(s=>{console.error(s)})}function P(t){const o=t.map(({list_name:a})=>`<li class="categories-list-item" data-category-name="${a}">${a}</li>`).sort((a,s)=>a.localeCompare(s));return o.unshift('<li class="categories-list-item active" data-category-name="All categories">All categories</li>'),o.join("")}function p(t){const o=t.split(" ");if(o.includes("and")){const n=o.indexOf("and"),i=o.slice(0,n+1).join(" "),b=o.slice(n+1).join(" ");return`<h2 class="books-part-title">${i} <span class="books-part-title-span">${b}</span></h2>`}if(o.length>3){const n=o.slice(0,o.length/2).join(" "),i=o.slice(o.length/2).join(" ");return`<h2 class="books-part-title">${n} <span class="books-part-title-span">${i}</span></h2>`}const a=o.pop();return`<h2 class="books-part-title">${o.join(" ")} <span class="books-part-title-span">${a}</span></h2>`}function d(t){return t.map(({_id:o,book_image:a,author:s,title:n})=>`<li class="book-cards-list-item" data-book-id="${o}">
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
        </li>`).join("")}const I="/project-Piznayk0/assets/save-the-children@1x-ae1f71a1.png",N="/project-Piznayk0/assets/project-hope@1x-89afa445.png",q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAA3CAYAAAAFdgiqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAUsSURBVHja7JxZaF1FHMZ/MW32xJoaF7Co1VZsNAX7UFwarBaRaLVx3xAfihsYRaW2FqsiaBUREUzdqBstotKCCyoKgkvrlrpV3OpDqNakcWtN0yQ33vjQ79LTw5lzb3PvQ6PfDy4hZ+7MnDnzzX++/5yQstHRUYwpJfv5ERiLylhUxqIyxqIyFpWxqIyxqIxFZSwqYywqY1EZi8oYi8pYVMaiMsaiMhaVsajM/5UJfgT/GQ4CWoE5wAnAVOAAoArIAgNAL/ADsA54D/gIyKS0WQacB7Tk6ftNYH1cVI0pFXYAQwmdNQDlgToDwER9Qgzqe/F261PEvkPRtTpQPqJPVQknaztQmzLWQhjRWBvGUHcUGFb90cBuczFwJ3BMoI1yPdd64GigDfgHeANYBHwbaHcRcAdQk+ce/0oS1bspFZYCr8WuNQGrtDqSHsI9wGnAKSntfgNcB2yLXKsBHgdmBOo8AEwHFgTK1wM/AleWUFS3AkuAyUW00QWsAJ4ao6gywFZFlreBzyML/WTg4cBcpFEOnK0FM0/RLCqoJcBdY9nNchXSwtukhGuVqhMSVZ3Cb1q7LVq5lwJ/RwYzLaXegcBRKeW/qK2WEoqqCWgew6RF6dNYi72vNmAx8A5wlcZ6W+DeMopAfYrs0/X84pwKzAI+jczBMgWTuKC2Afvv60b9LK3gOluigqkB5gOPacE3J3znTwmwFTgHOEPi+S3gm46MbXmLEwS1EnhmvBj1yxWCrxiHEzwIPJjgDeNslochxYP+nrA9NQb8YZm2rldlQ+pj5VtkxuuAmcBc2ZHGwM6ySf3dC9wEVETKh4BHtBUuHU/Z3wKtvGUlaGttwHjOBDoCdYbkIbYnlH2Xx5fUBQw08pa57OqklHY2AWfK8EbnZgbwAnBEIGK1KLLkqFbmNw9YrTEfLhGG/NrrwEZgOXBjQnL1qAQ1UOgE5ESVTdkKk9RdH1Nz/EazefrtlVeJ9nmRvFp1kaLq0iqNc0GKqEaAl4CfE8oOTelrolZ2iPvypOzRZzYE7Ixd/1jR6IZAvSn6WQFcAlwrUVXm6S8DfAGskWjagZsTNNAvL7hcv58YaK89soV2TIikzZMCFc4HXgR69HsVcE2KYcvEMrokXtZEdkRWUQVwoa6bPZOTEMMqf0gJT9LOkwV+1fnU98BnwCe69ofKpwSCSh2wsIB7nKPPHqLqAk4PVGhVeN6gQTQDh+Q5s/gyz00MKWvpB26PhefxdCC7EzhXkTeJBkX1wTztTNbi7Y9trbN0PRTdvgY6tRiT7m0t8IoywHhG2xSZi5KSm8DnJJ7QYWVtRImFeJruAg8E79ZKuzpl39+XqQKeLyC6vg88mVJ+GPDEXvbdq90jdGZXDVymTxpbgfsL3KbLAxEtG01EcqJaAxyvvbuyiIf8Qcw45iOjvZxxKqwy4OACz7pKObaM0v5jSX9rUSirJfx8XK/zsTgrgGfjouqXw9+g1H7uXhjmYeArGcpOdh9kFsoAcItWwUJMGv1KQlYqsegsUbs9Ec+cxpbA9Z/YfXhKWcI/PatVxjNN6WjuReVsRbGNwFvqoFsN9imMRmkLpMLIc32YYArbE85c4pGwifA7rm52vdxMOhOaqrQ9tPJXBdLmGna9WysmK92sbGv+GOpm5cl65G17It6rFTiuBL7w6QK/O1s+L846jS8oKmOKwn9PZSwqY1EZi8oYi8pYVMaiMsaiMhaVsaiMsaiMRWUsKmMsKmNRGYvKGIvKWFTGojIWlTGl4t8BADg0BliP4XBzAAAAAElFTkSuQmCC",j="/project-Piznayk0/assets/int-medical-corps@1x-0fc6fb91.png",K="/project-Piznayk0/assets/med-sans-front@1x-f5bbe023.png",z="/project-Piznayk0/assets/razom@1x-df85ab01.png",H="/project-Piznayk0/assets/act-against-hunger@1x-f8c98194.png",F="/project-Piznayk0/assets/world-vision@1x-0a766ac0.png",Y="/project-Piznayk0/assets/sergiy-prytula@1x-407ac924.png",x=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:I},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:N},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:j},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:z},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:H},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:Y},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:q},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:K},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:F}],g=document.getElementById("support-list"),$=document.getElementById("scroll-btn"),h=document.querySelector(".support-btn-icon");let G=1,l=0,B=0;const y=x.length,W=()=>{x.forEach(t=>{const o=`
        <li class="support-list-item">
          <a class="support-list-link" href="${t.url}" target="_blank" aria-label="${t.title}">
            0${G++}<img class="support-img" srcset="${t.img} 1x, ${t.img} 2x" src="${t.img}" alt="${t.title}" />
          </a>
        </li>
      `;g.insertAdjacentHTML("beforeend",o)}),B=g.firstElementChild.clientHeight},O=()=>{let t=window.innerWidth>=768?6:4;l+=t,l>=y&&(l=0),g.scrollTo({top:l*B,behavior:"smooth"}),l+t>=y?h.classList.add("rotate"):h.classList.remove("rotate")};$.addEventListener("click",O);W();const c="bookList";let r={};e.booksPart.addEventListener("click",Q);e.popupBookCardEl.previousElementSibling.addEventListener("click",m);e.popupBookCardEl.parentNode.parentNode.addEventListener("click",m);document.addEventListener("keydown",m);function m(t){(t.target===t.currentTarget||t.key==="Escape")&&(e.popupBookCardEl.parentNode.parentNode.classList.toggle("is-hidden"),e.body.classList.toggle("modal-open"))}function Q(t){t.preventDefault(),e.popupBookCardEl.parentNode.parentNode.classList.toggle("is-hidden"),e.body.classList.toggle("modal-open"),S(t.target.dataset.bookId).then(o=>{r=o,k(r);let a=V(r);U(a)})}async function u(t){const o=await localStorage.getItem(t);return await JSON.parse(o)}async function L(t,o){try{await localStorage.setItem(t,JSON.stringify(o))}catch(a){console.log(a.message)}}async function k(t){try{(await u(c).then(s=>s||[]).catch(s=>{console.log(s.message)})).some(({_id:s})=>s===t._id)?(e.popupBookCardEl.nextElementSibling.removeEventListener("click",A),e.popupBookCardEl.nextElementSibling.addEventListener("click",f),e.popupBookCardEl.nextElementSibling.textContent="remove from the shopping list",e.popupBookCardEl.nextElementSibling.nextElementSibling.hidden=!1):(e.popupBookCardEl.nextElementSibling.removeEventListener("click",f),e.popupBookCardEl.nextElementSibling.addEventListener("click",A),e.popupBookCardEl.nextElementSibling.textContent="Add to shopping list",e.popupBookCardEl.nextElementSibling.nextElementSibling.hidden=!0)}catch(o){console.log(o.message)}}function U(t){e.popupBookCardEl.innerHTML=t}function V({book_image:t,title:o,author:a,description:s,buy_links:[n,i]}){return`<img src="${t}" class="popup-image" />
            <h2 class="popup-book-title">${o}</h2>
            <p class="popup-book-author">${a}</p>
            <p class="popup-book-description">${s}</p>
            <div class="popup-links">
                <a href="${n.url}" target="_blank"><img class="popup-link-img" src="./img/modal-shop/amazon@1x.png"
                        srcset="./img/modal-shop/amazon@1x.png, ./img/modal-shop/amazon@2x.png"
                        alt="link to amazon" /></a>
                <a href="${i.url}" target="_blank"><img class="popup-link-img"  src="./img/modal-shop/apple-books@1x.png"
                        srcset="./img/modal-shop/apple-books@1x.png, ./img/modal-shop/apple-books@2x.png"
                        alt="link to apple books" /></a>
            </div>
            `}async function A(){try{const t=await u(c).then(o=>o||[]).catch(o=>{console.log(o.message)});t.push(r),L(c,t),k(r)}catch(t){console.log(t.message)}}async function f(){try{const o=(await u(c)).filter(a=>a._id!==r._id);L(c,o),k(r)}catch(t){console.log(t.message)}}window.onscroll=()=>{R()};function R(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("back-to-up").classList.remove("is-hidden"):document.getElementById("back-to-up").classList.add("is-hidden")}(()=>{function t(){window.scrollTo({top:0,behavior:"smooth"})}document.querySelector("#back-to-up").addEventListener("click",t)})();(()=>{e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-hidden")}})();
//# sourceMappingURL=commonHelpers.js.map
