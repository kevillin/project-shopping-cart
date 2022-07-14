const saveCartItems = (item) => {
  // const itemString = JSON.stringify(item);
  return localStorage.setItem('cartItems', item);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
