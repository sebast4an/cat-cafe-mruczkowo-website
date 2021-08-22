import catsJSON from '../cats.json';

(() => {
  const catsContainer = document.querySelector('.adoption__cats');
  if (catsContainer == undefined || catsContainer == null) return;

  // const renderCats = () => {
  //   const fragment = document.createDocumentFragment();
  // };
})();

const getCats = async () => {
  const URL = catsJSON;
  console.log(URL);

  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data['1']);
  } catch (error) {
    console.log(error);
  }
};

getCats(0);
