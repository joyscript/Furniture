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

// ---------------------------------------

export const fetchData = async (url, method, data) => {
  let res;

  if (method == 'POST') {
    res = await fetch(url, {
      method: method,
      body: data,
      headers: { 'Content-type': 'application/json' },
    });
  } else {
    res = await fetch(url);
  }

  if (!res.ok) throw new Error(`Ошибка запроса по адресу ${url}, статус: ${res.status}`);

  return await res.json();
};
