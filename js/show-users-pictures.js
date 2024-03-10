import { getArrayPhotoDescription } from './get-data.js';

const picturesContainer = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');

const photoArray = getArrayPhotoDescription(25);

photoArray.forEach((item) => {
  const pictureElement = picturesTemplate.cloneNode(true);
  const pictureImg = pictureElement.querySelector('.picture__img');
  const pictureComment = pictureElement.querySelector('.picture__comments');
  const pictureLikes = pictureElement.querySelector('.picture__likes');

  pictureImg.setAttribute('src', item.url);
  pictureComment.textContent = item.comments.message.length;
  pictureLikes.textContent = item.likes;
  picturesContainer.append(pictureElement);
})

