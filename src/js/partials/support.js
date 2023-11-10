const supportList = document.querySelector('.support-list');
const supportListItems = document.querySelectorAll('.support-list .li-support');
const scrollButton = document.getElementById('scrollButton');

let currentIndex = 0;

// Функція для оновлення виділеного елемента та прокрутки до нього
function updateHighlightedItem() {
  supportListItems.forEach(i => i.classList.remove('highlighted'));
  supportListItems[currentIndex].classList.add('highlighted');

  supportListItems[currentIndex].scrollIntoView({
    behavior: 'smooth',
  });
}

// Додаємо слухача подій для кнопки прокрутки вниз
scrollButton.addEventListener('click', () => {
  if (currentIndex < supportListItems.length - 1) {
    currentIndex++;
    updateHighlightedItem();
  } else {
    // Якщо досягли кінця списку, прокручуємо вгору
    currentIndex = 0;
    supportListItems[currentIndex].scrollIntoView({
      behavior: 'smooth',
      block: 'start', // Прокручувати вгору до верхнього краю блоку
    });
  }
});

// Додаємо слухача подій для кожного елемента списку
supportListItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentIndex = index;
    updateHighlightedItem();
  });
});
