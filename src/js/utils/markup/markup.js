// popup markup

export function createMarkupForPopup({
  book_image,
  title,
  author,
  description,
  buy_links: [amazon, apple],
}) {
  const markup = `<img src="${book_image}" class="popup-image" />
            <div class ="info-book">
            <h2 class="popup-book-title">${title}</h2>
            <p class="popup-book-author">${author}</p>
            <p class="popup-book-description">${description}</p>
              <div class="popup-links">
                <a href="${amazon.url}" target="_blank">
                  <img class="popup-link-img" src="./img/modal-shop/amazon.png" alt="link to amazon" />
                </a>
                <a href="${apple}" target="_blank">
                  <img class="popup-link-img" src="./img/modal-shop/apple-books.png" alt="link to apple books" />
                </a>
              </div>
            </div>
            `;

  return markup;
}
