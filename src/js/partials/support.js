import { refs } from '../refs/refs';

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

function markupSupport(arr) {
  return supportItems
    .map(
      item => `
      <ul class="support-container">
        <li class="support-item">${item}</li>
      </ul>
    `
    )
    .join('');
}

const markup = markupSupport(supportItems);
refs.supportContainer.insertAdjacentHTML('afterbegin', markup);
