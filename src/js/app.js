//scss
import '../scss/main.scss';

//svg and images loader
const importAll = r => r.keys().forEach(r);
importAll(require.context('../cats', true, /\.(jpg|png)$/));
importAll(require.context('../assets/svg', true, /\.svg$/));
importAll(require.context('../assets/images', true, /\.webp/));

//js
import './catsForAdoption';

(() => {
  //navigation button
  const mobileNavButton = document.querySelector('.menu__hamburger-button');
  const mobileNavList = document.querySelector('.links-list');
  // const mobileNavListLink = document.querySelectorAll('.links-list__element');
  if (mobileNavButton == null) return;

  mobileNavButton.addEventListener('click', e => {
    e.preventDefault();
    mobileNavButton.classList.toggle('menu__hamburger-button--active');
    mobileNavList.classList.toggle('links-list--active');
  });

  //TODO: add event listener for navigation links

  //navigation background color
  const navigation = document.querySelector('.navigation');
  const startPage = document.querySelector('.start-page').offsetHeight;
  const startPageHeight = startPage - startPage * 0.2;

  window.addEventListener('scroll', () => {
    if (scrollY > 35) navigation.classList.add('navigation--shadow');
    if (scrollY < 35) navigation.classList.remove('navigation--shadow');
    if (scrollY > startPageHeight) navigation.classList.add('navigation--below-start-page');
    if (scrollY < startPageHeight) navigation.classList.remove('navigation--below-start-page');
  });
})();
