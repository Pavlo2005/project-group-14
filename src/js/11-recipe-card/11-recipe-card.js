export function createMarkupRecipe(data) {
  const markup = data
    .map(({
      preview,
      title,
      description,
      rating,
    }) => {
      return `<div class="recipe-card-container js-open-dish" style="background-image: url('${preview}')" data-id="ідентифікатор рецепту">
              <svg class="recipe-icon-heart" width="22" height="22">
                <use href="/img/icon.svg#icon-heart"></use>
              </svg>
              <h2 class="recipe-card-title">${title}</h2>
              <p class="recipe-card-text">${description}</p>
              <div class="recipe-btn-container">
                  <p class="recipe-card-rating">${rating}</p>
                  <svg class="recipe-icon-rating" width="18" height="18">
                    <use href="/img/icon.svg#icon-star"></use>
                  </svg>
                  <svg class="recipe-icon-rating" width="18" height="18">
                      <use href="/img/icon.svg#icon-star"></use>
                    </svg>
                    <svg class="recipe-icon-rating" width="18" height="18">
                      <use href="/img/icon.svg#icon-star"></use>
                    </svg>
                    <svg class="recipe-icon-rating" width="18" height="18">
                      <use href="/img/icon.svg#icon-star"></use>
                    </svg>
                    <svg class="recipe-icon-rating" width="18" height="18">
                      <use href="/img/icon.svg#icon-star"></use>
                    </svg>
                  <button class="recipe-btn js-open-dish-button">See recipe</button>
              </div>
          </div>`;
    })
    .join('');
  return markup;
}