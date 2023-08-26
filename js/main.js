'use strict';

const headerEl = document.querySelector('.header');
const btnHeaderMenuEl = document.querySelector('.btn-mobile-nav');

btnHeaderMenuEl.addEventListener('click', () => {
  headerEl.classList.toggle('nav-open');
});
