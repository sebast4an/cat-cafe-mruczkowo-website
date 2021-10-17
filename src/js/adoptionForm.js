import adoptionFormFile from '../assets/formularz_adopcyjny.pdf';

window.addEventListener('DOMContentLoaded', () => {
  const adoptionSubtitile = document.querySelector('.adoption__subtitle');
  const adoptionHeader = document.querySelector('.adoption__header');

  const adoptionDownload = document.createElement('a');
  adoptionDownload.classList.add('adoption__downloadlink');
  adoptionDownload.classList.add('downloadlink');
  adoptionDownload.setAttribute('href', adoptionFormFile);
  adoptionDownload.setAttribute('title', 'Pobierz formularz adopcyjny');

  adoptionSubtitile.innerHTML = `Czyli koty do adopcji. Adopcja jest możliwa po pozytywnej weryfikacji i spełnieniu formalności. Zapraszamy do pobrania i wypełnienia <a href="${adoptionFormFile}" class="adoption__link">formularza adopcyjnego</a> oraz odwiedzenia nas lub kontaktu.`;

  adoptionDownload.innerHTML = `
      <img class="downloadlink__image" src="../assets/svg/adoption__pdf.svg" aria-hidden="true" loading="lazy" alt/>
      <span class="downloadlink__text">Formularz adopcyjny</span>
    `;
  adoptionHeader.after(adoptionDownload);
});
