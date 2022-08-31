import { Product } from './Product.js';
import { fetchData } from './services.js';

export const productsHandler = async () => {
  const container = document.querySelector('.products');
  const showMoreBtn = document.querySelector('.prod-section__button');
  let articles = [];

  let cardsQuantity = 4;
  if (window.innerWidth < 1300 && window.innerWidth >= 1024) cardsQuantity = 3;

  const renderArticles = () => {
    for (let i = 0; i < cardsQuantity; i++) {
      if (!articles[i]) break;
      container.insertAdjacentElement('beforeend', articles[i]);
    }
    articles.splice(0, cardsQuantity);
    if (!articles.length) showMoreBtn.remove();
  };

  try {
    const data = await fetchData('./json/products.json');
    data.forEach((item) => articles.push(new Product(item).generateArticle()));
    renderArticles();
    showMoreBtn.addEventListener('click', () => renderArticles());
  } catch (err) {
    console.error(err.message);
    showMoreBtn.remove();
    const message = `<p class="products__error">Sorry, something went wrong. Products cannot be displayed. Please try again later.</p>`;
    document.querySelector('.prod-section__wrapper').insertAdjacentHTML('beforeend', message);
  }
};
