import"./assets/sign-in-3895db2b.js";import{P as g}from"./assets/vendor-c1cf73b3.js";const a=JSON.parse(localStorage.getItem("bookList"))||[],i=3,r=a.length>i,m={totalItems:a.length,itemsPerPage:i,visiblePages:4,page:1};r&&new g("pagination",m).on("afterMove",s=>{const n=s.page;console.log(s);const e=(n-1)*i,c=e+i;p(e,c)});const d=new g("pagination",m),l=document.querySelector(".shopping-list");function p(t,s){const e=a.slice(t,s).map(o=>`
      <li class="shopping-item" id="${o._id}">
        <div class="shopping-card">
          <div class="shopping-image">
            <img src="${o.book_image}" alt="${o.title}" class="shopping-image">
          </div>
          <div class="shopping-info">
            <h2 class="book-title">${o.title}</h2>
            <p class="book-category">${o.publisher}</p>
            <p class="book-desc">${o.description}</p>
            <p class="book-author">${o.author}</p>
          </div>
          <button class="delete-book">
            <svg class="trash-delete">
              <use href="./img/icons.svg#icon-trash"></use>
            </svg>
          </button>
          <div class="extra-logo">
 ${h(o.buy_links)}
          </div>
        </div>
      </li>

    `).join(""),c=document.querySelector(".shopping-title");c.style.paddingBottom="40px",l.innerHTML=e}function h(t){const s=t.find(e=>e.name==="Amazon"),n=t.find(e=>e.name==="Apple Books");return`
    <a href="${s.url}" target="_blank">
      <img class="amazon" src="./img/shopping-list/amazon.svg" alt="amazon" />
    </a>
    <a href="${n.url}" target="_blank">
      <img class="apple" src="./img/shopping-list/apple-books.svg" alt="apple" />
    </a>
  `}d.on("afterMove",t=>{const n=(t.page-1)*i,e=n+i;p(n,e)});p(0,i);l.addEventListener("click",u);function u(t){if(t.target.classList.contains("delete-book")||t.target.classList.contains("trash-delete")){const s=t.target.closest(".shopping-item");if(s){const n=s.id;l.removeChild(s),f(n)}}}function f(t){const n=(JSON.parse(localStorage.getItem("bookList"))||a).filter(e=>e._id!==t);localStorage.setItem("bookList",JSON.stringify(n))}if(a.length===0||!r){const t=document.querySelector("#pagination");t.style.display="none"}if(a.length===0){let e=function(){window.innerWidth>=768?n.style.paddingBottom="140px":n.style.paddingBottom="120px"};const t=document.querySelector("#pagination");t.style.display="none";const s=`
      <div class="container-none-card">
        <p class="shopping-text-none">
          This page is empty, add some books and proceed to order.
        </p>
        <img
          class="image-big"
          src="../img/shopping-list/empty-bin@2x.png"
          alt="empty list"
        />
        <img
          class="image-small"
          src="../img/shopping-list/empty-bin@1x.png"
          alt="empty list"
        />
      </div>
  `,n=document.querySelector(".shopping-title");e(),window.addEventListener("resize",e),l.innerHTML=s}
//# sourceMappingURL=commonHelpers2.js.map
