//scss
import '../scss/main.scss';

//svg and images loader
const importAll = r => r.keys().forEach(r);
importAll(require.context('../cats', true, /\.(jpg|png)$/));
importAll(require.context('../assets/svg', true, /\.svg$/));
importAll(require.context('../assets/images', true, /\.webp/));

//js
import './catsForAdoption';
import './navigation';
