import catsJSON from '../cats.json';

const appendCats = data => {
  const catsContainer = document.querySelector('.cats-adoption');
  if (catsContainer == null || catsContainer == undefined) return;
  const fragment = document.createDocumentFragment();

  //TODO: support for PNG
  const render = (data, key) => {
    const cat = document.createElement('section');
    cat.classList.add(`cats-adoption__cat`);
    const imageSrc = `./cats/${data[key].toLowerCase()}.jpg"`;
    cat.innerHTML = `
      <img class="cats-adoption__cat--image" src="${imageSrc}" alt="Zdjęcie przedstawiające kota o imieniu ${data[key]}" />
      <h3 class="cats-adoption__cat--name">${data[key]}</h3>
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
    console.log(error);
  }
})();
