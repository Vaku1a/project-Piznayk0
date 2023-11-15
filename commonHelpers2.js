import"./assets/sign-in-693325ed.js";import"./assets/vendor-313c7975.js";const n=JSON.parse(localStorage.getItem("bookList"))||[],a=document.querySelector(".shopping-list");function p(e,o){const s=n.slice(e,o).map(i=>`
      <li class="shopping-item" id="${i._id}">
        <div class="shopping-card">
          <div class="shopping-image">
            <img src="${i.book_image}" alt="${i.title}" class="shopping-image">
          </div>
          <div class="shopping-info">
            <h2 class="book-title">${i.title}</h2>
            <p class="book-category">${i.publisher}</p>
            <p class="book-desc">${i.description}</p>
            <p class="book-author">${i.author}</p>
          </div>
          <button class="delete-book">
            <svg class="trash-delete" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M6.75 2.25H11.25M2.25 4.5H15.75M14.25 4.5L13.724 12.3895C13.6451 13.5732 13.6057 14.165 13.35 14.6138C13.1249 15.0088 12.7854 15.3265 12.3762 15.5248C11.9115 15.75 11.3183 15.75 10.132 15.75H7.86799C6.68168 15.75 6.08852 15.75 5.62375 15.5248C5.21457 15.3265 4.87507 15.0088 4.64999 14.6138C4.39433 14.165 4.35488 13.5732 4.27596 12.3895L3.75 4.5M7.5 7.875V11.625M10.5 7.875V11.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="extra-logo">
            ${c(i.buy_links)}
          </div>
        </div>
      </li>
    `).join(""),r=document.querySelector(".shopping-title");r.style.paddingBottom="40px",a.innerHTML=s}function c(e){const o=e.find(s=>s.name==="Amazon"),t=e.find(s=>s.name==="Apple Books");return`
    <a href="${o.url}" target="_blank">
      <img class="amazon" src="${amzonImg}" alt="amazon" />
    </a>
    <a href="${t.url}" target="_blank">
      <img class="apple" src="${appleImg}" alt="apple" />
    </a>
  `}p(0,n.length);a.addEventListener("click",d);function d(e){const o=e.target.closest(".delete-book");if(o){const t=o.closest(".shopping-item");if(t){const s=t.id;a.removeChild(t),m(s)}}}function m(e){const t=(JSON.parse(localStorage.getItem("bookList"))||n).filter(s=>s._id!==e);localStorage.setItem("bookList",JSON.stringify(t)),n.length=0,Array.prototype.push.apply(n,t),n.length===0&&(l(),setTimeout(()=>{location.reload()},1e3))}n.length===0&&(l(),window.addEventListener("storage",e=>{e.key==="bookList"&&JSON.parse(e.newValue).length===0&&location.reload()}));function l(){const e=`
      <div class="container-none-card">
        <p class="shopping-text-none">
          This page is empty, add some books and proceed to order.
        </p>
        <img
          class="image-big"
          src="${emptyImg_2x}"
          alt="empty list"
        />
        <img
          class="image-small"
          src="${emptyImg_1x}"
          alt="empty list"
        />
      </div>
  `,o=document.querySelector(".shopping-title");function t(){window.innerWidth>=768?o.style.paddingBottom="140px":o.style.paddingBottom="120px"}t(),window.addEventListener("resize",t),a.innerHTML=e}
//# sourceMappingURL=commonHelpers2.js.map
