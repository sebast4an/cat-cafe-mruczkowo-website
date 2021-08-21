//assets
import '../assets/background.svg';
import '../assets/coffee.jpg';
import '../assets/wiktor.jpg';
import '../assets/wiktor_main.jpg';
import '../assets/logo-mruczkowo.svg';

//icon
import '../assets/icon/open.svg';

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
