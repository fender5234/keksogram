import './show-users-pictures.js';
import './comments-scope.js';
import { showBigPhoto } from './show-big-photo.js';
import { hideBigPhoto } from './hide-big-photo.js';



const bigPictureSection = {
  bigPictureContainer: document.querySelector('.big-picture'),
  bigPictureImage: document.querySelector('.big-picture').querySelector('IMG'),
  bigPictureLikesCount: document.querySelector('.likes-count'),
  bigPictureCommentsCount: document.querySelector('.comments-count'),
}


document.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('picture__img')) {

    const currentPicture = evt.target.parentNode;
    showBigPhoto(currentPicture, bigPictureSection);

  } else if (evt.target.classList.contains('big-picture__cancel')) {
    hideBigPhoto(bigPictureSection);
  }
  else if (evt.target.classList.contains('big-picture')) {
    hideBigPhoto(bigPictureSection);
  }
});


document.addEventListener('keydown', (evt) => {
  if (evt.code === 'Escape') {
    hideBigPhoto();
  }
});
