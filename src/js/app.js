// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

export function colorHealth(params) {
  // функция возращает строку в зависимости от количества жизни игрока
  if (params.health > 50) {
    return 'healthy';
  }
  if ((params.health >= 15) && (params.health <= 50)) {
    return 'wounded';
  }
  if ((params.health > 0) && (params.health < 15)) {
    return 'critical';
  }
  return 'dead';
}

export function sortUsers(listUsers) {
  // функция сортирует игроков по их параметру жизни
  const result = listUsers.sort((a, b) => ((a.health > b.health) ? -1 : 1));
  return result;
}
