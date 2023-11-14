import{g as y,r as e,a as E,b as L,c as S}from"./assets/sign-in-c985d0e5.js";import{n as l}from"./assets/vendor-01ef8b03.js";const r="/project-Piznayk0/assets/empty-bin@1x-a278a77f.png",d="/project-Piznayk0/assets/empty-bin@2x-1268a808.png";l.Notify.init({width:"300px",position:"center-center",fontSize:"16px",fontFamily:"DM Sans",showOnlyTheLastOne:!0,clickToClose:!0,timeout:5e3,failure:{notiflixIconColor:"#111",background:"#4f2ee8",textColor:"#fff"}});y().then(o=>{if(o.length===0){e.booksPart.insertAdjacentHTML("afterbegin",`<div class="books-not-found-wrapper">
                <p class="books-not-found-message">No books found😒<br> Try other categories😉</p>
                <img
                class="books-not-found-img"
                srcset="${r} 1x, ${d} 2x"
                src="${r}"
                alt="Books not found"
                height="241"
                width="332"
                />
                </div>`);return}e.booksPart.insertAdjacentHTML("beforeend",`<h2 class="books-part-title">Best Sellers
                <span class="books-part-title-span"> Books</span>
            </h2>
            <div class="book-categories-container">
            ${v(o)}
            </div>`)}).catch(o=>{console.error(o),l.Notify.failure("Oops! Something went wrong! Try reloading the page!")});e.booksPart.addEventListener("click",$);function $(o){if(o.target.nodeName!=="BUTTON")return;window.scrollTo(0,0);const a=o.target.parentElement.querySelector(".book-category-title").textContent;E(a).then(s=>{if(s.length===0){e.booksPart.innerHTML=`${g(a)}
                <div class="book-category-wrapper">
                <div class="books-not-found-wrapper">
                <p class="books-not-found-message">No books found😒<br> Try other categories😉</p>
                <img
                class="books-not-found-img"
                srcset="${r} 1x, ${d} 2x"
                src="${r}"
                alt="Books not found"
                height="241"
                width="332"
                />
                </div>                                
                </div>`;return}e.booksPart.innerHTML=`${g(a)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${u(s)}                  
                </ul>                             
            </div>`,e.booksPart.querySelectorAll(".book-cards-list-item").forEach(n=>n.style.display="block")}).catch(s=>{console.error(s),l.Notify.failure("Oops! Something went wrong! Try reloading the page!")})}function v(o){return o.map(({list_name:t,books:a})=>`<div class="book-category-container">
                <h3 class="book-category-title">${t}</h3>
                <ul class="book-cards-list">
                ${u(a)}                  
                </ul>
                <button type="button" class="see-more-btn">See more</button>             
            </div>`).join("")}l.Notify.init({width:"300px",position:"center-center",fontSize:"16px",fontFamily:"DM Sans",showOnlyTheLastOne:!0,clickToClose:!0,timeout:5e3,failure:{notiflixIconColor:"#111",background:"#4f2ee8",textColor:"#fff"}});L().then(o=>{e.categoriesList.innerHTML=C(o)}).catch(o=>{console.error(o),l.Notify.failure("Oops! Something went wrong! Try reloading the page!")});e.categoriesList.addEventListener("click",x);function x(o){if(o.target.nodeName!=="LI")return;const t=o.target;if(t.classList.contains("active")){console.log("Repeat click on acrive category - No GET request - Just return");return}window.scrollTo(0,0),t.parentElement.querySelector(".categories-list-item.active").classList.remove("active"),t.classList.add("active");const a=o.target.dataset.categoryName;if(a==="All categories"){y().then(s=>{if(s.length===0){e.booksPart.innerHTML=`<h2 class="books-part-title">Best Sellers
                        <span class="books-part-title-span"> Books</span>
                        </h2>
                        <div class="book-categories-container">
                        <div class="books-not-found-wrapper">
                        <p class="books-not-found-message">No books found😒<br> Try other categories😉</p>
                        <img
                        class="books-not-found-img"
                        srcset="${r} 1x, ${d} 2x"
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
                    ${v(s)}
                    </div>`}).catch(s=>{console.error(s),l.Notify.failure("Oops! Something went wrong! Try reloading the page!")});return}E(a).then(s=>{if(s.length===0){e.booksPart.innerHTML=`${g(a)}
                    <div class="book-category-wrapper">
                    <div class="books-not-found-wrapper">
                    <p class="books-not-found-message">No books found😒<br> Try other categories😉</p>
                    <img
                    class="books-not-found-img"
                    srcset="${r} 1x, ${d} 2x"
                    src="${r}"
                    alt="Books not found"
                    height="241"
                    width="332"
                    />
                    </div>                                
                    </div>`;return}e.booksPart.innerHTML=`${g(a)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${u(s)}                  
                </ul>                             
            </div>`,e.booksPart.querySelectorAll(".book-cards-list-item").forEach(n=>n.style.display="block")}).catch(s=>{console.error(s),l.Notify.failure("Oops! Something went wrong! Try reloading the page!")})}function C(o){const t=o.map(({list_name:a})=>`<li class="categories-list-item" data-category-name="${a}">${a}</li>`).sort((a,s)=>a.localeCompare(s));return t.unshift('<li class="categories-list-item active" data-category-name="All categories">All categories</li>'),t.join("")}function g(o){const t=o.split(" ");if(t.includes("and")){const n=t.indexOf("and"),c=t.slice(0,n+1).join(" "),h=t.slice(n+1).join(" ");return`<h2 class="books-part-title">${c} <span class="books-part-title-span">${h}</span></h2>`}if(t.length>3){const n=t.slice(0,t.length/2).join(" "),c=t.slice(t.length/2).join(" ");return`<h2 class="books-part-title">${n} <span class="books-part-title-span">${c}</span></h2>`}const a=t.pop();return`<h2 class="books-part-title">${t.join(" ")} <span class="books-part-title-span">${a}</span></h2>`}function u(o){return o.map(({_id:t,book_image:a,author:s,title:n})=>`<li class="book-cards-list-item" data-book-id="${t}">
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
        </li>`).join("")}const p="bookList";let i={};e.booksPart.addEventListener("click",B);e.popupEl.firstElementChild.addEventListener("click",N);e.popupEl.parentNode.addEventListener("click",T);document.addEventListener("keydown",T);function T(o){(o.target===o.currentTarget||o.key==="Escape")&&(e.popupEl.parentNode.classList.toggle("is-hidden"),e.body.classList.toggle("popup-modal-open"))}function N(o){o.target.closest(".popup-btn-close")===e.popupEl.firstElementChild&&(e.popupEl.parentNode.classList.toggle("is-hidden"),e.body.classList.toggle("popup-modal-open"))}function B(o){if(o.target===o.currentTarget)return;o.preventDefault(),e.popupEl.parentNode.classList.toggle("is-hidden"),e.body.classList.toggle("popup-modal-open");const t=o.target.closest("LI").dataset.bookId||o.target.parentNode.dataset.bookId;S(t).then(a=>{i=a,m(i);let s=M(i);P(s)})}async function k(o){const t=await localStorage.getItem(o);return await JSON.parse(t)}async function w(o,t){try{await localStorage.setItem(o,JSON.stringify(t))}catch(a){console.log(a.message)}}async function m(o){try{(await k(p).then(s=>s||[]).catch(s=>{console.log(s.message)})).some(({_id:s})=>s===o._id)?(e.popupEl.lastElementChild.previousElementSibling.removeEventListener("click",b),e.popupEl.lastElementChild.previousElementSibling.addEventListener("click",f),e.popupEl.lastElementChild.previousElementSibling.textContent="remove from the shopping list",e.popupEl.lastElementChild.hidden=!1):(e.popupEl.lastElementChild.previousElementSibling.removeEventListener("click",f),e.popupEl.lastElementChild.previousElementSibling.addEventListener("click",b),e.popupEl.lastElementChild.previousElementSibling.textContent="Add to shopping list",e.popupEl.lastElementChild.hidden=!0)}catch(t){console.log(t.message)}}function P(o){e.popupEl.firstElementChild.nextElementSibling.innerHTML=o}function M({book_image:o,title:t,author:a,description:s,buy_links:[n,c]}){return`<img src="${o}" class="popup-image" />
            <div class ="info-book">
            <h2 class="popup-book-title">${t}</h2>
            <p class="popup-book-author">${a}</p>
            <p class="popup-book-description">${s}</p>
            <div class="popup-links">
                <a href="${n.url}" target="_blank"><img class="popup-link-img" src="./img/modal-shop/amazon@1x.png"
                        srcset="./img/modal-shop/amazon@1x.png, ./img/modal-shop/amazon@2x.png"
                        alt="link to amazon" /></a>
                <a href="${c.url}" target="_blank"><img class="popup-link-img"  src="./img/modal-shop/apple-books@1x.png"
                        srcset="./img/modal-shop/apple-books@1x.png, ./img/modal-shop/apple-books@2x.png"
                        alt="link to apple books" /></a>
            </div>
            </div>
            `}async function b(){try{const o=await k(p).then(t=>t||[]).catch(t=>{console.log(t.message)});o.push(i),w(p,o),m(i)}catch(o){console.log(o.message)}}async function f(){try{const t=(await k(p)).filter(a=>a._id!==i._id);w(p,t),m(i)}catch(o){console.log(o.message)}}window.onscroll=()=>{O()};function O(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("back-to-up").classList.remove("is-hidden"):document.getElementById("back-to-up").classList.add("is-hidden")}(()=>{function o(){window.scrollTo({top:0,behavior:"smooth"})}document.querySelector("#back-to-up").addEventListener("click",o)})();
//# sourceMappingURL=commonHelpers.js.map
