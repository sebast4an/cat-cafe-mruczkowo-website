//scss
import '../scss/main.scss';

//svg and images loader
const importAll = r => r.keys().forEach(r);
importAll(require.context('../cats', true, /\.(jpg|jpeg)$/));
importAll(require.context('../assets', true, /\.ico$/));
importAll(require.context('../assets/svg', true, /\.svg$/));
importAll(require.context('../assets/images', true, /\.webp/));

//adoption form (PDF)
import '../assets/formularz_adopcyjny.pdf';

//js
import './catsForAdoption';
import './navigation';
import './cookie';
import './adoptionForm';

// swipe button on start page
window.addEventListener('DOMContentLoaded', () => {
  const swipeButton = document.querySelector('.start-page__swipe-button');

  swipeButton.addEventListener('click', () => {
    const startPageHeight = document.querySelector('.start-page').offsetHeight;
    window.scroll({ top: startPageHeight, behavior: 'smooth' });
  });
});
