// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const markup = galleryItems.map(item =>
	`<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`).join('');

galleryEl.innerHTML = markup;

new SimpleLightbox('.gallery a', {
	captionsData:'alt',
	captionType:'alt',
		captionDelay:250,
	captionPosition:'bottom',
 });


