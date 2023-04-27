import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector(".gallery");

// Create and render gallery items
const createGalleryItem = ({ preview, original, description }) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}" data-original-img=${original}>
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </li>`;

  galleryList.innerHTML = galleryItems.map(createGalleryItem).join("");

  // Initialize SimpleLightbox

const lightbox = new SimpleLightbox(".gallery .gallery__link", {
  
  captionsData: "alt",
  
  captionDelay: 250,
});

