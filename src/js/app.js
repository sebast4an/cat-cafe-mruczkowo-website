//scss
import '../scss/main.scss';

//svg
import '../assets/logo-mruczkowo.svg';
import '../assets/Paw.svg';

(() => {
  const mobileMenuButton = document.querySelector('.menu__hamburger-button');
  if (mobileMenuButton == null) return;

  mobileMenuButton.addEventListener('click', e => {
    e.preventDefault();
    mobileMenuButton.classList.toggle('menu__hamburger-button--active');
  });
})();
