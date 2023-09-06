import { colorHealth, sortUsers } from '../app';

const data = [
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Маг', health: 15 }, 'wounded'],
  [{ name: 'Маг', health: 5 }, 'critical'],
  [{ name: 'Маг', health: 0 }, 'dead'],
  // [{ name: 'Маг', health: 10 }, 'healthy'],  // FAIL test
];

const dataColors = test.each(data);

dataColors('should color user health %s, expected: %s', (params, result) => {
  const dataColor = colorHealth(params);
  expect(dataColor).toBe(result);
});

const listUsers = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const resultUsers = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('should sort list', () => {
  const result = sortUsers(listUsers);
  expect(result).toEqual(resultUsers);
});
