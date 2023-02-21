const ancors = document.querySelectorAll('a[href*="#"]');

for (const ancor of ancors) {
  ancor.addEventListener('click', function (event) {
    event.preventDefault();
    const blockID = ancor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    if (refs.mobileMenu.classList.contains('is-open')) {
      refs.mobileMenu.classList.remove('is-open');
      document.body.style.overflow = 'visible';
    }
  });
}
