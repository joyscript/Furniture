import { headerClickHandler } from './modules/header.js';
import { changeHeader } from './modules/header.js';
import { swiper } from './modules/swiper.js';

changeHeader();

window.addEventListener('load', () => {
  headerClickHandler();
});

