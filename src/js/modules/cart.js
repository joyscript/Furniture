export const cartHandler = () => {
  const products = document.querySelector('.products');
  let productsInCart = 0;

  const addToCart = (btn, product) => {
    const cart = document.querySelector('.actions__button.icon-cart');
    const prodImage = product.querySelector('.product__image');

    btn.setAttribute('disabled', true);

    const imageFly = prodImage.cloneNode(true);
    imageFly.className = 'product__fly-image';

    imageFly.style.cssText = `
      top: ${prodImage.getBoundingClientRect().top}px;
      left: ${prodImage.getBoundingClientRect().left}px;
      width: ${prodImage.offsetWidth}px;
      height: ${prodImage.offsetHeight}px;
      `;

    document.body.append(imageFly);

    imageFly.style.cssText = `
      top: ${cart.getBoundingClientRect().top + 10}px;
      left: ${cart.getBoundingClientRect().left + 8}px;
      width: 20px; height: 20px; opacity: 0;
      `;

    const updateCart = () => {
      imageFly.remove();
      btn.removeAttribute('disabled');

      const quantity = document.createElement('span');
      quantity.innerText = ++productsInCart;
      cart.append(quantity);
    };

    setTimeout(updateCart, 800);
  };

  products.addEventListener('click', (e) => {
    if (e.target.classList.contains('product__button')) addToCart(e.target, e.target.closest('.product'));
  });
};
