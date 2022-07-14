const fetchProducts = async (busca) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${busca}`;
  if (url.endsWith('undefined')) return new Error('You must provide an url');

  const promiseFetch = await fetch(url);
  const results = await promiseFetch.json();
  // const valorFinal = await results.results;
  // const sku = await valorFinal.map((element) => element.id);
  // const image = await valorFinal.map((element) => element.thumbnail);
  // const name = await valorFinal.map((element) => element.title);

  return results;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
