import"./assets/sign-in-0b001ff7.js";import{P as c}from"./assets/vendor-c1cf73b3.js";const a=JSON.parse(localStorage.getItem("bookList"))||[],n=4,g={totalItems:a.length,itemsPerPage:n,visiblePages:4,page:1},r=new c("pagination",g),p=document.querySelector(".shopping-list");function l(s,t){const o=a.slice(s,t).map(e=>`
      <li class="shopping-item" id="${e._id}">
        <div class="shopping-card">
          <div class="shopping-image">
            <img src="${e.book_image}" alt="${e.title}" class="shopping-image">
          </div>
          <div class="shopping-info">
            <h2 class="book-title">${e.title}</h2>
            <p class="book-category">${e.publisher}</p>
            <p class="book-desc">${e.description}</p>
            <p class="book-author">${e.author}</p>
          </div>
          <button class="delete-book">
            <svg class="trash-delete">
              <use href="./img/icons.svg#icon-trash"></use>
            </svg>
          </button>
          <div class="extra-logo">
            <img class="amazon" src="./img/shopping-list/amazon.svg" alt="amazon" />
            <img class="apple" src="./img/shopping-list/apple-books.svg" alt="apple" />
          </div>
        </div>
      </li>

    `).join("");p.innerHTML=o}r.on("afterMove",s=>{const i=(s.page-1)*n,o=i+n;l(i,o)});l(0,n);p.addEventListener("click",m);function m(s){if(s.target.classList.contains("delete-book")||s.target.classList.contains("trash-delete")){const t=s.target.closest(".shopping-item");if(t){const i=t.id;p.removeChild(t),d(i)}}}function d(s){const i=(JSON.parse(localStorage.getItem("bookList"))||a).filter(o=>o._id!==s);localStorage.setItem("bookList",JSON.stringify(i))}if(a.length===0){const s=`
  <div class="shopping-wrap-none">
      <div class="container-none-card">
        <h1 class="shopping-title-none">
          Shopping <span class="shopping-title-span-none">List</span>
        </h1>
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
    </div>
  `;p.innerHTML=s}
//# sourceMappingURL=commonHelpers2.js.map
