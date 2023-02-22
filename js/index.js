const refs = {
  mobileMenu: document.querySelector('.js-menu-container'),
  openMenuBtn: document.querySelector('.js-open-menu'),
  closeMenuBtn: document.querySelector('.js-close-menu'),
  ancors: document.querySelectorAll('a[href*="#"]'),
  backdrop: document.getElementById('backdrop'),
};

refs.openMenuBtn.addEventListener('click', onMenuToggle);
refs.closeMenuBtn.addEventListener('click', onMenuToggle);

function onMenuToggle() {
  refs.mobileMenu.classList.toggle('is-open');
  refs.backdrop.classList.toggle('is-hidden');

  document.body.style.overflow === '' ||
  document.body.style.overflow === 'visible'
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = '');
}

for (const ancor of refs.ancors) {
  ancor.addEventListener('click', function (event) {
    event.preventDefault();

    const blockID = ancor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    if (refs.mobileMenu.classList.contains('is-open')) {
      refs.backdrop.classList.toggle('is-hidden');

      refs.mobileMenu.classList.remove('is-open');
      document.body.style.overflow = 'visible';
    }
  });
}
