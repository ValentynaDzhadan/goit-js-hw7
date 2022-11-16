import { galleryItems } from "./gallery-items.js";

const refs = {
  galleryBoxElem: document.querySelector(".gallery"),
};

function createMarkup(arr) {
  const markup = arr
    .map((elem) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${elem.original}">
    <img
      class="gallery__image"
      src="${elem.preview}"
      data-source="${elem.original}"
      alt="${elem.description}"
    />
  </a>
</div>`;
    })
    .join("");
  return markup;
}
refs.galleryBoxElem.innerHTML = createMarkup(galleryItems);

refs.galleryBoxElem.addEventListener("click", openModal);

let instance;

function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const originalUrl = event.target.dataset.source;

  instance = basicLightbox.create(
    `<img src="${originalUrl}" width="800" height="600">`
  );
  instance.show();
}

refs.galleryBoxElem.addEventListener("keydown", closeImg);

function closeImg(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}
