import{b as a}from"./vendor-63749fbb.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();const h="/category-list",w="/top-books",b="/category/?category=",E="/";a.defaults.baseURL="https://books-backend.p.goit.global/books";async function z(){return(await a.get(`${h}`)).data}async function N(){return(await a.get(`${w}`)).data}async function W(e){return(await a.get(`${b}${e}`)).data}async function U(e){return(await a.get(`${E}${e}`)).data}const t={body:document.querySelector("body"),mobileMenu:document.querySelector(".js-menu-container"),openMenuBtn:document.querySelector(".js-open-menu"),closeMenuBtn:document.querySelector(".js-close-menu"),toggleEl:document.querySelector(".header-toggle-bg"),categoriesList:document.querySelector(".categories-list"),booksPart:document.querySelector(".books-part"),booksCategoryContainer:document.querySelector(".categories-list"),popupEl:document.querySelector(".popup"),popupBookCardEl:document.querySelector(".popup-create-markup"),shoppingList:document.querySelector(".shopping-list"),openModalBtn:document.querySelectorAll("[data-form-open]"),closeModalBtn:document.querySelector("[data-form-close]"),modal:document.querySelector("[data-form]"),formEl:document.querySelector(".js-form")};t.openMenuBtn.addEventListener("click",k);t.closeMenuBtn.addEventListener("click",L);function k(){if(t.mobileMenu.classList.contains("is-hidden")){t.mobileMenu.classList.remove("is-hidden"),t.closeMenuBtn.classList.remove("is-hidden"),t.openMenuBtn.classList.add("is-hidden"),t.body.classList.add("none-scroll");return}}function L(){t.mobileMenu.classList.add("is-hidden"),t.closeMenuBtn.classList.add("is-hidden"),t.openMenuBtn.classList.remove("is-hidden"),t.body.classList.remove("none-scroll")}t.toggleEl.addEventListener("click",B);function B(e){t.body.classList.toggle("body-dark-theme"),localStorage.setItem("darkTheme",t.body.classList.contains("body-dark-theme"))}localStorage.getItem("darkTheme")==="true"&&t.body.classList.add("body-dark-theme");const Q="/project-Piznayk0/assets/empty-bin@1x-a278a77f.png",R="/project-Piznayk0/assets/empty-bin@2x-1268a808.png",v="/project-Piznayk0/assets/save-the-children@1x-ae1f71a1.png",M="/project-Piznayk0/assets/project-hope@1x-89afa445.png",q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAA3CAYAAAAFdgiqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAUsSURBVHja7JxZaF1FHMZ/MW32xJoaF7Co1VZsNAX7UFwarBaRaLVx3xAfihsYRaW2FqsiaBUREUzdqBstotKCCyoKgkvrlrpV3OpDqNakcWtN0yQ33vjQ79LTw5lzb3PvQ6PfDy4hZ+7MnDnzzX++/5yQstHRUYwpJfv5ERiLylhUxqIyxqIyFpWxqIyxqIxFZSwqYywqY1EZi8oYi8pYVMaiMsaiMhaVsajM/5UJfgT/GQ4CWoE5wAnAVOAAoArIAgNAL/ADsA54D/gIyKS0WQacB7Tk6ftNYH1cVI0pFXYAQwmdNQDlgToDwER9Qgzqe/F261PEvkPRtTpQPqJPVQknaztQmzLWQhjRWBvGUHcUGFb90cBuczFwJ3BMoI1yPdd64GigDfgHeANYBHwbaHcRcAdQk+ce/0oS1bspFZYCr8WuNQGrtDqSHsI9wGnAKSntfgNcB2yLXKsBHgdmBOo8AEwHFgTK1wM/AleWUFS3AkuAyUW00QWsAJ4ao6gywFZFlreBzyML/WTg4cBcpFEOnK0FM0/RLCqoJcBdY9nNchXSwtukhGuVqhMSVZ3Cb1q7LVq5lwJ/RwYzLaXegcBRKeW/qK2WEoqqCWgew6RF6dNYi72vNmAx8A5wlcZ6W+DeMopAfYrs0/X84pwKzAI+jczBMgWTuKC2Afvv60b9LK3gOluigqkB5gOPacE3J3znTwmwFTgHOEPi+S3gm46MbXmLEwS1EnhmvBj1yxWCrxiHEzwIPJjgDeNslochxYP+nrA9NQb8YZm2rldlQ+pj5VtkxuuAmcBc2ZHGwM6ySf3dC9wEVETKh4BHtBUuHU/Z3wKtvGUlaGttwHjOBDoCdYbkIbYnlH2Xx5fUBQw08pa57OqklHY2AWfK8EbnZgbwAnBEIGK1KLLkqFbmNw9YrTEfLhGG/NrrwEZgOXBjQnL1qAQ1UOgE5ESVTdkKk9RdH1Nz/EazefrtlVeJ9nmRvFp1kaLq0iqNc0GKqEaAl4CfE8oOTelrolZ2iPvypOzRZzYE7Ixd/1jR6IZAvSn6WQFcAlwrUVXm6S8DfAGskWjagZsTNNAvL7hcv58YaK89soV2TIikzZMCFc4HXgR69HsVcE2KYcvEMrokXtZEdkRWUQVwoa6bPZOTEMMqf0gJT9LOkwV+1fnU98BnwCe69ofKpwSCSh2wsIB7nKPPHqLqAk4PVGhVeN6gQTQDh+Q5s/gyz00MKWvpB26PhefxdCC7EzhXkTeJBkX1wTztTNbi7Y9trbN0PRTdvgY6tRiT7m0t8IoywHhG2xSZi5KSm8DnJJ7QYWVtRImFeJruAg8E79ZKuzpl39+XqQKeLyC6vg88mVJ+GPDEXvbdq90jdGZXDVymTxpbgfsL3KbLAxEtG01EcqJaAxyvvbuyiIf8Qcw45iOjvZxxKqwy4OACz7pKObaM0v5jSX9rUSirJfx8XK/zsTgrgGfjouqXw9+g1H7uXhjmYeArGcpOdh9kFsoAcItWwUJMGv1KQlYqsegsUbs9Ec+cxpbA9Z/YfXhKWcI/PatVxjNN6WjuReVsRbGNwFvqoFsN9imMRmkLpMLIc32YYArbE85c4pGwifA7rm52vdxMOhOaqrQ9tPJXBdLmGna9WysmK92sbGv+GOpm5cl65G17It6rFTiuBL7w6QK/O1s+L846jS8oKmOKwn9PZSwqY1EZi8oYi8pYVMaiMsaiMhaVsaiMsaiMRWUsKmMsKmNRGYvKGIvKWFTGojIWlTGl4t8BADg0BliP4XBzAAAAAElFTkSuQmCC",S="/project-Piznayk0/assets/int-medical-corps@1x-0fc6fb91.png",I="/project-Piznayk0/assets/med-sans-front@1x-f5bbe023.png",x="/project-Piznayk0/assets/razom@1x-df85ab01.png",T="/project-Piznayk0/assets/act-against-hunger@1x-f8c98194.png",K="/project-Piznayk0/assets/world-vision@1x-0a766ac0.png",P="/project-Piznayk0/assets/sergiy-prytula@1x-407ac924.png",m=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:v},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:M},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:S},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:x},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:T},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:P},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:q},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:I},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:K}],l=document.getElementById("support-list"),C=document.getElementById("scroll-btn"),u=document.querySelector(".support-btn-icon");let O=1,r=0,p=0;const g=m.length,Y=()=>{m.forEach(e=>{const n=`
        <li class="support-list-item">
          <a class="support-list-link" href="${e.url}" target="_blank" aria-label="${e.title}">
            0${O++}<img class="support-img" srcset="${e.img} 1x, ${e.img} 2x" src="${e.img}" alt="${e.title}" />
          </a>
        </li>
      `;l.insertAdjacentHTML("beforeend",n)}),p=l.firstElementChild.clientHeight},j=()=>{let e=window.innerWidth>=768?6:4;r+=e,r>=g&&(r=0),l.scrollTo({top:r*p,behavior:"smooth"}),r+e>=g?u.classList.add("rotate"):u.classList.remove("rotate")};C.addEventListener("click",j);Y();(()=>{console.log(123),t.openModalBtn.forEach(n=>n.addEventListener("click",e)),t.closeModalBtn&&t.closeModalBtn.addEventListener("click",e),t.openFormBtn&&t.openFormBtn.addEventListener("click",e);function e(){t.modal.classList.toggle("is-hidden")}})();t.formEl.addEventListener("submit",G);function G(e){e.preventDefault();const n=new FormData(e.target),i=Object.fromEntries(n);localStorage.setItem("User-data",JSON.stringify(i)),t.formEl.reset()}const A=t.formEl.querySelector(".form-main-btn"),f=document.querySelector(".sign-up-btn"),y=document.querySelector(".sign-in-btn");f.addEventListener("click",e=>{e.target.classList.contains("active-btn")||(A.textContent="Sign up",y.classList.remove("active-btn"),e.target.classList.add("active-btn"))});y.addEventListener("click",e=>{e.target.classList.contains("active-btn")||(A.textContent="Sign in",f.classList.remove("active-btn"),e.target.classList.add("active-btn"))});export{W as a,R as b,z as c,U as d,N as g,t as r,Q as s};
//# sourceMappingURL=sign-in-a048ea29.js.map
