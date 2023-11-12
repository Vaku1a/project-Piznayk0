import{g as m,a as u,b as f}from"./assets/api-10e22c30.js";import{n}from"./assets/vendor-00472550.js";const y="bookID";function h(t){try{const o=localStorage.getItem(t);return o===null?void 0:JSON.parse(o)}catch(o){console.error("Get state error: ",o.message)}}h(y);console.log(h(y));const s={body:document.querySelector("body"),categoriesList:document.querySelector(".categories-list"),booksPart:document.querySelector(".books-part"),booksCaregoriesContainer:document.querySelector(".book-categories-container"),shoppingList:document.querySelector(".shopping-list")};n.Notify.init({width:"300px",position:"center-top",fontSize:"16px",fontFamily:"DM Sans",timeout:3e3,failure:{notiflixIconColor:"#111",background:"#4f2ee8",textColor:"#fff"}});m().then(t=>{if(!t||t.length===0){s.booksCaregoriesContainer.insertAdjacentHTML("afterbegin",`<p class="books-not-found-message">No books were found in this category😒<br> Please, try other categories😉</p>
                <img
                class="books-not-found-img"
                srcset="./img/empty-bin@1x.png 1x, ./img/empty-bin@2x.png 2x"
                src="./img/empty-bin@1x.png"
                alt="Books not found"
                height="241"
                width="332"
                />`);return}s.booksCaregoriesContainer.insertAdjacentHTML("beforeend",b(t))}).catch(t=>{console.error(t),n.Notify.failure("Oops! Something went wrong! Try reloading the page!")});s.booksCaregoriesContainer.addEventListener("click",w);function w(t){if(t.target.nodeName!=="BUTTON")return;window.scrollTo(0,0);const r=t.target.parentElement.querySelector(".book-category-title").textContent;u(r).then(e=>{if(!e||e.length===0){s.booksPart.innerHTML=`${c(r)}
                <div class="book-category-wrapper">
                <p class="books-not-found-message">No books were found in this category😒<br> Please, try other categories😉</p>
                <img
                class="books-not-found-img"
                srcset="./img/empty-bin@1x.png 1x, ./img/empty-bin@2x.png 2x"
                src="./img/empty-bin@1x.png"
                alt="Books not found"
                height="241"
                width="332"
                />                                
                </div>`;return}s.booksPart.innerHTML=`${c(r)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${g(e)}                  
                </ul>                             
            </div>`,s.booksPart.querySelectorAll(".book-cards-list-item").forEach(i=>i.style.display="block")}).catch(e=>{console.error(e),n.Notify.failure("Oops! Something went wrong! Try reloading the page!")})}function b(t){return t.map(({list_name:o,books:r})=>`<div class="book-category-container">
                <h2 class="book-category-title">${o}</h2>
                <ul class="book-cards-list">
                ${g(r)}                  
                </ul>
                <button type="button" class="see-more-btn">See more</button>             
            </div>`).join("")}n.Notify.init({width:"300px",position:"center-top",fontSize:"16px",fontFamily:"DM Sans",timeout:3e3,failure:{notiflixIconColor:"#111",background:"#4f2ee8",textColor:"#fff"}});f().then(t=>{s.categoriesList.innerHTML=v(t)}).catch(t=>{console.error(t),n.Notify.failure("Oops! Something went wrong! Try reloading the page!")});s.categoriesList.addEventListener("click",x);function x(t){if(t.target.nodeName!=="LI")return;window.scrollTo(0,0);const o=t.target;o.parentElement.querySelector(".categories-list-item.active").classList.remove("active"),o.classList.add("active");const r=t.target.dataset.categoryName;if(r==="All categories"){m().then(e=>{if(!e||e.length===0){s.booksPart.innerHTML=`<h1 class="books-part-title">Best Sellers
                        <span class="books-part-title-span"> Books</span>
                        </h1>
                        <div class="book-categories-container">
                        <p class="books-not-found-message">No books were found in this category😒<br> Please, try other categories😉</p>
                        <img
                        class="books-not-found-img"
                        srcset="./img/empty-bin@1x.png 1x, ./img/empty-bin@2x.png 2x"
                        src="./img/empty-bin@1x.png"
                        alt="Books not found"
                        height="241"
                        width="332"
                        />
                        </div>`;return}s.booksPart.innerHTML=`<h1 class="books-part-title">Best Sellers
                <span class="books-part-title-span"> Books</span>
                </h1>
                <div class="book-categories-container">
                ${b(e)}
                </div>`}).catch(e=>{console.error(e),n.Notify.failure("Oops! Something went wrong! Try reloading the page!")});return}u(r).then(e=>{if(!e||e.length===0){s.booksPart.innerHTML=`${c(r)}
                <div class="book-category-wrapper">
                <p class="books-not-found-message">No books were found in this category😒<br> Please, try other categories😉</p>
                <img
                class="books-not-found-img"
                srcset="./img/empty-bin@1x.png 1x, ./img/empty-bin@2x.png 2x"
                src="./img/empty-bin@1x.png"
                alt="Books not found"
                height="241"
                width="332"
                />                                
                </div>`;return}s.booksPart.innerHTML=`${c(r)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${g(e)}                  
                </ul>                             
            </div>`,s.booksPart.querySelectorAll(".book-cards-list-item").forEach(i=>i.style.display="block")}).catch(e=>{console.error(e),n.Notify.failure("Oops! Something went wrong! Try reloading the page!")})}function v(t){const o=t.map(({list_name:r})=>`<li class="categories-list-item" data-category-name="${r}">${r}</li>`).sort((r,e)=>r.localeCompare(e));return o.unshift('<li class="categories-list-item active" data-category-name="All categories">All categories</li>'),o.join("")}function c(t){const o=t.split(" "),r=o.pop();return`<h1 class="books-part-title">${o.join(" ")} <span class="books-part-title-span">${r}</span></h1>`}function g(t){return t.map(({_id:o,book_image:r,author:e,title:i})=>`<li class="book-cards-list-item">
            <img
            class="book-card-img"
            src="${r}"
            alt="${i}"
            data-book-id="${o}"
            loading="lazy"
            />
            <p class="book-card-title">${i}</p>
            <p class="book-card-author">${e}</p>
        </li>`).join("")}const T="/project-Piznayk0/assets/save-the-children@1x-ae1f71a1.png",E="/project-Piznayk0/assets/project-hope@1x-89afa445.png",S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAA3CAYAAAAFdgiqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAUsSURBVHja7JxZaF1FHMZ/MW32xJoaF7Co1VZsNAX7UFwarBaRaLVx3xAfihsYRaW2FqsiaBUREUzdqBstotKCCyoKgkvrlrpV3OpDqNakcWtN0yQ33vjQ79LTw5lzb3PvQ6PfDy4hZ+7MnDnzzX++/5yQstHRUYwpJfv5ERiLylhUxqIyxqIyFpWxqIyxqIxFZSwqYywqY1EZi8oYi8pYVMaiMsaiMhaVsajM/5UJfgT/GQ4CWoE5wAnAVOAAoArIAgNAL/ADsA54D/gIyKS0WQacB7Tk6ftNYH1cVI0pFXYAQwmdNQDlgToDwER9Qgzqe/F261PEvkPRtTpQPqJPVQknaztQmzLWQhjRWBvGUHcUGFb90cBuczFwJ3BMoI1yPdd64GigDfgHeANYBHwbaHcRcAdQk+ce/0oS1bspFZYCr8WuNQGrtDqSHsI9wGnAKSntfgNcB2yLXKsBHgdmBOo8AEwHFgTK1wM/AleWUFS3AkuAyUW00QWsAJ4ao6gywFZFlreBzyML/WTg4cBcpFEOnK0FM0/RLCqoJcBdY9nNchXSwtukhGuVqhMSVZ3Cb1q7LVq5lwJ/RwYzLaXegcBRKeW/qK2WEoqqCWgew6RF6dNYi72vNmAx8A5wlcZ6W+DeMopAfYrs0/X84pwKzAI+jczBMgWTuKC2Afvv60b9LK3gOluigqkB5gOPacE3J3znTwmwFTgHOEPi+S3gm46MbXmLEwS1EnhmvBj1yxWCrxiHEzwIPJjgDeNslochxYP+nrA9NQb8YZm2rldlQ+pj5VtkxuuAmcBc2ZHGwM6ySf3dC9wEVETKh4BHtBUuHU/Z3wKtvGUlaGttwHjOBDoCdYbkIbYnlH2Xx5fUBQw08pa57OqklHY2AWfK8EbnZgbwAnBEIGK1KLLkqFbmNw9YrTEfLhGG/NrrwEZgOXBjQnL1qAQ1UOgE5ESVTdkKk9RdH1Nz/EazefrtlVeJ9nmRvFp1kaLq0iqNc0GKqEaAl4CfE8oOTelrolZ2iPvypOzRZzYE7Ixd/1jR6IZAvSn6WQFcAlwrUVXm6S8DfAGskWjagZsTNNAvL7hcv58YaK89soV2TIikzZMCFc4HXgR69HsVcE2KYcvEMrokXtZEdkRWUQVwoa6bPZOTEMMqf0gJT9LOkwV+1fnU98BnwCe69ofKpwSCSh2wsIB7nKPPHqLqAk4PVGhVeN6gQTQDh+Q5s/gyz00MKWvpB26PhefxdCC7EzhXkTeJBkX1wTztTNbi7Y9trbN0PRTdvgY6tRiT7m0t8IoywHhG2xSZi5KSm8DnJJ7QYWVtRImFeJruAg8E79ZKuzpl39+XqQKeLyC6vg88mVJ+GPDEXvbdq90jdGZXDVymTxpbgfsL3KbLAxEtG01EcqJaAxyvvbuyiIf8Qcw45iOjvZxxKqwy4OACz7pKObaM0v5jSX9rUSirJfx8XK/zsTgrgGfjouqXw9+g1H7uXhjmYeArGcpOdh9kFsoAcItWwUJMGv1KQlYqsegsUbs9Ec+cxpbA9Z/YfXhKWcI/PatVxjNN6WjuReVsRbGNwFvqoFsN9imMRmkLpMLIc32YYArbE85c4pGwifA7rm52vdxMOhOaqrQ9tPJXBdLmGna9WysmK92sbGv+GOpm5cl65G17It6rFTiuBL7w6QK/O1s+L846jS8oKmOKwn9PZSwqY1EZi8oYi8pYVMaiMsaiMhaVsaiMsaiMRWUsKmMsKmNRGYvKGIvKWFTGojIWlTGl4t8BADg0BliP4XBzAAAAAElFTkSuQmCC",C="/project-Piznayk0/assets/int-medical-corps@1x-0fc6fb91.png",B="/project-Piznayk0/assets/med-sans-front@1x-f5bbe023.png",L="/project-Piznayk0/assets/razom@1x-df85ab01.png",M="/project-Piznayk0/assets/act-against-hunger@1x-f8c98194.png",N="/project-Piznayk0/assets/world-vision@1x-0a766ac0.png",P="/project-Piznayk0/assets/sergiy-prytula@1x-407ac924.png",A=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:T},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:E},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:C},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:L},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:M},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:P},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:S},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:B},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:N}],l=document.getElementById("support-list"),q=document.getElementById("scroll-btn"),p=document.querySelector(".support-btn-icon");let I=1,a=0,k=0;const d=A.length,K=()=>{A.forEach(t=>{const o=`
        <li class="support-list-item">
          <a class="support-list-link" href="${t.url}" target="_blank" aria-label="${t.title}">
            0${I++}<img class="support-img" srcset="${t.img} 1x, ${t.img} 2x" src="${t.img}" alt="${t.title}" />
          </a>
        </li>
      `;l.insertAdjacentHTML("beforeend",o)}),k=l.firstElementChild.clientHeight},z=()=>{let t=window.innerWidth>=768?6:4;a+=t,a>=d&&(a=0),l.scrollTo({top:a*k,behavior:"smooth"}),a+t>=d?p.classList.add("rotate"):p.classList.remove("rotate")};q.addEventListener("click",z);K();
//# sourceMappingURL=commonHelpers.js.map
