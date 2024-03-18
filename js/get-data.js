import { getRandomPositiveInteger } from "./utils.js"
import { nameUsers, photoDescription } from "./mock-data.js"
import { commentScopes } from './comments-scope.js';

function generatePhoto(i) {
  return {
    id: i,
    url: `photos/${i}.jpg`,
    description: photoDescription[getRandomPositiveInteger(0, photoDescription.length - 1)],
    likes: getRandomPositiveInteger(15, 200),
    comments: {
      id: i,
      avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
      name: nameUsers[getRandomPositiveInteger(0, nameUsers.length - 1)],
      message: commentScopes(),
    }
  }
}

function getArrayPhotoDescription(numberOfObjects) {
  const ArrayPhotoDescription = [];

  for (let i = 1; i <= numberOfObjects; i++) {
    ArrayPhotoDescription.push(generatePhoto(i));
  }
  return ArrayPhotoDescription;
}

export { generatePhoto, getArrayPhotoDescription };

