import { Product } from './Product.js';
import { fetchData } from './services.js';
import { addToCart } from './cart.js';
import { cartClickHandler } from './cart.js';

export const productsHandler = async () => {
  const container = document.querySelector('.products');
  const showMoreBtn = document.querySelector('.prod-section__button');

  let index = 0;
  let cardsQuantity = 4;
  if (window.innerWidth < 1300 && window.innerWidth >= 1024) cardsQuantity = 3;

  const renderArticles = (data) => {
    for (let i = index; i < index + cardsQuantity; i++) {
      if (!data[i]) break;
      const article = new Product(data[i]).generateArticle();
      container.insertAdjacentElement('beforeend', article);
    }
    index += cardsQuantity;
    if (!data[index]) showMoreBtn.remove();
  };

  try {
    const data = await fetchData('./json/products.json');
    renderArticles(data);

    showMoreBtn.addEventListener('click', () => renderArticles(data));

    container.addEventListener('click', (e) => {
      if (e.target.classList.contains('product__button')) {
        const productElem = e.target.closest('.product');
        const productInfo = data.find((item) => item.id == productElem.dataset.id);
        addToCart(e.target, productElem, productInfo);
      }
    });

    cartClickHandler();
  }
  catch (err) {
    console.error(err.message);
    showMoreBtn.remove();
    const message = `<p class="products__error">Sorry, something went wrong. Products cannot be displayed. Please try again later.</p>`;
    document.querySelector('.prod-section__wrapper').insertAdjacentHTML('beforeend', message);
  }
};
