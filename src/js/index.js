import { headerClickHandler } from './modules/header.js';
import { changeHeader } from './modules/header.js';
import { swiper } from './modules/swiper.js';
import { productsHandler } from './modules/products.js';

changeHeader();

window.addEventListener('load', () => {
  headerClickHandler();
  productsHandler();
});
