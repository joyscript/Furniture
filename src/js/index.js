import { headerClickHandler } from './modules/header.js';
import { changeHeader } from './modules/header.js';
import { swiper } from './modules/swiper.js';
import { productsHandler } from './modules/products.js';
import { cartHandler } from './modules/cart.js';

changeHeader();

window.addEventListener('load', () => {
  headerClickHandler();
  productsHandler();
  cartHandler();
});
