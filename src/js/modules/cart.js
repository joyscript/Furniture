import { Modal } from './Modal.js';

const cartIcon = document.querySelector('.actions__button.icon-cart');
const cartModal = new Modal('.modal-cart', '.modal-cart__close');

let cartArr = [];

const makeImageFly = (productElem) => {
  const prodImage = productElem.querySelector('.product__image');
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
    top: ${cartIcon.getBoundingClientRect().top + 10}px;
    left: ${cartIcon.getBoundingClientRect().left + 8}px;
    width: 20px; height: 20px; opacity: 0;
    `;
};

const saveCart = () => localStorage.setItem('cart', JSON.stringify(cartArr));

const calculateSum = () => {
  let sum = cartArr.reduce((sum, item) => item.price.replaceAll('.', '') * item.count + sum, 0);

  const formatNum = (num) => {
    num = num.toString().split('').reverse();
    let res = [];
    while (num.length) {
      res.push(num.splice(0, 3).reverse().join(''));
    }
    return res.reverse().join('.');
  };

  cartModal.modal.querySelector('.modal-cart__pricetag').textContent = `Total: Rp ${formatNum(sum)}`;
};

const updateCart = (productInfo) => {
  const cartList = document.querySelector('.modal-cart__list');
  const { id, title, price, image } = productInfo;
  const productInCart = cartArr.find((item) => item.id == id);

  const updateCartIcon = () => {
    if (!cartArr.length) {
      const cartCount = document.createElement('span');
      cartCount.textContent = 1;
      cartIcon.append(cartCount);
    } else {
      cartIcon.querySelector('span').textContent++;
    }
  };

  const increaseCount = () => {
    productInCart.count++;
    cartModal.modal.querySelector(`[data-id = "${id}"] .counter__amount`).textContent++;
  };

  const addNewProduct = () => {
    cartArr.push({ id, title, price, count: 1 });

    let cartItem = `
      <li class="modal-cart__item" data-id="${id}">
        <div class="cart-item">
          <div class="cart-item__image"><img src="img/products/${image}" alt="Product"></div>
          <h4 class="cart-item__title">${title}</h4>
          <div class="cart-item__price">${price}</div>
        </div>
        <div class="counter">
          <button class="counter__btn button button_bordered btn-minus">-</button>
          <span class="counter__amount">1</span>
          <button class="counter__btn button button_bordered btn-plus">+</button>
        </div>
      </li>
      `;

    cartList.insertAdjacentHTML('beforeend', cartItem);
  };

  updateCartIcon();
  productInCart ? increaseCount() : addNewProduct();
  calculateSum();
  saveCart();
};

const counterHandler = (e) => {
  const btn = e.target;
  const cartItem = e.target.closest('.modal-cart__item');
  const product = cartArr.find((item) => item.id == cartItem.dataset.id);

  if (btn.classList.contains('btn-plus') && product.count < 10) {
    btn.previousElementSibling.textContent++;
    cartIcon.querySelector('span').textContent++;
    product.count++;
  } else if (btn.classList.contains('btn-minus')) {
    btn.nextElementSibling.textContent--;
    cartIcon.querySelector('span').textContent--;
    product.count--;
    if (product.count <= 0) {
      cartItem.remove();
      cartArr = cartArr.filter((item) => item.id != cartItem.dataset.id);
    }
    if (!cartArr.length) cartIcon.querySelector('span').remove();
  }

  calculateSum();
  saveCart();
};

// ----------------------------------------

export const addToCart = (btn, productElem, productInfo) => {
  btn.setAttribute('disabled', true);
  makeImageFly(productElem);
  updateCart(productInfo);

  setTimeout(() => {
    btn.removeAttribute('disabled');
    document.querySelector('.product__fly-image').remove();
  }, 700);
};

export const cartClickHandler = () => {
  cartIcon.addEventListener('click', () => {
    if (cartArr.length) cartModal.openModal();
  });

  cartModal.modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('counter__btn')) counterHandler(e);
  });
};
