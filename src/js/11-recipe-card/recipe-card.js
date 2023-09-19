export function createMarkupRecipe(data) {
  const markup = data
    .map(({ _id, preview, title, description, rating }) => {
      drawStars(rating);
      return `<div class="recipe-card-container js-open-dish" data-id="${_id}" style="background-image: url('${preview}')">
            <svg class="recipe-icon-heart" width="22" height="22">
              <use href="/img/icon.svg#icon-heart"></use>
            </svg>
            <h2 class="recipe-card-title">${title}</h2>
            <p class="recipe-card-text">${description}</p>
            <div class="recipe-btn-container">
                <p class="recipe-card-rating">${rating}</p>
                <ul class="recipe-card-item">${ratingList.join('')}</ul>
                <button class="recipe-btn js-open-dish-button">See recipe</button>
            </div>
        </div>`;
    })
    .join('');
  return markup;
}
let ratingList = [];

function drawStars(data) {
  ratingList = [];
  for (let i = 1; i <= 5; i += 1) {
    if (i <= Math.round(data)) {
      ratingList.push(`
      <li class="recipe-card-list">
          <svg class="recipe-icon-rating active-recipe-icon" width="16" height="16">
            <use href="/img/icon.svg#icon-star"></use>
          </svg>
        </li>`);
      continue;
    }
    ratingList.push(`
        <li class="recipe-card-list">
          <svg class="recipe-icon-rating" width="16" height="16">
            <use href="/img/icon.svg#icon-star"></use>
          </svg>
        </li>`);
  }

}








