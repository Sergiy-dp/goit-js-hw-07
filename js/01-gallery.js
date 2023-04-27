
import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
let instance = "";

const galleryMarkup = galleryItems
  .map((item) => {
    return `<li class="gallery__item">
                <a class="gallery__link" href="${item.original}">
                    <img
                        class="gallery__image"
                        data-source="${item.original}"
                        src="${item.preview}" 
                        alt="${item.description}"
                    >
                </a>
            </li>`;
  })
  .join("");
galleryList.innerHTML = galleryMarkup;

galleryList.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
});

function onOpenModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  window.addEventListener("keydown", onCloseModal);

  instance = basicLightbox.create(`
   <img src="${event.target.dataset.source}">
   `);
  instance.show();
}

galleryList.addEventListener("click", onOpenModal);

function onCloseModal(event) {
  window.addEventListener("keydown", onCloseModal);
  if (event.code === "Escape") {
    instance.close();
    window.removeEventListener("keydown", onCloseModal);
  }
}
