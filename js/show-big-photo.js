function showBigPhoto(
  { id, url, description, likes, comments },
  {
    bigPictureContainer,
    bigPictureImage,
    bigPictureLikesCount,
    bigPictureCommentsCount,
  }
) {
  bigPictureImage.setAttribute('src', url);
  bigPictureLikesCount.textContent = likes;
  bigPictureCommentsCount.textContent = comments.message.length;

  bigPictureContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

export { showBigPhoto };
