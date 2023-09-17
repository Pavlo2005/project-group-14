import { serviceDish } from './08-tasty-treats-API';
import { createMurkupDP } from './08-create-markup';
import { changeFavorites } from './08-handler-favorites-LS';

const favoritList = document.querySelector('.js-dish-page-favorite');
const dishList = document.querySelector('.js-dish-page-button');

favoritList.addEventListener('click', evt => {
  if (evt.target === evt.currentTarget) {
    return;
  }
  onClick(evt);
});

if (dishList) {
  dishList.addEventListener('click', evt => {
    if (!evt.target.classList.contains('js-open-dish-button')) {
      return;
    }
    onClick(evt);
  });
}

function onClick(evt) {
  const currentDish = evt.target.closest('.js-open-dish');

  serviceDish(currentDish.dataset.id)
    .then(recipeDish => {
      document.body.insertAdjacentHTML('beforeEnd', createMurkupDP(recipeDish));

      const overlay = document.querySelector('.js-overlay-dp');
      const closeBtn = document.querySelector('.js-close-buttton-dp');
      const addFavoriteBtn = document.querySelector('.js-favorite-button-dp');

      overlay.classList.remove('is-hidden');

      addFavoriteBtn.addEventListener('click', evt => {
        evt.target.textContent = changeBtnText(recipeDish._id);
        changeFavorites(recipeDish);
      });

      closeBtn.addEventListener('click', () => overlay.remove());
      overlay.addEventListener('click', evt => {
        const modalWindow = evt.target.closest('.js-recipe-modal');
        if (!modalWindow) {
          overlay.remove();
        }
      });

      document.addEventListener('keydown', ({ code }) => {
        if (code === 'Escape') {
          overlay.remove();
        }
      });
    })
    .catch(err => console.log(err));
}

function changeBtnText(id) {
  const favoritesLS = JSON.parse(localStorage.getItem('favorites')) ?? [];
  return favoritesLS.find(({ _id }) => _id === id)
    ? 'Add to favorite'
    : 'Remove from favorite';
}
