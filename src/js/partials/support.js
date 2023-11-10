// Створення блоку "Підтримайте Україну"
const supportUkraineBlock = document.createElement('div');
supportUkraineBlock.classList.add('support-ukraine');

// Створення заголовку блоку "Підтримайте Україну"
const blockTitle = document.createElement('h2');
blockTitle.classList.add('color-support');
blockTitle.textContent = 'Support Ukraine';

// Створення списку "Підтримка України"
const supportList = document.createElement('ul');
supportList.classList.add('support-list');

// Масив елементів підтримки
const supportItems = [
  'Save the Children',
  'project HOPE',
  'International Medical Corps',
  'RAZOM',
  'ACTION AGAINST HUNGER',
  'CHARITY FOUNDATION SERGIY PRYTULA',
  'MEDECINS SANS FRONTIERES',
  'World Vision',
  'UNITEN24',
];

// Створення елементів списку та додавання їх до списку
supportItems.forEach((item, index) => {
  const listItem = document.createElement('li');
  listItem.classList.add('li-support');
  listItem.textContent = `${(index + 1).toString().padStart(2, '0')} ${item}`;
  supportList.appendChild(listItem);
});

// Створення кнопки прокрутки
const scrollButton = document.createElement('button');
scrollButton.id = 'scrollButton';
scrollButton.innerHTML = '&#9660;';

// Додавання елементів до блоку supportUkraineBlock
supportUkraineBlock.appendChild(blockTitle);
supportUkraineBlock.appendChild(supportList);
supportUkraineBlock.appendChild(scrollButton);

// Додавання блоку supportUkraineBlock до body документа
document.body.appendChild(supportUkraineBlock);

// Існуючий JavaScript код для обробників подій та стилів
const supportListItems = document.querySelectorAll('.support-list .li-support');
let currentIndex = 0;

// Функція для оновлення виділеного елемента та прокрутки до нього
function updateHighlightedItem() {
  supportListItems.forEach(i => i.classList.remove('highlighted'));
  supportListItems[currentIndex].classList.add('highlighted');

  supportListItems[currentIndex].scrollIntoView({
    behavior: 'smooth',
  });
}

// Обробник подій для кнопки прокрутки вниз
scrollButton.addEventListener('click', () => {
  if (currentIndex < supportListItems.length - 1) {
    currentIndex++;
    updateHighlightedItem();
  } else {
    currentIndex = 0;
    supportListItems[currentIndex].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
});

// Обробники подій для кожного елемента списку
supportListItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentIndex = index;
    updateHighlightedItem();
  });
});
