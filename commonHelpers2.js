import"./assets/sign-in-f1cdd1c9.js";import"./assets/vendor-313c7975.js";const t=document.querySelector(".shopping-list");t.addEventListener("click",p);function p(i){if(i.target.classList.contains("delete-book")){const s=i.target.closest(".shopping-item");if(s){const e=s.id;t.removeChild(s),a(e)}}}const o=JSON.parse(localStorage.getItem("shoppingItems"))||[];function a(i){const e=(JSON.parse(localStorage.getItem("shoppingItems"))||o).filter(n=>n._id!==i);localStorage.setItem("shoppingItems",JSON.stringify(e))}if(o.length===0){const i=`
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
  `;t.innerHTML=i}else{const i=o.map(s=>` 
  <li class="shopping-item" id ="${s._id}">
    <div class="shopping-card">
      <div class="shopping-image">
        <img src="${s.book_image}" alt="${s.title}" class="shopping-image">
      </div>
      <div class="shopping-info">
        <h2 class="book-title">${s.title}</h2>
        <p class="book-category">${s.publisher}</p>
        <p class="book-desc">${s.description}</p>
        <p class="book-author">${s.author}</p>
      </div>
      <button class="delete-book">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div class="extra-logo">
        <img class="amazon" src="./img/amazon.svg" alt="amazon" />
        <img class="apple" src="./img/apple.svg" alt="apple" />
      </div>
    </div>
  </li>
`).join("");t.innerHTML=i}
//# sourceMappingURL=commonHelpers2.js.map
