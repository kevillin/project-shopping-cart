require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
 test('se fetchProducts é uma função', () => {
  expect(typeof fetchProducts).toBe('function');
 });
 test('se a função fetchProducts chama o fetch', () => {
  fetchProducts('computador')
  expect(fetch).toBeCalledTimes(1);
 });
 test('se a função fetchProducts chama o endpoint', async () => {
  expect.assertions(1);
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  await fetchProducts('computador');
  expect(fetch).toBeCalledWith(endpoint);
 });
 test('se a função fetchProducts com o argumento \'computador\' é uma estrutura de dados igual ao objeto computadorSearch', async () => {
  expect.assertions(1);
  expect(await fetchProducts('computador')).toStrictEqual(computadorSearch);
 });
 test('se a função fetchProducts sem parâmetro lança o erro \'You must provide an url\'', async () => {
  expect.assertions(1);
  const response = await fetchProducts();
  expect(response).toEqual(new Error('You must provide an url'));
 });
});
