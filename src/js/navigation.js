window.addEventListener('DOMContentLoaded', () => {
  const navigation = document.querySelector('.navigation');
  const navigationButton = document.querySelector('.menu__hamburger-button');
  const navigationList = document.querySelector('.links-list');

  let switchScrolling = 'disable';
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

  const activateMenuAndChangeNavigation = () => {
    changeScroll(switchScrolling);
    navigationButton.classList.toggle('menu__hamburger-button--active');
    navigationList.classList.toggle('links-list--active');

    //TODO: disable function when navigation is big
    console.log(getComputedStyle(navigationList));

    //changes navigation color to green when is black
    if (!navigation.classList.contains('navigation--below-start-page')) navigation.classList.add('navigation--below-start-page');
    else if (scrollY < 35) navigation.classList.remove('navigation--below-start-page');

    //changes navigation logo to smal when is bigger
    if (scrollY > 35) return;
    else if (!navigation.classList.contains('navigation--shadow-and-scaling')) navigation.classList.add('navigation--shadow-and-scaling');
    else navigation.classList.remove('navigation--shadow-and-scaling');
  };

  navigationButton.addEventListener('click', activateMenuAndChangeNavigation);
  navigationList.addEventListener('click', e => {
    if (e.target.classList.contains('links-list__element--link')) activateMenuAndChangeNavigation();
    else return;
  });

  //change navigation while scrolling
  window.addEventListener('scroll', () => {
    //change navigation color moments before leaving start-page
    const startPage = document.querySelector('.start-page').offsetHeight;
    const startPageHeight = startPage - startPage * 0.2;
    if (scrollY > startPageHeight) navigation.classList.add('navigation--below-start-page');
    if (scrollY < startPageHeight) navigation.classList.remove('navigation--below-start-page');
    if (scrollY > 35) navigation.classList.add('navigation--shadow-and-scaling');
    if (scrollY < 35) navigation.classList.remove('navigation--shadow-and-scaling');
  });
});
