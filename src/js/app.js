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
  const navigation = document.querySelector('.navigation');
  const mobileNavButton = document.querySelector('.menu__hamburger-button');
  const mobileNavList = document.querySelector('.links-list');

  if (mobileNavButton == null) return;

  let switchScrolling = 'disable';
  const preventDefault = e => e.preventDefault();

  const changeScroll = option => {
    if (option === 'disable') {
      document.body.addEventListener('touchmove', preventDefault, { passive: false });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.removeEventListener('touchmove', preventDefault);
      document.body.style = '';
    }
  };

  mobileNavButton.addEventListener('click', () => {
    switch (switchScrolling) {
      case 'enable':
        changeScroll(switchScrolling);
        switchScrolling = 'disable';
        break;
      case 'disable':
        changeScroll(switchScrolling);
        switchScrolling = 'enable';
        break;
      default:
        changeScroll(switchScrolling);
        switchScrolling = 'enable';
    }

    //for iOS
    mobileNavButton.classList.toggle('menu__hamburger-button--active');
    mobileNavList.classList.toggle('links-list--active');

    if (!navigation.classList.contains('navigation--below-start-page')) navigation.classList.toggle('navigation--below-start-page');
    navigation.classList.toggle('navigation--shadow-and-scaling');
  });

  //TODO: add event listener for navigation links

  //navigation background color

  const startPage = document.querySelector('.start-page').offsetHeight;
  const startPageHeight = startPage - startPage * 0.2;

  window.addEventListener('scroll', () => {
    if (scrollY > 35) navigation.classList.add('navigation--shadow-and-scaling');
    if (scrollY < 35) navigation.classList.remove('navigation--shadow-and-scaling');
    if (scrollY > startPageHeight) navigation.classList.add('navigation--below-start-page');
    if (scrollY < startPageHeight) navigation.classList.remove('navigation--below-start-page');
  });
})();
