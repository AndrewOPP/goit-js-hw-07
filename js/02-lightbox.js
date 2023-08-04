import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery")



const app = galleryItems.map(({ preview, original, description }) => {
    const element =`
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
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

    const image = galleryItems.find(({ description }) => description === evn.target.getAttribute("alt"))
       console.log(image.description);
    console.log(image);
    new SimpleLightbox('.gallery__item a', {captionsData: "alt", captionDelay: 250});
    


})