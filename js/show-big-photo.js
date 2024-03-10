function showBigPhoto(currentPhoto, bigPictureSection) {

  const { bigPictureContainer, bigPictureImage, bigPictureLikesCount, bigPictureCommentsCount } = bigPictureSection;

  bigPictureImage.setAttribute('src', currentPhoto.querySelector('IMG').getAttribute('src'));
  bigPictureLikesCount.textContent = currentPhoto.querySelector('.picture__likes').textContent;
  bigPictureCommentsCount.textContent = currentPhoto.querySelector('.picture__comments').textContent;

  bigPictureContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

export { showBigPhoto }; 