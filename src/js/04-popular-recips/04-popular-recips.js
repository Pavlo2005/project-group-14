const popRecipesList = document.querySelector('.js-popular-recipes');
let data;

const precipesSection = document.getElementById('js-precipes');

export function appearancePopRecipes() {
  precipesSection.classList.replace('precipes-hidden', 'precipes');
}

popRecipesFitchList();

// ========================функція запросу з бекенду
async function popRecipesFitch() {
  const resp = await fetch(
    'https://tasty-treats-backend.p.goit.global/api/recipes/popular'
  );

  data = await resp.json();
  return data;
}

// ========================функція розмітки

async function popRecipesFitchList() {
  await popRecipesFitch();

  data.map(el => {
    const dataList = `<div class="precipes-marcup js-precipes-marcup js-open-dish" data-id="${el._id}">
        <img class='precipes-marcup-img'
            src='${el.preview}'
            alt='${el.title}'>
        <div class="precipes-marcup-title">
            <h3 class="precipes-marcup-title-text">${el.title}</h3>
            <p class="precipes-marcup-text">${el.description}</p>
        </div>
    </div>`;
    // console.log(dataList);
    popRecipesList.insertAdjacentHTML('beforeend', dataList);
  });
}
