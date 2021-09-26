import catsJSON from '../cats.json';
const catsContainer = document.querySelector('.cats-adoption');

const appendCats = data => {
  if (catsContainer == null || catsContainer == undefined) return;
  const fragment = document.createDocumentFragment();

  const render = (data, key) => {
    const cat = document.createElement('section');
    cat.classList.add(`cats-adoption__cat`);

    const imageSrc = `./cats/${data[key].toLowerCase()}"`;
    const searchFileExtension = data[key].indexOf('.');
    const catName = data[key].slice(0, searchFileExtension);

    cat.innerHTML = `
      <img class="cats-adoption__image" src="${imageSrc}" alt="Zdjęcie przedstawiające kota o imieniu ${catName}" loading="lazy" />
      <h3 class="cats-adoption__cat-name">${catName}</h3>
    `;
    fragment.appendChild(cat);
  };

  let catNumber = 0;
  data.forEach(value => {
    catNumber++;
    render(value, catNumber);
  });
  catsContainer.innerHTML = '';
  catsContainer.append(fragment);
};

(async () => {
  try {
    const response = await fetch(catsJSON);
    const data = await response.json();
    if (data == null) return;
    appendCats(data);
  } catch (error) {
    catsContainer.innerHTML = `
      <section class="cats-adoption__error error">
        <h3 class="error__title">Przepraszamy 😿</h3>
        <p class="error__subtitle">Nie możemy wyświetlić teraz zdjęć. Zajrzyj tu później.</p>
        <details class="error__details">
          <summary>Pokaż szczegóły błędu</summary>
          <div class="error__description">${error}</div>
        </details> 
      </section>
    `;
  }
})();
