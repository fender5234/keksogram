import { getRandomPositiveInteger } from "./utils.js";
import { commentUsers } from './mock-data.js';

function commentScopes() {
  const scopes = [];

  for (let i = getRandomPositiveInteger(0, commentUsers.length); i <= commentUsers.length; i++) {
    scopes.push(commentUsers[i]);
  }

  return scopes;
}

export {commentScopes};

