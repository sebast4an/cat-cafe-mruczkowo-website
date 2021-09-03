window.addEventListener('DOMContentLoaded', () => {
  const navigation = document.querySelector('.navigation');
  const navigationButton = document.querySelector('.menu__hamburger-button');
  const navigationList = document.querySelector('.links-list');
  const startPage = document.querySelector('.start-page').offsetHeight;
  const startPageHeight = startPage - startPage * 0.2;

  let switchScrolling = 'disable'; //Default option
  const preventDefault = e => e.preventDefault();

  const changeScroll = option => {
    if (option === 'disable') {
      document.body.addEventListener('touchmove', preventDefault, { passive: false });
      document.body.style.overflow = 'hidden';
      switchScrolling = 'enable';
    } else {
      document.body.removeEventListener('touchmove', preventDefault);
      document.body.style = '';
      switchScrolling = 'disable';
    }
  };

  //active menu and change navigation
  navigationButton.addEventListener('click', () => {
    changeScroll(switchScrolling);
    navigationButton.classList.toggle('menu__hamburger-button--active');
    navigationList.classList.toggle('links-list--active');

    if (!navigation.classList.contains('navigation--below-start-page')) navigation.classList.add('navigation--below-start-page');
    else if (scrollY < 35) navigation.classList.remove('navigation--below-start-page');

    if (scrollY > 35) return;
    else if (!navigation.classList.contains('navigation--shadow-and-scaling')) navigation.classList.add('navigation--shadow-and-scaling');
    else navigation.classList.remove('navigation--shadow-and-scaling');
  });

  //change navigation while scrolling
  window.addEventListener('scroll', () => {
    if (scrollY > 35) navigation.classList.add('navigation--shadow-and-scaling');
    if (scrollY < 35) navigation.classList.remove('navigation--shadow-and-scaling');
    if (scrollY > startPageHeight) navigation.classList.add('navigation--below-start-page');
    if (scrollY < startPageHeight) navigation.classList.remove('navigation--below-start-page');
  });
});
