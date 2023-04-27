import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryCollection = galleryItems.reduce(
  (result, item) =>
    result +
    `<li class="gallery_item">
    <a class="gallery__link"  href=${item.original}>
       <img class="gallery__image" src=${item.preview} alt="${item.description}" />
    </a>
 </li>`,
  ``
);
gallery.insertAdjacentHTML("afterbegin", galleryCollection);
const lightbox = new SimpleLightbox(".gallery a", {
  animationSpeed: 250,
  captionsData: "alt",
});
// console.log(galleryItems);

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. Використовуй готовий код з першого завдання.
// Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. Необхідно додати посилання на два файли: simple-lightbox.min.js і simple-lightbox.min.css.
// Ініціалізація бібліотеки після створення і додання елементів галереї у ul.gallery. Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
// Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.
