function hideBigPhoto(bigPictureSection) {
  const { bigPictureContainer } = bigPictureSection;

  bigPictureContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

export { hideBigPhoto };