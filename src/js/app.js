// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

export function colorHealth(params) {
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
  const result = listUsers.sort((a, b) => ((a.health > b.health) ? -1 : 1));
  return result;
}
