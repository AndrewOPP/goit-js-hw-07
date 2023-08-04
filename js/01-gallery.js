import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery")

const app = galleryItems.map(({ preview, original, description }) => {
    const element =`
    <li class="gallery__item">
     <a class="gallery__link" href="${original}">
     <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
        />
     </a>
    </li>`
    
    return element
}).join("")

gallery.insertAdjacentHTML("beforeend", app)

gallery.addEventListener("click", (evn) => {
    evn.preventDefault()
    if (evn.target === evn.currentTarget) {
        return
    }
    const image = galleryItems.find(({ original }) => original === evn.target.dataset.source)
    
    const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${image.original}" alt="${image.description}">
    </div>`
    )

    instance.show()
    
    const firstCallback = (event) => {
        if (event.key === "Escape") {
            instance.close()
            document.removeEventListener("keydown", firstCallback);
        }};
    
    document.addEventListener("keydown", firstCallback)
})




 





    

