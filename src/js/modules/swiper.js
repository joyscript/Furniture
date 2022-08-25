export const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 400,
  spaceBetween: 32,
  grabCursor: true,
  loopAdditionalSlides: 1,

  pagination: {
    el: '.swiper__dots',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper__btn-next',
    prevEl: '.swiper__btn-prev',
  },

  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
});
