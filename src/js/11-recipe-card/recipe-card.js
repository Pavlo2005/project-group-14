export function createMarkupRecipe(data) {
  const markup = data
    .map(({ preview, title, description, rating }) => {
      return `<div class="recipe-card-container" style="background-image: url('${preview}')">
            <svg class="recipe-icon-heart" width="22" height="22">
              <use href="/img/icon.svg#icon-heart"></use>
            </svg>
            <h2 class="recipe-card-title">${title}</h2>
            <p class="recipe-card-text">${description}</p>
            <div class="recipe-btn-container">
                <p class="recipe-card-rating">${rating}</p>
                <ul class="recipe-card-item js-dish-page-button">${ratingList.join('')}</ul>
                <button class="recipe-btn js-open-dish-button">See recipe</button>
            </div>
        </div>`;
    })
    .join('');
  return markup;
}

const ratingList = [];
for (let i = 1; i <= 5; i += 1) {
  if (i <= Math.round(rating)) {
    ratingList.push(`
      <li class="recipe-card-list js-open-dish">
          <svg class="recipe-icon-rating active-recipe-icon" width="18" height="18">
            <use href="/img/icon.svg#icon-star"></use>
          </svg>
        </li>`);
    continue;
  }
  ratingList.push(`
        <li class="recipe-card-list js-open-dish">
          <svg class="recipe-icon-rating" width="18" height="18">
            <use href="/img/icon.svg#icon-star"></use>
          </svg>
        </li>`);
}







