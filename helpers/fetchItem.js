const fetchItem = async (ProductID) => {
  const url = `https://api.mercadolibre.com/items/${ProductID}`;
  if (url.endsWith('undefined')) return new Error('You must provide an url');

  const promiseFetch = await fetch(url);
  const results = await promiseFetch.json();

  return results;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
