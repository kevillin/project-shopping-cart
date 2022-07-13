const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;
const esvazia = document.querySelector('.cart__items');

const cartItemClickListener = (event) => {
  esvazia.removeChild(event.target);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const loading = () => {
  const header = document.querySelector('.container-title');
  const elementoCarregando = document.createElement('h1');
  elementoCarregando.classList.add('loading');
  elementoCarregando.innerText = 'carregando...';
  header.appendChild(elementoCarregando);
};

const funcaoTeste = async (event) => {
  const sku = getSkuFromProductItem(event.target.parentNode); // extraio o ID do produto usando a função já declarada.
  const funcaoFetchItem = await fetchItem(sku);
  const funcaoUsaElement = (
    { sku, name: funcaoFetchItem.title, salePrice: funcaoFetchItem.price });
  const elementoPaiCartItem = document.querySelector('.cart__items');
  const carrinho = createCartItemElement(funcaoUsaElement);
  elementoPaiCartItem.appendChild(carrinho);
};

const botaoRemoveTudo = () => {
  esvazia.innerText = '';
};

const removeButton = document.querySelector('.empty-cart');
removeButton.addEventListener('click', botaoRemoveTudo);

loading();

window.onload = async () => {
  const FetchElement = await fetchProducts('computador');
  const extraiInfo = FetchElement.map((p) => ({ sku: p.id, image: p.thumbnail, name: p.title })); // armazenei em uma variável o elemento pai para adicionar os itens
  const pai = document.getElementsByClassName('items')[0];
  extraiInfo.forEach((element) => { 
    const b = createProductItemElement(element);
    pai.appendChild(b);
  });

  const botaoInsere = document.querySelectorAll('.item__add');
  botaoInsere.forEach((element) => element.addEventListener('click', funcaoTeste));

  const removeLoading = document.querySelector('h1');
  removeLoading.remove();
};