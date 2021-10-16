import adoptionFormFile from '../assets/formularz_adopcyjny.pdf';

const appendFile = () => {
  const adoptionSubtitile = document.querySelector('.adoption__subtitle');
  adoptionSubtitile.innerHTML = `Czyli koty do adopcji. Adopcja jest możliwa po pozytywnej weryfikacji i spełnieniu formalności. Zapraszamy do <a href="${adoptionFormFile}" class="adoption__link">pobrania i wypełnienia formularza adopcyjnego</a> oraz odwiedzenia nas lub kontaktu.`;
};

window.addEventListener('DOMContentLoaded', () => {
  appendFile();
});
