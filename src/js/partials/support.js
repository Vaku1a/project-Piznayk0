const supportList = document.querySelector('.support-list');
const supportListItems = document.querySelectorAll('.support-list .li-support');
const scrollButton = document.getElementById('scrollButton');

// Додаємо слухача подій для кожного елемента списку
supportListItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Видаляємо підсвічування з усіх елементів
    supportListItems.forEach(i => i.classList.remove('highlighted'));

    // Додаємо підсвічування тільки клікнутому елементу
    item.classList.add('highlighted');
  });
});

// Додаємо функціонал для кнопки прокрутки вниз
scrollButton.addEventListener('click', () => {
  const highlightedIndex = Array.from(supportListItems).findIndex(item =>
    item.classList.contains('highlighted')
  );
  if (highlightedIndex < supportListItems.length - 1) {
    supportListItems[highlightedIndex + 1].scrollIntoView({
      behavior: 'smooth',
    });
  }
});
