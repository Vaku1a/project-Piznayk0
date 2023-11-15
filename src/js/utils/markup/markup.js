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
                  <img class="popup-link-img" src="${amazonimg}" alt="link to amazon" />
                </a>
                <a href="${apple.url}" target="_blank">
                  <img class="popup-link-img" src="${appleimg}" alt="link to apple books" />
                </a>
              </div>
            </div>
            `;

  return markup;
}
