import fetchData, { httpGet, httpPost } from '../http';

test('Проверка на ошибку get-запрос', () => {
    expect(() => {
        httpGet('get-запрос');
    }).toThrow();
})

test('Проверка на ошибку post-запрос', () => {
    expect(() => {
        httpPost('post-запрос');
    }).toThrow();
})

test('Проверка на ошибку функции fetchData', () => {
    expect(() => {
        fetchData('url');
    }).toThrow();
})