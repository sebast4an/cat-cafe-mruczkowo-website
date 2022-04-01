import adoptionFormFile from '../assets/formularz_adopcyjny.pdf';
import regulationsFile from '../assets/regulamin_kawiarni.pdf';

window.addEventListener('DOMContentLoaded', () => {
  //Adoption
  const adoptionSubtitile = document.querySelector('.adoption__subtitle');
  const adoptionHeader = document.querySelector('.adoption__header');

  const adoptionDownload = document.createElement('a');
  adoptionDownload.classList.add('adoption__downloadlink');
  adoptionDownload.classList.add('downloadlink');
  adoptionDownload.setAttribute('href', adoptionFormFile);
  adoptionDownload.setAttribute('title', 'Pobierz formularz adopcyjny');

  adoptionSubtitile.innerHTML = `Czyli koty do adopcji. Adopcja jest możliwa po pozytywnej weryfikacji i spełnieniu formalności. Zapraszamy do pobrania i wypełnienia <a href="${adoptionFormFile}" class="adoption__link">formularza adopcyjnego</a> oraz odwiedzenia nas lub kontaktu.`;

  adoptionDownload.innerHTML = `
      <img class="downloadlink__image" src="../assets/svg/adoption__pdf.svg" aria-hidden="true" loading="lazy" alt=""/>
      <span class="downloadlink__text">Formularz adopcyjny</span>
    `;
  adoptionHeader.after(adoptionDownload);

  //Regulations
  const regulationsPlace = document.querySelector('.description__end');
  const regulationsDownload = document.createElement('a');
  regulationsDownload.classList.add('regulations__downloadlink');
  regulationsDownload.classList.add('downloadlink');
  regulationsDownload.classList.add('downloadlink--transparent');
  regulationsDownload.setAttribute('href', regulationsFile);
  regulationsDownload.setAttribute('title', 'Regulamin przebywania w Kociej Kawiarni');

  regulationsDownload.innerHTML = `
      <img class="downloadlink__image" src="../assets/svg/adoption__pdf.svg" aria-hidden="true" loading="lazy" alt=""/>
      <span class="downloadlink__text">Regulamin przebywania w Kociej Kawiarni</span>
    `;
  regulationsPlace.after(regulationsDownload);

  //Contact
  const contactPlace = document.querySelector('.contact__description');
  const contactDownloadAdopt = document.createElement('a');
  const contactDownloadReg = document.createElement('a');

  contactDownloadReg.classList.add('regulations__downloadlink');
  contactDownloadReg.classList.add('downloadlink');
  contactDownloadReg.classList.add('downloadlink--contact');
  contactDownloadReg.setAttribute('href', regulationsFile);
  contactDownloadReg.setAttribute('title', 'Regulamin przebywania w Kociej Kawiarni');

  contactDownloadReg.innerHTML = `
  <img class="downloadlink__image" src="../assets/svg/adoption__pdf.svg" aria-hidden="true" loading="lazy" alt=""/>
  <span class="downloadlink__text">Regulamin przebywania w Kociej Kawiarni</span>
  `;

  contactDownloadAdopt.classList.add('adoption__downloadlink');
  contactDownloadAdopt.classList.add('downloadlink');
  contactDownloadAdopt.classList.add('downloadlink--contact');
  contactDownloadAdopt.setAttribute('href', adoptionFormFile);
  contactDownloadAdopt.setAttribute('title', 'Pobierz formularz adopcyjny');

  contactDownloadAdopt.innerHTML = `
  <img class="downloadlink__image" src="../assets/svg/adoption__pdf.svg" aria-hidden="true" loading="lazy" alt=""/>
  <span class="downloadlink__text">Formularz adopcyjny</span>
  `;

  contactPlace.after(contactDownloadAdopt);
  contactPlace.after(contactDownloadReg);
});
