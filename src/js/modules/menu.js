export const menu = () => {
  const menu = document.querySelector('.menu');

  const openSubmenu = (elem) => {
    elem.classList.add('active');
    if (window.innerWidth < 1024) elem.style.height = elem.scrollHeight + 'px';
  };

  const closeSubmenu = (elem) => {
    elem.classList.remove('active');
    if (window.innerWidth < 1024) elem.style = '';
  };

  const closeActiveSubmenu = () => {
    const activeSubmenu = menu.querySelector('.has-sublist.active');
    if (activeSubmenu) closeSubmenu(activeSubmenu);
  };

  const toggleSubmenu = (elem) => {
    if (getComputedStyle(elem.querySelector('.menu__sublist')).opacity == 1) {
      closeSubmenu(elem);
    } else {
      closeActiveSubmenu();
      openSubmenu(elem);
    }
  };

  menu.querySelectorAll('.has-sublist').forEach((item) => {
    item.addEventListener('focusin', (e) => openSubmenu(e.currentTarget));
    item.addEventListener('focusout', (e) => closeSubmenu(e.currentTarget));
    item.addEventListener('click', (e) => toggleSubmenu(e.currentTarget));

    if (window.matchMedia('(hover: hover)').matches) {
      item.addEventListener('mouseenter', (e) => openSubmenu(e.currentTarget));
      item.addEventListener('mouseleave', (e) => closeSubmenu(e.currentTarget));
    }
  });
};
