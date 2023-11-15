import"./assets/sign-in-eed5bcf9.js";import"./assets/vendor-63749fbb.js";const n=JSON.parse(localStorage.getItem("bookList"))||[],a=document.querySelector(".shopping-list"),c="./img/shopping-list/amazon.png",r="./img/shopping-list/apple-book.png",g=`<svg class="trash-delete" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M6.75 2.25H11.25M2.25 4.5H15.75M14.25 4.5L13.724 12.3895C13.6451 13.5732 13.6057 14.165 13.35 14.6138C13.1249 15.0088 12.7854 15.3265 12.3762 15.5248C11.9115 15.75 11.3183 15.75 10.132 15.75H7.86799C6.68168 15.75 6.08852 15.75 5.62375 15.5248C5.21457 15.3265 4.87507 15.0088 4.64999 14.6138C4.39433 14.165 4.35488 13.5732 4.27596 12.3895L3.75 4.5M7.5 7.875V11.625M10.5 7.875V11.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,d="../../img/shopping-list/empty-bin@2x.png",m="../../img/shopping-list/empty-bin@1x.png";function h(t,o){const s=n.slice(t,o).map(i=>`
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
${g}
          </button>
          <div class="extra-logo">
            ${u(i.buy_links)}
          </div>
        </div>
      </li>
    `).join(""),p=document.querySelector(".shopping-title");p.style.paddingBottom="40px",a.innerHTML=s}function u(t){const o=t.find(s=>s.name==="Amazon"),e=t.find(s=>s.name==="Apple Books");return`
    <a href="${o.url}" target="_blank">
      <img class="amazon" src="${c}" alt="amazon" />
    </a>
    <a href="${e.url}" target="_blank">
      <img class="apple" src="${r}" alt="apple" />
    </a>
  `}h(0,n.length);a.addEventListener("click",k);function k(t){const o=t.target.closest(".delete-book");if(o){const e=o.closest(".shopping-item");if(e){const s=e.id;a.removeChild(e),f(s)}}}function f(t){const e=(JSON.parse(localStorage.getItem("bookList"))||n).filter(s=>s._id!==t);localStorage.setItem("bookList",JSON.stringify(e)),n.length=0,Array.prototype.push.apply(n,e),n.length===0&&(l(),setTimeout(()=>{location.reload()},1e3))}n.length===0&&(l(),window.addEventListener("storage",t=>{t.key==="bookList"&&JSON.parse(t.newValue).length===0&&location.reload()}));function l(){const t=`
      <div class="container-none-card">
        <p class="shopping-text-none">
          This page is empty, add some books and proceed to order.
        </p>
        <img
          class="image-big"
          src="${d}"
          alt="empty list"
        />
        <img
          class="image-small"
          src="${m}"
          alt="empty list"
        />
      </div>
  `,o=document.querySelector(".shopping-title");function e(){window.innerWidth>=768?o.style.paddingBottom="140px":o.style.paddingBottom="120px"}e(),window.addEventListener("resize",e),a.innerHTML=t}
//# sourceMappingURL=commonHelpers2.js.map
