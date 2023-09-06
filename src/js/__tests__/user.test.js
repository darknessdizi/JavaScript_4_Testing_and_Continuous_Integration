import { loadUser, saveUser, getLevel } from '../user';
import fetchData, { httpGet, httpPost } from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call loadUser once', () => {
  httpGet.mockReturnValue(JSON.stringify({}));

  const response = loadUser(1);
  expect(response).toEqual({});
  expect(httpGet).toBeCalledWith('http://server:8080/users/1');
});

test('should call saveUser once', () => {
  httpPost.mockReturnValue(JSON.stringify({}));

  const response = saveUser(1);
  expect(response).toEqual({});
  expect(httpPost).toBeCalledWith('http://server:8080/users/1');
});

// тест функции getLevel с двумя вариантами ответов
const responds = [
  [{ status: 'ok', level: 3 }, 2, 'Ваш текущий уровень: 3'],
  [{ status: 'error' }, 2, 'Информация об уровне временно недоступна'],
];

const respondTest = test.each(responds);

respondTest('Проверка getLevel с параметрами %s', (params, id, result) => {
  fetchData.mockReturnValue(params);

  const response = getLevel(id);
  expect(response).toEqual(result);
  expect(fetchData).toBeCalledWith('https://server/user/2');
});
