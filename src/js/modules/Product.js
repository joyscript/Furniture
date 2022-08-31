export class Product {
  constructor({ id, title, text, labels, image, price, priceOld, shareUrl, likeUrl }) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.labels = labels;
    this.image = image;
    this.price = price;
    this.priceOld = priceOld;
    this.shareUrl = shareUrl || '#!';
    this.likeUrl = likeUrl || '#!';
  }

  generateArticle() {
    let template = '';
    let article = document.createElement('article');
    article.className = 'product';
    article.setAttribute('data-id', this.id);

    template += `<div class="product__image">`;
    if (this.image) template += `<img src="img/products/${this.image}" alt="Product" />`;
    template += `</div>`;

    template += `<div class="product__content">`;
    if (this.title) template += `<h4 class="product__title">${this.title}</h4>`;
    if (this.text) template += `<p class="product__text">${this.text}</p>`;
    if (this.price) {
      template += `<div class="product__prices"><span class="product__price">Rp ${this.price}</span>`;
      if (this.priceOld) template += `<span class="product__price product__price_old">Rp ${this.priceOld}</span>`;
      template += `</div>`;
    }
    template += `</div>`;

    if (this.labels && this.labels.length) {
      template += `<div class="product__labels">`;
      this.labels.forEach((item) => {
        template += `<div class="product__label product__label_${item.type}">${item.value}</div>`;
      });
      template += `</div>`;
    }

    template += `
      <div class="product__actions">
        <button class="product__button button button_white">Add to cart</button>
        <div class="product__links">
          <a href="${this.shareUrl}" class="product__link icon-share">Share</a>
          <a href="${this.likeUrl}" class="product__link icon-heart">Like</a>
        </div>
      </div>`;

    article.innerHTML = template;
    return article;
  }
}
