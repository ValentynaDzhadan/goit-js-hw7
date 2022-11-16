import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  galleryBoxElem: document.querySelector(".gallery"),
};

function createMarkup(arr) {
  const markup = arr
    .map((elem) => {
      return `<a class="gallery__item" href="${elem.original}">
  <img class="gallery__image" src="${elem.preview}" alt="${elem.description}" />
</a>`;
    })
    .join("");
  return markup;
}

refs.galleryBoxElem.innerHTML = createMarkup(galleryItems);

let lightbox = new SimpleLightbox(".gallery a", {
  /* options */
  captionsData: "alt",
  captionDelay: 250,
});
