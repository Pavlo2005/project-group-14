function createMurkupDP(recipe) {
  const {
    _id,
    title = '',
    thumb = '',
    youtube = '',
    time = 'XX',
    tags = [],
    ingredients = [],
    rating = 0,
    instructions = '',
  } = recipe;

  const tagsList = tags
    .map(tag => `<li class="recipe-modal-tag-item">#${tag}</li>`)
    .splice(0, 3)
    .join('');

  const ingredientsList = ingredients
    .map(
      ({ name, measure }) => `
  <tr class="table-row">
        <td class="table-ingredient">${name}</td>
        <td class="table-amount">${measure}</td>
      </tr>`
    )
    .join('');

  const ratingList = [];
  for (let i = 1; i <= 5; i += 1) {
    if (i <= Math.round(rating)) {
      ratingList.push(`
      <li class="recipe-modal-rating-item">
          <svg class="recipe-modal-rating-icon active-icon-dp" width="18" height="18">
            <use href="/img/icon.svg#icon-star"></use>
          </svg>
        </li>`);
      continue;
    }
    ratingList.push(`
        <li class="recipe-modal-rating-item">
          <svg class="recipe-modal-rating-icon" width="18" height="18">
            <use href="/img/icon.svg#icon-star"></use>
          </svg>
        </li>`);
  }

  const favoritesLS = JSON.parse(localStorage.getItem('favorites')) ?? [];
  const favoriteBtn = favoritesLS.find(id => id === _id)
    ? 'Remove from favorite'
    : 'Add to favorite';

  let media;

  if (youtube) {
    const youtubeUrl = `${youtube}`;
    const videoId = youtubeUrl.split('v=')[1];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    media = `<iframe class="recipe-modal-iframe"
  width="100%"
  src="${embedUrl}"
  frameborder="0"
  allowfullscreen
></iframe>`;
  } else {
    media = `<img src="${thumb}" alt="${title}" class="recipe-modal-img" />`;
  }

  return `<div class="overlay-dp js-overlay-dp" data-id="${_id}">
  <div class="recipe-modal js-recipe-modal">
    <button class="recipe-modal-close-btn js-close-buttton-dp" type="button">
      <svg class="recipe-modal-close-icon">
        <use href="/img/icon.svg#icon-cross"></use>
      </svg>
    </button>
    <h2 class="recipe-modal-title desktop">${title}</h2>
${media}
    <h2 class="recipe-modal-title mobile">${title}</h2>
    <div class="recipe-modal-rating">
      <ul class="recipe-modal-tag-list desktop">${tagsList}</ul>
      <p class="recipe-modal-rating-number">${rating}</p>
      <ul class="recipe-modal-rating-list">${ratingList.join('')}</ul>
      <p class="recipe-modal-cooking-time">${time} min</p>
    </div>
    <table class="recipe-modal-table">${ingredientsList}</table>
    <ul class="recipe-modal-tag-list mobile">
      <li class="recipe-modal-tag-item">#Breakfast</li>
      <li class="recipe-modal-tag-item">#Desert</li>
      <li class="recipe-modal-tag-item">#Sweet</li>
    </ul>
    <p class="recipe-modal-desc">${instructions}</p>
    <ul class="recipe-modal-batton-list">
    <li class="recipe-modal-batton-item">
    <button class="recipe-modal-button favorite js-favorite-button-dp">${favoriteBtn}</button>
    </li>
    <li class="recipe-modal-batton-item">
    <button class="recipe-modal-button rating js-open-rating-button" data-id="${_id}">Give a rating</button>
    </li>
    </ul>    
  </div>
</div>`;
}

export { createMurkupDP };
