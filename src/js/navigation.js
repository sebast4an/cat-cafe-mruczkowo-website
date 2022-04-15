window.addEventListener('DOMContentLoaded', () => {
  let switchScrolling = 'disable';
  const logoLink = document.querySelector('.navigation__logo-link');
  const preventDefault = e => e.preventDefault();

  const changeScroll = option => {
    if (option === 'disable') {
      document.body.addEventListener('touchmove', preventDefault, { passive: false });
      document.body.style.overflow = 'hidden';
      logoLink.style.pointerEvents = 'none';
      switchScrolling = 'enable';
    } else {
      document.body.removeEventListener('touchmove', preventDefault);
      document.body.style = '';
      logoLink.style.pointerEvents = '';
      switchScrolling = 'disable';
    }
  };

  const navigation = document.querySelector('.navigation');
  const navigationButton = document.querySelector('.menu__hamburger-button');
  const navigationList = document.querySelector('.links-list');
  const desktopNavigation = window.matchMedia('(min-width: 970px)');

  const activateMenuAndChangeNavigation = () => {
    changeScroll(switchScrolling);
    navigationButton.classList.toggle('menu__hamburger-button--active');
    navigationList.classList.toggle('links-list--active');

    //changes navigation color to green when is black
    if (!navigation.classList.contains('navigation--green')) navigation.classList.add('navigation--green');
    else if (scrollY < 35) navigation.classList.remove('navigation--green');

    //changes navigation logo to small when is bigger
    if (scrollY > 35) return;
    else if (!navigation.classList.contains('navigation--shadow-and-scaling')) navigation.classList.add('navigation--shadow-and-scaling');
    else navigation.classList.remove('navigation--shadow-and-scaling');
  };

  const setMobileOrDesktopNavigation = () => {
    if (!desktopNavigation.matches) navigationButton.addEventListener('click', activateMenuAndChangeNavigation);
  };
  setMobileOrDesktopNavigation();
  window.addEventListener('resize', setMobileOrDesktopNavigation);

  //Close navigation after clicking link
  navigationList.addEventListener('click', e => {
    if (!desktopNavigation.matches && e.target.classList.contains('links-list__element--link')) activateMenuAndChangeNavigation();
  });

  const changeNavigationWhileScrolling = () => {
    if (scrollY > 35) navigation.classList.add('navigation--shadow-and-scaling');
    if (scrollY < 35) navigation.classList.remove('navigation--shadow-and-scaling');

    //change navigation color moments before leaving start-page
    const startPage = document.querySelector('.start-page').offsetHeight;
    const startPageHeight = startPage - startPage * 0.2;
    if (scrollY > startPageHeight) navigation.classList.add('navigation--green');
    if (scrollY < startPageHeight) navigation.classList.remove('navigation--green');
  };
  window.addEventListener('scroll', changeNavigationWhileScrolling);
});
