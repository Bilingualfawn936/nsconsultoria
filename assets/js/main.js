(() => {
  const mobileMenu = document.querySelector('.mobile-menu');

  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.removeAttribute('open');
      });
    });
  }

  const year = String(new Date().getFullYear());
  document.querySelectorAll('[data-current-year]').forEach((element) => {
    element.textContent = year;
  });
})();
