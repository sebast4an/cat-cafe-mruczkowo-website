//scss
import '../scss/main.scss';

//svg and images loader
const importAll = r => r.keys().forEach(r);
importAll(require.context('../assets/svg', true, /\.svg$/));
importAll(require.context('../assets/images', true, /\.jpg$/));

//js
import './catsForAdoption';

(() => {
  //navigation button
  const mobileMenuButton = document.querySelector('.menu__hamburger-button');
  if (mobileMenuButton == null) return;

  mobileMenuButton.addEventListener('click', e => {
    e.preventDefault();
    mobileMenuButton.classList.toggle('menu__hamburger-button--active');
  });

  //navigation background color
  const navigation = document.querySelector('.navigation');
  const startPage = document.querySelector('.start-page').offsetHeight;
  const startPageHeight = startPage - startPage * 0.2;

  window.addEventListener('scroll', () => {
    if (scrollY > 10) navigation.classList.add('navigation--shadow');
    if (scrollY > startPageHeight) navigation.classList.add('navigation--below-start-page');
    if (scrollY < 10) {
      navigation.classList.remove('navigation--below-start-page');
      navigation.classList.remove('navigation--shadow');
    }
  });
})();
