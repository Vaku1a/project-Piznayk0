import{g as y,r as a,a as w,b as S,c as M}from"./assets/header-e3f4bf2a.js";import"./assets/vendor-313c7975.js";y().then(t=>{if(!t||t.length===0){a.booksPart.insertAdjacentHTML("afterbegin",`<div class="books-not-found-wrapper">
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
            ${f(t)}
            </div>`)}).catch(t=>{console.error(t)});a.booksPart.addEventListener("click",P);function P(t){if(t.target.nodeName!=="BUTTON")return;window.scrollTo(0,0);const s=t.target.parentElement.querySelector(".book-category-title").textContent;w(s).then(e=>{if(!e||e.length===0){a.booksPart.innerHTML=`${g(s)}
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
                </div>`;return}a.booksPart.innerHTML=`${g(s)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${k(e)}                  
                </ul>                             
            </div>`,a.booksPart.querySelectorAll(".book-cards-list-item").forEach(n=>n.style.display="block")}).catch(e=>{console.error(e)})}function f(t){return t.map(({list_name:o,books:s})=>`<div class="book-category-container">
                <h3 class="book-category-title">${o}</h3>
                <ul class="book-cards-list">
                ${k(s)}                  
                </ul>
                <button type="button" class="see-more-btn">See more</button>             
            </div>`).join("")}S().then(t=>{a.categoriesList.innerHTML=I(t)}).catch(t=>{console.error(t)});a.categoriesList.addEventListener("click",C);function C(t){if(t.target.nodeName!=="LI")return;window.scrollTo(0,0);const o=t.target;o.parentElement.querySelector(".categories-list-item.active").classList.remove("active"),o.classList.add("active");const s=t.target.dataset.categoryName;if(s==="All categories"){y().then(e=>{if(!e||e.length===0){a.booksPart.innerHTML=`<h2 class="books-part-title">Best Sellers
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
                    </div>`}).catch(e=>{console.error(e)});return}w(s).then(e=>{if(!e||e.length===0){a.booksPart.innerHTML=`${g(s)}
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
                    </div>`;return}a.booksPart.innerHTML=`${g(s)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${k(e)}                  
                </ul>                             
            </div>`,a.booksPart.querySelectorAll(".book-cards-list-item").forEach(n=>n.style.display="block")}).catch(e=>{console.error(e)})}function I(t){const o=t.map(({list_name:s})=>`<li class="categories-list-item" data-category-name="${s}">${s}</li>`).sort((s,e)=>s.localeCompare(e));return o.unshift('<li class="categories-list-item active" data-category-name="All categories">All categories</li>'),o.join("")}function g(t){const o=t.split(" ");if(o.includes("and")){const n=o.indexOf("and"),c=o.slice(0,n+1).join(" "),h=o.slice(n+1).join(" ");return`<h2 class="books-part-title">${c} <span class="books-part-title-span">${h}</span></h2>`}if(o.length>3){const n=o.slice(0,o.length/2).join(" "),c=o.slice(o.length/2).join(" ");return`<h2 class="books-part-title">${n} <span class="books-part-title-span">${c}</span></h2>`}const s=o.pop();return`<h2 class="books-part-title">${o.join(" ")} <span class="books-part-title-span">${s}</span></h2>`}function k(t){return t.map(({_id:o,book_image:s,author:e,title:n})=>`<li class="book-cards-list-item" data-book-id="${o}">
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
        </li>`).join("")}const q="/project-Piznayk0/assets/save-the-children@1x-ae1f71a1.png",N="/project-Piznayk0/assets/project-hope@1x-89afa445.png",j="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAA3CAYAAAAFdgiqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAUsSURBVHja7JxZaF1FHMZ/MW32xJoaF7Co1VZsNAX7UFwarBaRaLVx3xAfihsYRaW2FqsiaBUREUzdqBstotKCCyoKgkvrlrpV3OpDqNakcWtN0yQ33vjQ79LTw5lzb3PvQ6PfDy4hZ+7MnDnzzX++/5yQstHRUYwpJfv5ERiLylhUxqIyxqIyFpWxqIyxqIxFZSwqYywqY1EZi8oYi8pYVMaiMsaiMhaVsajM/5UJfgT/GQ4CWoE5wAnAVOAAoArIAgNAL/ADsA54D/gIyKS0WQacB7Tk6ftNYH1cVI0pFXYAQwmdNQDlgToDwER9Qgzqe/F261PEvkPRtTpQPqJPVQknaztQmzLWQhjRWBvGUHcUGFb90cBuczFwJ3BMoI1yPdd64GigDfgHeANYBHwbaHcRcAdQk+ce/0oS1bspFZYCr8WuNQGrtDqSHsI9wGnAKSntfgNcB2yLXKsBHgdmBOo8AEwHFgTK1wM/AleWUFS3AkuAyUW00QWsAJ4ao6gywFZFlreBzyML/WTg4cBcpFEOnK0FM0/RLCqoJcBdY9nNchXSwtukhGuVqhMSVZ3Cb1q7LVq5lwJ/RwYzLaXegcBRKeW/qK2WEoqqCWgew6RF6dNYi72vNmAx8A5wlcZ6W+DeMopAfYrs0/X84pwKzAI+jczBMgWTuKC2Afvv60b9LK3gOluigqkB5gOPacE3J3znTwmwFTgHOEPi+S3gm46MbXmLEwS1EnhmvBj1yxWCrxiHEzwIPJjgDeNslochxYP+nrA9NQb8YZm2rldlQ+pj5VtkxuuAmcBc2ZHGwM6ySf3dC9wEVETKh4BHtBUuHU/Z3wKtvGUlaGttwHjOBDoCdYbkIbYnlH2Xx5fUBQw08pa57OqklHY2AWfK8EbnZgbwAnBEIGK1KLLkqFbmNw9YrTEfLhGG/NrrwEZgOXBjQnL1qAQ1UOgE5ESVTdkKk9RdH1Nz/EazefrtlVeJ9nmRvFp1kaLq0iqNc0GKqEaAl4CfE8oOTelrolZ2iPvypOzRZzYE7Ixd/1jR6IZAvSn6WQFcAlwrUVXm6S8DfAGskWjagZsTNNAvL7hcv58YaK89soV2TIikzZMCFc4HXgR69HsVcE2KYcvEMrokXtZEdkRWUQVwoa6bPZOTEMMqf0gJT9LOkwV+1fnU98BnwCe69ofKpwSCSh2wsIB7nKPPHqLqAk4PVGhVeN6gQTQDh+Q5s/gyz00MKWvpB26PhefxdCC7EzhXkTeJBkX1wTztTNbi7Y9trbN0PRTdvgY6tRiT7m0t8IoywHhG2xSZi5KSm8DnJJ7QYWVtRImFeJruAg8E79ZKuzpl39+XqQKeLyC6vg88mVJ+GPDEXvbdq90jdGZXDVymTxpbgfsL3KbLAxEtG01EcqJaAxyvvbuyiIf8Qcw45iOjvZxxKqwy4OACz7pKObaM0v5jSX9rUSirJfx8XK/zsTgrgGfjouqXw9+g1H7uXhjmYeArGcpOdh9kFsoAcItWwUJMGv1KQlYqsegsUbs9Ec+cxpbA9Z/YfXhKWcI/PatVxjNN6WjuReVsRbGNwFvqoFsN9imMRmkLpMLIc32YYArbE85c4pGwifA7rm52vdxMOhOaqrQ9tPJXBdLmGna9WysmK92sbGv+GOpm5cl65G17It6rFTiuBL7w6QK/O1s+L846jS8oKmOKwn9PZSwqY1EZi8oYi8pYVMaiMsaiMhaVsaiMsaiMRWUsKmMsKmNRGYvKGIvKWFTGojIWlTGl4t8BADg0BliP4XBzAAAAAElFTkSuQmCC",K="/project-Piznayk0/assets/int-medical-corps@1x-0fc6fb91.png",z="/project-Piznayk0/assets/med-sans-front@1x-f5bbe023.png",H="/project-Piznayk0/assets/razom@1x-df85ab01.png",F="/project-Piznayk0/assets/act-against-hunger@1x-f8c98194.png",Y="/project-Piznayk0/assets/world-vision@1x-0a766ac0.png",$="/project-Piznayk0/assets/sergiy-prytula@1x-407ac924.png",v=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:q},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:N},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:K},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:H},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:F},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:$},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:j},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:z},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:Y}],u=document.getElementById("support-list"),G=document.getElementById("scroll-btn"),b=document.querySelector(".support-btn-icon");let W=1,l=0,x=0;const A=v.length,O=()=>{v.forEach(t=>{const o=`
        <li class="support-list-item">
          <a class="support-list-link" href="${t.url}" target="_blank" aria-label="${t.title}">
            0${W++}<img class="support-img" srcset="${t.img} 1x, ${t.img} 2x" src="${t.img}" alt="${t.title}" />
          </a>
        </li>
      `;u.insertAdjacentHTML("beforeend",o)}),x=u.firstElementChild.clientHeight},Q=()=>{let t=window.innerWidth>=768?6:4;l+=t,l>=A&&(l=0),u.scrollTo({top:l*x,behavior:"smooth"}),l+t>=A?b.classList.add("rotate"):b.classList.remove("rotate")};G.addEventListener("click",Q);O();const d=document.querySelector(".popup-create-markup"),r=document.querySelector(".popup-btn-add-remove"),E=document.querySelector(".popup-add-message"),i="bookList";m(i).then(t=>t||[]).catch(t=>{console.log(t.message)});let p={};E.hidden=!0;a.booksCaregoriesContainer.addEventListener("click",U);d.previousElementSibling.addEventListener("click",()=>d.parentNode.parentNode.classList.toggle("is-hidden"));r.addEventListener("click",T);r.addEventListener("click",L);function U(t){t.preventDefault(),d.parentNode.parentNode.classList.toggle("is-hidden"),M(t.target.dataset.bookId).then(o=>{p=o,R(p);let s=Z(p);V(s)})}async function m(t){const o=await localStorage.getItem(t);return await JSON.parse(o)}async function B(t,o){try{await localStorage.setItem(t,JSON.stringify(o))}catch(s){console.log(s.message)}}async function R(t){try{(await m(i).then(e=>e||[]).catch(e=>{console.log(e.message)})).some(({_id:e})=>e===t._id)?(r.removeEventListener("click",T),r.textContent="remove from the shopping list",E.hidden=!1):(r.removeEventListener("click",L),r.textContent="Add to shopping list")}catch(o){console.log(o.message)}}function V(t){d.innerHTML=t}function Z({book_image:t,title:o,author:s,description:e,buy_links:[n,c]}){return`<img src="${t}" class="popup-image" />
            <h2 class="popup-book-title">${o}</h2>
            <p class="popup-book-author">${s}</p>
            <p class="popup-book-description">${e}</p>
            <div class="popup-links">
                <a href="${n.url}" target="_blank"><img class="popup-link-img" src="./img/modal-shop/amazon@1x.png"
                        srcset="./img/modal-shop/amazon@1x.png, ./img/modal-shop/amazon@2x.png"
                        alt="link to amazon" /></a>
                <a href="${c.url}" target="_blank"><img class="popup-link-img"  src="./img/modal-shop/apple-books@1x.png"
                        srcset="./img/modal-shop/apple-books@1x.png, ./img/modal-shop/apple-books@2x.png"
                        alt="link to apple books" /></a>
            </div>
            `}async function T(){try{const t=await m(i).then(o=>o||[]).catch(o=>{console.log(o.message)});t.push(p),B(i,t),location.reload()}catch(t){console.log(t.message)}}async function L(){try{const o=(await m(i)).filter(s=>s._id!==p._id);B(i,o),location.reload()}catch(t){console.log(t.message)}}window.onscroll=()=>{X()};function X(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("back-to-up").classList.remove("is-hidden"):document.getElementById("back-to-up").classList.add("is-hidden")}(()=>{function t(){window.scrollTo({top:0,behavior:"smooth"})}document.querySelector("#back-to-up").addEventListener("click",t)})();
//# sourceMappingURL=commonHelpers.js.map
