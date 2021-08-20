//assets
import '../assets/coffee.jpg';
import '../assets/wiktor.jpg';
import '../assets/wiktor_main.jpg';
import '../assets/background.svg';
import '../assets/logo-mruczkowo.svg';

//scss
import '../scss/main.scss';

(() => {
  const mobileMenuButton = document.querySelector('.menu__hamburger-button');
  if (mobileMenuButton == null) return;

  mobileMenuButton.addEventListener('click', e => {
    e.preventDefault();
    mobileMenuButton.classList.toggle('menu__hamburger-button--active');
  });
})();
