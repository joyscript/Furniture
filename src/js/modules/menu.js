export const menu = () => {
  const menu = document.querySelector('.menu');

  const toggleSubmenu = (e) => {
    const elem = e.target.closest('.has-sublist');

    if (getComputedStyle(elem.querySelector('.menu__sublist')).opacity == 1) {
      elem.classList.remove('active');
      elem.style = '';
    } else {
      closeSubmenu();
      elem.classList.add('active');
      if (window.innerWidth < 1024) elem.style.height = elem.scrollHeight + 'px';
    }
  };

  const closeSubmenu = () => {
    const activeElem = menu.querySelector('.has-sublist.active');
    if (activeElem) {
      activeElem.classList.remove('active');
      activeElem.style = '';
    }
  };

  if (window.innerWidth >= 1024) {
    menu.querySelectorAll('.has-sublist').forEach((item) => {
      item.addEventListener('focusin', (e) => e.currentTarget.classList.add('active'));
      item.addEventListener('focusout', (e) => e.currentTarget.classList.remove('active'));

      if (window.matchMedia('(hover: hover)').matches) {
        item.addEventListener('mouseenter', (e) => e.currentTarget.classList.add('active'));
        item.addEventListener('mouseleave', (e) => e.currentTarget.classList.remove('active'));
      }
    });
  }

  if ('ontouchstart' in window) {
    document.addEventListener('click', (e) => (e.target.closest('.has-sublist') ? toggleSubmenu(e) : closeSubmenu()));
  }
};
