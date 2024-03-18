function showBigPhoto(currentPhoto, bigPictureSection) {

  const { bigPictureContainer, bigPictureImage, bigPictureLikesCount, bigPictureCommentsCount } = bigPictureSection;
  const { id, url, description, likes , comments} = currentPhoto;

  bigPictureImage.setAttribute('src', url);
  bigPictureLikesCount.textContent = likes;
  bigPictureCommentsCount.textContent = comments.message.length;

  bigPictureContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

export { showBigPhoto }; 