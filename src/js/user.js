import fetchData, { httpGet, httpPost } from './http';

export function loadUser(id) {
  const data = httpGet(`http://server:8080/users/${id}`);
  return JSON.parse(data);
}

export function saveUser(user) {
  const data = httpPost(`http://server:8080/users/${user}`);
  return JSON.parse(data);
}

export function getLevel(userId) {
  const response = fetchData(`https://server/user/${userId}`);

  // TODO: логика обработки
  if (response.status === 'ok') {
    return `Ваш текущий уровень: ${response.level}`;
  }
  return 'Информация об уровне временно недоступна';
}

// eslint-disable-next-line no-unused-vars
// export function saveUser(user) {
//   throw new Error('Unimplemented');
// }
