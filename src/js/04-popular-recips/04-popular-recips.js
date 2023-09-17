// import './mobile_menu';
// import './swiper';
// import './multimodal';

const popularRecipsHtml = document.querySelector('.js-popular-recipes');
// const popularRecipsMarcup = document.querySelectorAll(
//   '.js-popular-recipes-marcup'
// );

const popRecips = {};

let data;

markingRecips();

// popularRecipsMarcup.addEventListener('click', handlerRecipsInfo);
popularRecipsHtml.addEventListener('click', handlerRecipsInfo);

// ===========================функція розмітки
async function markingRecips() {
  await popularRecips();

  //   console.log(await data);
  const dataBack = await data;
  // console.log(dataBack);

  dataBack.map(el => {
    const marcup = `<div class="precipes-marcup js-popular-recipes-marcup js-open-dish" data-id="${el._id}">
                <img class=" precipes-marcup-img" src="${el.preview}" 
                    alt="${el.title}">
                <div class="precipes-marcup-title">
                    <h3 class="precipes-marcup-title-text">${el.title}</h3>
                    <div class="precipes-marcup-text-block">
                        <p class="precipes-marcup-text">${el.description}</p>    
                    </div>
                </div>
            </div>`;

    popularRecipsHtml.insertAdjacentHTML('beforeend', marcup);
  });
}

// =================================функція получення даних з бекенду
async function popularRecips() {
  const resp = await fetch(
    'https://tasty-treats-backend.p.goit.global/api/recipes/popular'
  );
  //   console.log(resp.json());

  if (!resp.ok) {
    throw new Error(resp.statusText);
  }
  data = resp.json();
  //   console.log(data);
  return data;
}

//================================функція визову картки рецептів
function handlerRecipsInfo(evt) {
  // const recipsId = evt.target.dataset.id;
  const currentDish = evt.target.closest('.js-popular-recipes-marcup').dataset
    .id;
  // if (){recipsId.closest()}

  // console.log(recipsId);
  console.log(currentDish);
  // console.log('khsddfkshfkasdh');
}
