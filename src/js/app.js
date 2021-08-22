//scss
import '../scss/main.scss';

//svg and images loader
const importAll = r => r.keys().forEach(r);
importAll(require.context('../assets/svg', true, /\.svg$/));
importAll(require.context('../assets/images', true, /\.jpg$/));

(() => {
  const mobileMenuButton = document.querySelector('.menu__hamburger-button');
  if (mobileMenuButton == null) return;

  mobileMenuButton.addEventListener('click', e => {
    e.preventDefault();
    mobileMenuButton.classList.toggle('menu__hamburger-button--active');
  });
})();
