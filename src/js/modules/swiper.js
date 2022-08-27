export const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 600,
  slidesPerView: 1,
  spaceBetween: 32,
  grabCursor: true,
  loopAdditionalSlides: 1,
  parallax: true,

  pagination: {
    el: '.hero__slider .controls__dots',
    clickable: true,
  },

  navigation: {
    nextEl: '.hero__slider .button-arrow_next',
    prevEl: '.hero__slider .button-arrow_prev',
  },

  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
});
