import { support } from '../../js/partials/support';

const listEl = document.getElementById('support-list');
const scrollButton = document.getElementById('scroll-btn');
const btnIcon = document.querySelector('.support-btn-icon');

let index = 1;
let currentItemIndex = 0;
let listItemHeight = 0;
const maxItems = support.length;

// Ф-ія для завантаження елементів списку

const loadItems = () => {
    support.forEach(item => {
      const listItem = `
        <li class="support-list-item">
          <a class="support-list-link" href="${item.url}" target="_blank" aria-label="${item.title}">
            0${index++}<img class="support-img" srcset="${item.img} 1x, ${item.img} 2x" src="${item.img}" alt="${item.title}" />
          </a>
        </li>
      `;
      listEl.insertAdjacentHTML('beforeend', listItem);
    });
  
    listItemHeight = listEl.firstElementChild.clientHeight;
  };

// Ф-ія для прокрутки до наступного елементу списку

const scrollToNextItem = () => {
    let increment = (window.innerWidth >= 768) ? 6 : 4;
    currentItemIndex += increment;
  
    if (currentItemIndex >= maxItems) {
      currentItemIndex = 0;
    }
  
    listEl.scrollTo({
      top: currentItemIndex * listItemHeight,
      behavior: 'smooth',
    });
  
    if (currentItemIndex + increment >= maxItems) {
      btnIcon.classList.add('rotate');
    } else {
      btnIcon.classList.remove('rotate');
    }
  };

scrollButton.addEventListener('click', scrollToNextItem);

loadItems();