// Функция для получения и вставки готового комменатрия в нужный раздел страницы

function getComment() {
  // Получаем шаблон разметки комментария
  const commentTemplateNode = document.querySelector('#comment').content;
  const commentTemplateContent = commentTemplate.cloneNode(true);

  // Переменная с шаблоном HTML разметки для вставки фото автора комментария
  const commentAuthorImage =
    commentTemplateContent.querySelector('.social__picture');

  // Переменная с шаблоном HTML разметки для вставки текста комменатария
  const commentAuthorText =
    commentTemplateContent.querySelector('.social__text');
}
