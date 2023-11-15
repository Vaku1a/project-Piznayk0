import"./assets/sign-in-05cc8f21.js";import"./assets/vendor-313c7975.js";const n=JSON.parse(localStorage.getItem("bookList"))||[],p=document.querySelector(".shopping-list");function r(t,s){const e=n.slice(t,s),o=`<svg class="trash-delete" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M6.75 2.25H11.25M2.25 4.5H15.75M14.25 4.5L13.724 12.3895C13.6451 13.5732 13.6057 14.165 13.35 14.6138C13.1249 15.0088 12.7854 15.3265 12.3762 15.5248C11.9115 15.75 11.3183 15.75 10.132 15.75H7.86799C6.68168 15.75 6.08852 15.75 5.62375 15.5248C5.21457 15.3265 4.87507 15.0088 4.64999 14.6138C4.39433 14.165 4.35488 13.5732 4.27596 12.3895L3.75 4.5M7.5 7.875V11.625M10.5 7.875V11.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,a=e.map(i=>`
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
${o}
          </button>
          <div class="extra-logo">
            ${g(i.buy_links)}
          </div>
        </div>
      </li>
    `).join(""),l=document.querySelector(".shopping-title");l.style.paddingBottom="40px",p.innerHTML=a}function g(t){const s=t.find(l=>l.name==="Amazon"),e=t.find(l=>l.name==="Apple Books"),o="./img/shopping-list/amazon.png",a="./img/shopping-list/apple-book.png";return`
    <a href="${s.url}" target="_blank">
      <img class="amazon" src="${o}" alt="amazon" />
    </a>
    <a href="${e.url}" target="_blank">
      <img class="apple" src="${a}" alt="apple" />
    </a>
  `}r(0,n.length);p.addEventListener("click",m);function m(t){const s=t.target.closest(".delete-book");if(s){const e=s.closest(".shopping-item");if(e){const o=e.id;p.removeChild(e),d(o)}}}function d(t){const e=(JSON.parse(localStorage.getItem("bookList"))||n).filter(o=>o._id!==t);localStorage.setItem("bookList",JSON.stringify(e)),n.length=0,Array.prototype.push.apply(n,e),n.length===0&&(c(),setTimeout(()=>{location.reload()},1e3))}n.length===0&&(c(),window.addEventListener("storage",t=>{t.key==="bookList"&&JSON.parse(t.newValue).length===0&&location.reload()}));function c(){const e=`
      <div class="container-none-card">
        <p class="shopping-text-none">
          This page is empty, add some books and proceed to order.
        </p>
        <img
          class="image-big"
          src="../../img/shopping-list/empty-bin@2x.png"
          alt="empty list"
        />
        <img
          class="image-small"
          src="../../img/shopping-list/empty-bin@1x.png"
          alt="empty list"
        />
      </div>
  `,o=document.querySelector(".shopping-title");function a(){window.innerWidth>=768?o.style.paddingBottom="140px":o.style.paddingBottom="120px"}a(),window.addEventListener("resize",a),p.innerHTML=e}
//# sourceMappingURL=commonHelpers2.js.map
