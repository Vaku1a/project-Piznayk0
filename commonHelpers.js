import{g as p,a as A,b as y}from"./assets/api-ff1110d2.js";import"./assets/vendor-313c7975.js";const d="bookID";function u(t){try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}}u(d);console.log(u(d));const s={body:document.querySelector("body"),categoriesList:document.querySelector(".categories-list"),booksPart:document.querySelector(".books-part"),booksCaregoriesContainer:document.querySelector(".book-categories-container"),shoppingList:document.querySelector(".shopping-list")};p().then(t=>{s.booksCaregoriesContainer.insertAdjacentHTML("beforeend",m(t))}).catch(t=>{console.error(t)});s.booksCaregoriesContainer.addEventListener("click",b);function b(t){if(t.target.nodeName!=="BUTTON")return;window.scrollTo(0,0);const o=t.target.parentElement.querySelector(".book-category-title").textContent;A(o).then(r=>{s.booksPart.innerHTML=`${k(o)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${i(r)}                  
                </ul>                             
            </div>`}).catch(r=>{console.error(r)})}function m(t){return t.map(({list_name:e,books:o})=>`<div class="book-category-container">
                <h2 class="book-category-title">${e}</h2>
                <ul class="book-cards-list">
                ${i(o)}                  
                </ul>
                <button type="button" class="see-more-btn">See more</button>             
            </div>`).join("")}y().then(t=>{s.categoriesList.innerHTML=E(t)}).catch(t=>{console.error(t)});s.categoriesList.addEventListener("click",f);function f(t){if(t.target.nodeName!=="LI")return;window.scrollTo(0,0);const e=t.target;e.parentElement.querySelector(".categories-list-item.active").classList.remove("active"),e.classList.add("active");const o=t.target.dataset.categoryName;if(o==="All categories"){p().then(r=>{s.booksPart.innerHTML=`<h1 class="books-part-title">Best Sellers
                <span class="books-part-title-span"> Books</span>
                </h1>
                <div class="book-categories-container">
                ${m(r)}
                </div>`}).catch(r=>{console.error(r)});return}A(o).then(r=>{console.log(r),s.booksPart.innerHTML=`${k(o)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${i(r)}                  
                </ul>                             
            </div>`}).catch(r=>{console.error(r)})}function E(t){const e=t.map(({list_name:o})=>`<li class="categories-list-item" data-category-name="${o}">${o}</li>`).sort((o,r)=>o.localeCompare(r));return e.unshift('<li class="categories-list-item active" data-category-name="All categories">All categories</li>'),e.join("")}function k(t){const e=t.split(" "),o=e.pop();return`<h1 class="books-part-title">${e.join(" ")} <span class="books-part-title-span">${o}</span></h1>`}function i(t){return t.map(({_id:e,book_image:o,author:r,title:c})=>`<li class="book-cards-list-item">
            <img
            class="book-card-img"
            src="${o}"
            alt="${c}"
            data-book-id="${e}"
            loading="lazy"
            />
            <p class="book-card-title">${c}</p>
            <p class="book-card-author">${r}</p>
        </li>`).join("")}const v="/project-Piznayk0/assets/save-the-children@1x-ae1f71a1.png",C="/project-Piznayk0/assets/project-hope@1x-89afa445.png",L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAA3CAYAAAAFdgiqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAUsSURBVHja7JxZaF1FHMZ/MW32xJoaF7Co1VZsNAX7UFwarBaRaLVx3xAfihsYRaW2FqsiaBUREUzdqBstotKCCyoKgkvrlrpV3OpDqNakcWtN0yQ33vjQ79LTw5lzb3PvQ6PfDy4hZ+7MnDnzzX++/5yQstHRUYwpJfv5ERiLylhUxqIyxqIyFpWxqIyxqIxFZSwqYywqY1EZi8oYi8pYVMaiMsaiMhaVsajM/5UJfgT/GQ4CWoE5wAnAVOAAoArIAgNAL/ADsA54D/gIyKS0WQacB7Tk6ftNYH1cVI0pFXYAQwmdNQDlgToDwER9Qgzqe/F261PEvkPRtTpQPqJPVQknaztQmzLWQhjRWBvGUHcUGFb90cBuczFwJ3BMoI1yPdd64GigDfgHeANYBHwbaHcRcAdQk+ce/0oS1bspFZYCr8WuNQGrtDqSHsI9wGnAKSntfgNcB2yLXKsBHgdmBOo8AEwHFgTK1wM/AleWUFS3AkuAyUW00QWsAJ4ao6gywFZFlreBzyML/WTg4cBcpFEOnK0FM0/RLCqoJcBdY9nNchXSwtukhGuVqhMSVZ3Cb1q7LVq5lwJ/RwYzLaXegcBRKeW/qK2WEoqqCWgew6RF6dNYi72vNmAx8A5wlcZ6W+DeMopAfYrs0/X84pwKzAI+jczBMgWTuKC2Afvv60b9LK3gOluigqkB5gOPacE3J3znTwmwFTgHOEPi+S3gm46MbXmLEwS1EnhmvBj1yxWCrxiHEzwIPJjgDeNslochxYP+nrA9NQb8YZm2rldlQ+pj5VtkxuuAmcBc2ZHGwM6ySf3dC9wEVETKh4BHtBUuHU/Z3wKtvGUlaGttwHjOBDoCdYbkIbYnlH2Xx5fUBQw08pa57OqklHY2AWfK8EbnZgbwAnBEIGK1KLLkqFbmNw9YrTEfLhGG/NrrwEZgOXBjQnL1qAQ1UOgE5ESVTdkKk9RdH1Nz/EazefrtlVeJ9nmRvFp1kaLq0iqNc0GKqEaAl4CfE8oOTelrolZ2iPvypOzRZzYE7Ixd/1jR6IZAvSn6WQFcAlwrUVXm6S8DfAGskWjagZsTNNAvL7hcv58YaK89soV2TIikzZMCFc4HXgR69HsVcE2KYcvEMrokXtZEdkRWUQVwoa6bPZOTEMMqf0gJT9LOkwV+1fnU98BnwCe69ofKpwSCSh2wsIB7nKPPHqLqAk4PVGhVeN6gQTQDh+Q5s/gyz00MKWvpB26PhefxdCC7EzhXkTeJBkX1wTztTNbi7Y9trbN0PRTdvgY6tRiT7m0t8IoywHhG2xSZi5KSm8DnJJ7QYWVtRImFeJruAg8E79ZKuzpl39+XqQKeLyC6vg88mVJ+GPDEXvbdq90jdGZXDVymTxpbgfsL3KbLAxEtG01EcqJaAxyvvbuyiIf8Qcw45iOjvZxxKqwy4OACz7pKObaM0v5jSX9rUSirJfx8XK/zsTgrgGfjouqXw9+g1H7uXhjmYeArGcpOdh9kFsoAcItWwUJMGv1KQlYqsegsUbs9Ec+cxpbA9Z/YfXhKWcI/PatVxjNN6WjuReVsRbGNwFvqoFsN9imMRmkLpMLIc32YYArbE85c4pGwifA7rm52vdxMOhOaqrQ9tPJXBdLmGna9WysmK92sbGv+GOpm5cl65G17It6rFTiuBL7w6QK/O1s+L846jS8oKmOKwn9PZSwqY1EZi8oYi8pYVMaiMsaiMhaVsaiMsaiMRWUsKmMsKmNRGYvKGIvKWFTGojIWlTGl4t8BADg0BliP4XBzAAAAAElFTkSuQmCC",T="/project-Piznayk0/assets/int-medical-corps@1x-0fc6fb91.png",B="/project-Piznayk0/assets/med-sans-front@1x-f5bbe023.png",q="/project-Piznayk0/assets/razom@1x-df85ab01.png",M="/project-Piznayk0/assets/act-against-hunger@1x-f8c98194.png",I="/project-Piznayk0/assets/world-vision@1x-0a766ac0.png",S="/project-Piznayk0/assets/sergiy-prytula@1x-407ac924.png",w=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:v},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:C},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:T},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:q},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:M},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:S},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:L},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:B},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:I}],n=document.getElementById("support-list"),x=document.getElementById("scroll-btn"),l=document.querySelector(".support-btn-icon");let K=1,a=0,h=0;const g=w.length,P=()=>{w.forEach(t=>{const e=`
        <li class="support-list-item">
          <a class="support-list-link" href="${t.url}" target="_blank" aria-label="${t.title}">
            0${K++}<img class="support-img" srcset="${t.img} 1x, ${t.img} 2x" src="${t.img}" alt="${t.title}" />
          </a>
        </li>
      `;n.insertAdjacentHTML("beforeend",e)}),h=n.firstElementChild.clientHeight},N=()=>{let t=window.innerWidth>=768?6:4;a+=t,a>=g&&(a=0),n.scrollTo({top:a*h,behavior:"smooth"}),a+t>=g?l.classList.add("rotate"):l.classList.remove("rotate")};x.addEventListener("click",N);P();
//# sourceMappingURL=commonHelpers.js.map
