const refs = {
  mobileMenu: document.querySelector('.js-menu-container'),
  openMenuBtn: document.querySelector('.js-open-menu'),
  closeMenuBtn: document.querySelector('.js-close-menu'),
};

refs.openMenuBtn.addEventListener('click', onMenuToggle);
refs.closeMenuBtn.addEventListener('click', onMenuToggle);

function onMenuToggle() {
  refs.mobileMenu.classList.toggle('is-open');
  document.body.style.overflow === ''
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = '');
}

//======================================================//
