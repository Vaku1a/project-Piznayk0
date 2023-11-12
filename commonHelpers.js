import{g as d,r,a as u,b}from"./assets/header-76779679.js";import{n as i}from"./assets/vendor-00472550.js";i.Notify.init({width:"300px",position:"center-top",fontSize:"16px",fontFamily:"DM Sans",timeout:3e3,failure:{notiflixIconColor:"#111",background:"#4f2ee8",textColor:"#fff"}});d().then(t=>{if(!t||t.length===0){r.booksCaregoriesContainer.insertAdjacentHTML("afterbegin",`<p class="books-not-found-message">No books were found in this category😒<br> Please, try other categories😉</p>
                <img
                class="books-not-found-img"
                srcset="../img/empty-bin@1x.png 1x, ../img/empty-bin@2x.png 2x"
                src="../img/empty-bin@1x.png"
                alt="Books not found"
                height="241"
                width="332"
                />`);return}r.booksCaregoriesContainer.insertAdjacentHTML("beforeend",h(t))}).catch(t=>{console.error(t),i.Notify.failure("Oops! Something went wrong! Try reloading the page!")});r.booksCaregoriesContainer.addEventListener("click",f);function f(t){if(t.target.nodeName!=="BUTTON")return;window.scrollTo(0,0);const o=t.target.parentElement.querySelector(".book-category-title").textContent;u(o).then(e=>{if(!e||e.length===0){r.booksPart.innerHTML=`${c(o)}
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
                </div>`;return}r.booksPart.innerHTML=`${c(o)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${g(e)}                  
                </ul>                             
            </div>`,r.booksPart.querySelectorAll(".book-cards-list-item").forEach(n=>n.style.display="block")}).catch(e=>{console.error(e),i.Notify.failure("Oops! Something went wrong! Try reloading the page!")})}function h(t){return t.map(({list_name:s,books:o})=>`<div class="book-category-container">
                <h2 class="book-category-title">${s}</h2>
                <ul class="book-cards-list">
                ${g(o)}                  
                </ul>
                <button type="button" class="see-more-btn">See more</button>             
            </div>`).join("")}i.Notify.init({width:"300px",position:"center-top",fontSize:"16px",fontFamily:"DM Sans",timeout:3e3,failure:{notiflixIconColor:"#111",background:"#4f2ee8",textColor:"#fff"}});b().then(t=>{r.categoriesList.innerHTML=w(t)}).catch(t=>{console.error(t),i.Notify.failure("Oops! Something went wrong! Try reloading the page!")});r.categoriesList.addEventListener("click",k);function k(t){if(t.target.nodeName!=="LI")return;window.scrollTo(0,0);const s=t.target;s.parentElement.querySelector(".categories-list-item.active").classList.remove("active"),s.classList.add("active");const o=t.target.dataset.categoryName;if(o==="All categories"){d().then(e=>{if(!e||e.length===0){r.booksPart.innerHTML=`<h1 class="books-part-title">Best Sellers
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
                        </div>`;return}r.booksPart.innerHTML=`<h1 class="books-part-title">Best Sellers
                <span class="books-part-title-span"> Books</span>
                </h1>
                <div class="book-categories-container">
                ${h(e)}
                </div>`}).catch(e=>{console.error(e),i.Notify.failure("Oops! Something went wrong! Try reloading the page!")});return}u(o).then(e=>{if(!e||e.length===0){r.booksPart.innerHTML=`${c(o)}
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
                </div>`;return}r.booksPart.innerHTML=`${c(o)}
            <div class="book-category-wrapper">
                <ul class="book-cards-list book-cards-list-one-category">
                ${g(e)}                  
                </ul>                             
            </div>`,r.booksPart.querySelectorAll(".book-cards-list-item").forEach(n=>n.style.display="block")}).catch(e=>{console.error(e),i.Notify.failure("Oops! Something went wrong! Try reloading the page!")})}function w(t){const s=t.map(({list_name:o})=>`<li class="categories-list-item" data-category-name="${o}">${o}</li>`).sort((o,e)=>o.localeCompare(e));return s.unshift('<li class="categories-list-item active" data-category-name="All categories">All categories</li>'),s.join("")}function c(t){const s=t.split(" "),o=s.pop();return`<h1 class="books-part-title">${s.join(" ")} <span class="books-part-title-span">${o}</span></h1>`}function g(t){return t.map(({_id:s,book_image:o,author:e,title:n})=>`<li class="book-cards-list-item">
            <img
            class="book-card-img"
            src="${o}"
            alt="${n}"
            data-book-id="${s}"
            loading="lazy"
            />
            <p class="book-card-title">${n}</p>
            <p class="book-card-author">${e}</p>
        </li>`).join("")}const x="/project-Piznayk0/assets/save-the-children@1x-ae1f71a1.png",v="/project-Piznayk0/assets/project-hope@1x-89afa445.png",T="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAA3CAYAAAAFdgiqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAUsSURBVHja7JxZaF1FHMZ/MW32xJoaF7Co1VZsNAX7UFwarBaRaLVx3xAfihsYRaW2FqsiaBUREUzdqBstotKCCyoKgkvrlrpV3OpDqNakcWtN0yQ33vjQ79LTw5lzb3PvQ6PfDy4hZ+7MnDnzzX++/5yQstHRUYwpJfv5ERiLylhUxqIyxqIyFpWxqIyxqIxFZSwqYywqY1EZi8oYi8pYVMaiMsaiMhaVsajM/5UJfgT/GQ4CWoE5wAnAVOAAoArIAgNAL/ADsA54D/gIyKS0WQacB7Tk6ftNYH1cVI0pFXYAQwmdNQDlgToDwER9Qgzqe/F261PEvkPRtTpQPqJPVQknaztQmzLWQhjRWBvGUHcUGFb90cBuczFwJ3BMoI1yPdd64GigDfgHeANYBHwbaHcRcAdQk+ce/0oS1bspFZYCr8WuNQGrtDqSHsI9wGnAKSntfgNcB2yLXKsBHgdmBOo8AEwHFgTK1wM/AleWUFS3AkuAyUW00QWsAJ4ao6gywFZFlreBzyML/WTg4cBcpFEOnK0FM0/RLCqoJcBdY9nNchXSwtukhGuVqhMSVZ3Cb1q7LVq5lwJ/RwYzLaXegcBRKeW/qK2WEoqqCWgew6RF6dNYi72vNmAx8A5wlcZ6W+DeMopAfYrs0/X84pwKzAI+jczBMgWTuKC2Afvv60b9LK3gOluigqkB5gOPacE3J3znTwmwFTgHOEPi+S3gm46MbXmLEwS1EnhmvBj1yxWCrxiHEzwIPJjgDeNslochxYP+nrA9NQb8YZm2rldlQ+pj5VtkxuuAmcBc2ZHGwM6ySf3dC9wEVETKh4BHtBUuHU/Z3wKtvGUlaGttwHjOBDoCdYbkIbYnlH2Xx5fUBQw08pa57OqklHY2AWfK8EbnZgbwAnBEIGK1KLLkqFbmNw9YrTEfLhGG/NrrwEZgOXBjQnL1qAQ1UOgE5ESVTdkKk9RdH1Nz/EazefrtlVeJ9nmRvFp1kaLq0iqNc0GKqEaAl4CfE8oOTelrolZ2iPvypOzRZzYE7Ixd/1jR6IZAvSn6WQFcAlwrUVXm6S8DfAGskWjagZsTNNAvL7hcv58YaK89soV2TIikzZMCFc4HXgR69HsVcE2KYcvEMrokXtZEdkRWUQVwoa6bPZOTEMMqf0gJT9LOkwV+1fnU98BnwCe69ofKpwSCSh2wsIB7nKPPHqLqAk4PVGhVeN6gQTQDh+Q5s/gyz00MKWvpB26PhefxdCC7EzhXkTeJBkX1wTztTNbi7Y9trbN0PRTdvgY6tRiT7m0t8IoywHhG2xSZi5KSm8DnJJ7QYWVtRImFeJruAg8E79ZKuzpl39+XqQKeLyC6vg88mVJ+GPDEXvbdq90jdGZXDVymTxpbgfsL3KbLAxEtG01EcqJaAxyvvbuyiIf8Qcw45iOjvZxxKqwy4OACz7pKObaM0v5jSX9rUSirJfx8XK/zsTgrgGfjouqXw9+g1H7uXhjmYeArGcpOdh9kFsoAcItWwUJMGv1KQlYqsegsUbs9Ec+cxpbA9Z/YfXhKWcI/PatVxjNN6WjuReVsRbGNwFvqoFsN9imMRmkLpMLIc32YYArbE85c4pGwifA7rm52vdxMOhOaqrQ9tPJXBdLmGna9WysmK92sbGv+GOpm5cl65G17It6rFTiuBL7w6QK/O1s+L846jS8oKmOKwn9PZSwqY1EZi8oYi8pYVMaiMsaiMhaVsaiMsaiMRWUsKmMsKmNRGYvKGIvKWFTGojIWlTGl4t8BADg0BliP4XBzAAAAAElFTkSuQmCC",E="/project-Piznayk0/assets/int-medical-corps@1x-0fc6fb91.png",B="/project-Piznayk0/assets/med-sans-front@1x-f5bbe023.png",C="/project-Piznayk0/assets/razom@1x-df85ab01.png",M="/project-Piznayk0/assets/act-against-hunger@1x-f8c98194.png",L="/project-Piznayk0/assets/world-vision@1x-0a766ac0.png",N="/project-Piznayk0/assets/sergiy-prytula@1x-407ac924.png",A=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:x},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:v},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:E},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:C},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:M},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:N},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:T},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:B},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:L}],l=document.getElementById("support-list"),P=document.getElementById("scroll-btn"),p=document.querySelector(".support-btn-icon");let S=1,a=0,y=0;const m=A.length,I=()=>{A.forEach(t=>{const s=`
        <li class="support-list-item">
          <a class="support-list-link" href="${t.url}" target="_blank" aria-label="${t.title}">
            0${S++}<img class="support-img" srcset="${t.img} 1x, ${t.img} 2x" src="${t.img}" alt="${t.title}" />
          </a>
        </li>
      `;l.insertAdjacentHTML("beforeend",s)}),y=l.firstElementChild.clientHeight},q=()=>{let t=window.innerWidth>=768?6:4;a+=t,a>=m&&(a=0),l.scrollTo({top:a*y,behavior:"smooth"}),a+t>=m?p.classList.add("rotate"):p.classList.remove("rotate")};P.addEventListener("click",q);I();
//# sourceMappingURL=commonHelpers.js.map
