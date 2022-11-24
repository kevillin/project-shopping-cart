require("../mocks/fetchSimulator");
const { fetchItem } = require("../helpers/fetchItem");
const item = require("../mocks/item");

describe("2 - Teste a função fetchItem", () => {
  test("se fetchItens é uma função", () => {
    expect(typeof fetchItem).toBe("function");
  });
  test("se a função fetchItem chama o fetch", () => {
    fetchItem("MLB1615760527");
    expect(fetch).toBeCalledTimes(1);
  });
  test("se a função fetchItem chama o endpoint", async () => {
    expect.assertions(1);
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith(endpoint);
  })
  test('se a função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto `item` que já está importado no arquivo', async () => {
    expect.assertions(1);
    expect(await fetchItem('MLB1615760527')).toStrictEqual(item);
  })
  test('Se a função fetchItem chamada sem argumento retorna um erro', async () => {
    expect.assertions(1);
    expect(await fetchItem()).toEqual(new Error('You must provide an url'));
  })
});
