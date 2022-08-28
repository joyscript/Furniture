const lockBody = () => {
  const scrollBar = window.innerWidth - document.documentElement.offsetWidth;
  document.body.classList.toggle('lock');

  if (document.body.classList.contains('lock')) {
    document.body.style.paddingRight = `${scrollBar}px`;
    header.style.paddingRight = `${scrollBar}px`;
  } else {
    document.body.style = '';
    header.style = '';
  }
};
