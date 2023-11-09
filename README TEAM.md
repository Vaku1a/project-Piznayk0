Важливо: Пулреквест робиться тільки тоді, коли ти повністью виконав задачу та
протестував, або коли ти зробив частину задачі яка є логічно завершина і тім лід
взмозі її протестувати. Якщо ти просто в процесі задачі, то ти робишь просто
commit - це як "збереження файлу". Головне, не треба робити пулреквест якщо ти
зробив частину задачу. Це призводить до того що людина яка приймає пулреквест не
може протестувати код і якщо такий код просто змерджити з main то потім треба
відкатуватись якщо є помилки і.т.д.

1. Після клонування репозиторію собі на пк не забудь зробити npm install.

2. Для запуску локального сервера npm run dev

3. Додай в корінь проекту файл з назвою pull-requests-list.txt. Додавай в цей
   файл посилання на кожен свій pull requests. Інструкція
   https://youtu.be/9Ts2LBsdQfU дивись з 2.40 хвилини.

4. Основні правила розмітки та стилів:

   4.1 Всі класи мають починатись з назви секції або назви елемента який
   розробляєте. Всі діти секції або елемента мають їх назву.

   4.2 Використовуй обовьязково змінні кольорів з файлу styles.css. ЦЕ ВАЖЛИВО
   ЯКЩО МИ БУДЕМО РЕАЛІЗОВУВАТИ ЗМІНУ ТЕМИ.

5. Основні правила написання коду:

   5.1 API пишемо на async await. 5.2 Всі функції коментуємо. Пишемо коротко що
   робить, що приймає, що повертає. 5.3 Всі контастанти пишемо в UPPERCASE та
   коментуємо. Пишемо коротко, що зберігає.

6. Libraries(всі ліби додані до проекту, просто робіть імпорт):

   6.1 Слайдер https://kenwheeler.github.io/slick/ або
   https://swiperjs.com/get-started

   6.2 Селекти https://slimselectjs.com/

   6.3 Пагінація https://www.npmjs.com/package/paginationjs

   6.4 Світч, чекбокс https://lokesh-coder.github.io/pretty-checkbox/

   6.5 Loader https://cssloaders.github.io/

   6.6 Повідомлення https://github.com/notiflix/Notiflix#readme

   6.7 API Треба вирішити. Якщо бібліотека то https://axios-http.com/docs/intro

   6.8 modern-normalize: https://www.npmjs.com/package/modern-normalize

   6.9 Easily add sign-in to your Web app with FirebaseUI:
   https://firebase.google.com/docs/auth/web/firebaseui

7. Макет:
   https://www.figma.com/file/JB3QBTgXBIHU24nMOtmVmK/Book?node-id=0-1&t=ymen1Pvvf0nSfxYC-0

8. ТЗ:
   https://docs.google.com/spreadsheets/d/1p2P89GVo0HYGW2h2dXxrxxjMbpAB5T8RG-wy4oaEkNw/edit?usp=sharing

9. // Оголошення функції (function declaration) function multiply(x, y, z) {
   console.log(Результат множення дорівнює ${x _ y _ z}); }

10. Git Terminal - список команд для роботи з терміналом;

git clone https://посилання*на*репозиторій клонуєте репозиторій  
git checkout ‘назва-гілки’ перехід на гілку ‘назва-гілки’ git pull origin
‘назва-гілки’ стягує останні зміни гілки ‘назва-гілки’ git checkout -b
‘назва-нової-гілки’ створює нову гілку git add . та git commit -m “назва-коміта”
записує зміни до локальної гілки git push origin ‘назва-вашої-гілки’ публікує
ваші зміни на гілці віддаленого репозиторію git merge ‘назва-гілки’ залиття коду
з гілки ‘назва-гілки’ на поточну гілку git branch -d ‘назва-гілки’ видалення
гілки ‘назва-гілки’ git fetch стягує всі зміни з віддаленого репозиторію
