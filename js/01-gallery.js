import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryCollection = galleryItems.reduce(
  (result, item) =>
    result +
    `<li class="gallery_item">
<a class="gallery_link" href=${"item.original"}>
  <img
    class="gallery_image"
    src=${item.preview}
    data-source=${item.original}
    alt="${item.description}"
  />
</a>
</li>`,
  ``
);
gallery.insertAdjacentHTML("afterbegin", galleryCollection);
gallery.addEventListener("click", largeImageOpener);

function largeImageOpener(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width = "800", height = "600">
    `);
  instance.show();
  gallery.addEventListener("keydown", largeImageCloser);
  function largeImageCloser(ev) {
    console.log("event :>> ", ev);
    if (ev.code === "Escape") {
      instance.close();
    }
  }
}
