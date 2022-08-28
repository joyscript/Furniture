export const headerClickHandler = () => {
  const menu = document.querySelector('.menu');

  const openSubmenu = (elem) => {
    if (menu.querySelector('.menu__item.active')) closeSubmenu(menu.querySelector('.menu__item.active'));
    elem.classList.add('active');
    if (window.innerWidth < 768) elem.style.height = elem.scrollHeight + 'px';
  };

  const closeSubmenu = (elem) => {
    elem.classList.remove('active');
    if (window.innerWidth < 768) elem.style = '';
  };

  const toggleSubmenu = (e) => {
    if (e.target.classList.contains('menu__link', 'icon-arrow')) {
      const elem = e.target.parentElement;
      elem.classList.contains('active') ? closeSubmenu(elem) : openSubmenu(elem);
    } else if (menu.querySelector('.menu__item.active')) {
      closeSubmenu(menu.querySelector('.menu__item.active'));
    }
  };

  const toggleElement = (e, trigger, elem) => {
    const className = `${elem}-open`;
    if (e.target.classList.contains(trigger) && !document.body.classList.contains(className)) {
      document.body.classList.add(className);
    } else if (!e.target.closest(`.${elem}`)) {
      document.body.classList.remove(className);
    }
  };

  document.addEventListener('click', (e) => {
    if ('ontouchstart' in window || window.innerWidth < 768) toggleSubmenu(e);
    toggleElement(e, 'search-btn', 'search');
    toggleElement(e, 'burger', 'menu');
  });

  document.querySelector('.search__form').addEventListener('submit', (e) => {
    e.preventDefault();
    document.body.classList.remove('search-open');
  });
};

// -----------------------------------------

export const changeHeader = () => {
  const header = document.querySelector('.header');

  const changeHeaderOnLoad = () => {
    if (window.scrollY > 20) header.classList.add('scrolled');
    setTimeout(() => header.classList.add('trans'), 300);
  };

  const changeHeaderOnScroll = () => {
    window.scrollY > 20 ? header.classList.add('scrolled') : header.classList.remove('scrolled');
  };

  if (window.innerWidth >= 600) {
    changeHeaderOnLoad();
    window.addEventListener('scroll', changeHeaderOnScroll);
  }
};
