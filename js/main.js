import './show-users-pictures.js';
import './comments-scope.js';
import { showBigPhoto } from './show-big-photo.js';
import { hideBigPhoto } from './hide-big-photo.js';
import { photoArray } from './show-users-pictures.js';



const bigPictureSection = {
  bigPictureContainer: document.querySelector('.big-picture'),
  bigPictureImage: document.querySelector('.big-picture').querySelector('IMG'),
  bigPictureLikesCount: document.querySelector('.likes-count'),
  bigPictureCommentsCount: document.querySelector('.comments-count'),
}


document.addEventListener('click', (evt) => {

  let photoOne;

  photoArray.forEach((photo) => {
    if(evt.target.getAttribute("src") === photo.url) {
      photoOne = photo;
    }
  })


  if (evt.target.classList.contains('picture__img')) {

    // const currentPicture = evt.target.parentNode;
    showBigPhoto(photoOne, bigPictureSection);

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
