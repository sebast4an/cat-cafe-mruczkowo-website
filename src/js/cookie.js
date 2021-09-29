window.addEventListener('DOMContentLoaded', () => {
  const startPage = document.querySelector('.start-page');

  const setCookieInformation = () => {
    const cookieElement = document.createElement('div');
    cookieElement.classList.add('cookie');
    cookieElement.setAttribute('aria-hidden', 'true');
    cookieElement.innerHTML = `
      <p class="cookie__text">Ta strona korzysta z plików cookie. Korzystanie ze strony jest równoznaczne ze zgodą na ich użycie.</p>
      <button type="button" class="cookie__ok-button">OK</button> 
    `;

    startPage.before(cookieElement);
    const cookieButton = cookieElement.querySelector('.cookie__ok-button');

    cookieButton.addEventListener('click', () => {
      localStorage.setItem('cookieInformationDisplayed', 'yes');
      cookieElement.remove();
    });
  };

  if (!localStorage.getItem('cookieInformationDisplayed')) setCookieInformation();
  else return;
});
