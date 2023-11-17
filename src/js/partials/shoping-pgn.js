// Імпортуємо бібліотеку
import 'tui-pagination/dist/tui-pagination.min.css';
import Pagination from 'tui-pagination';




export function initializePagination(totalItems, itemsPerPage, onPageChange) {
  // Отримуємо контейнер, в якому буде розміщена пагінація
  const container = document.getElementById('tui-pagination-container');

  // Опції для пагінації
  const options = {
    totalItems: totalItems, // Загальна кількість елементів
    itemsPerPage: itemsPerPage, // Кількість елементів на одній сторінці
    visiblePages: 3, // Кількість видимих сторінок в пагінації
  };

  // Створюємо екземпляр пагінації
  const instance = new Pagination(container, options);

  // Отримуємо поточну сторінку
  const currentPage = instance.getCurrentPage();

  instance.on('afterMove', event => {
    const currentPage = event.page;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    onPageChange({ currentPage, startIndex, endIndex });
  });

  return instance;
}