import { serviceDish } from './08-tasty-treats-API';
import { createMurkupDP } from './08-create-markup';
import { changeFavorites } from './08-handler-favorites-LS';
// import {handlerClickReting} from '../11-modal-reting/11-modal-reting.js'

const favoritList = document.querySelector('.js-dish-page-favorite');
const dishList = document.querySelector('.js-dish-page-button');

if (favoritList) {
  favoritList.addEventListener('click', evt => {
    if (evt.target === evt.currentTarget) {
      return;
    }
    openDishPage(evt);
  });
}

if (dishList) {
  dishList.addEventListener('click', evt => {
    if (!evt.target.classList.contains('js-open-dish-button')) {
      return;
    }
    openDishPage(evt);
  });
}

function openDishPage(evt) {
  const currentDish = evt.target.closest('.js-open-dish');

  serviceDish(currentDish.dataset.id)
    .then(recipeDish => {
      document.body.insertAdjacentHTML('beforeEnd', createMurkupDP(recipeDish));

      const overlay = document.querySelector('.js-overlay-dp');
      const closeBtn = document.querySelector('.js-close-buttton-dp');
      const changeFavoriteBtn = document.querySelector(
        '.js-favorite-button-dp'
      );
      const giveRatingBtn = document.querySelector('.js-open-rating-button');

      changeFavoriteBtn.addEventListener('click', handlerFavorite);
      
      function handlerFavorite(evt) {
        const favoritesLS = JSON.parse(localStorage.getItem('favorites')) ?? [];
        evt.target.textContent = favoritesLS.find(id => id === recipeDish._id)
        ? 'Add to favorite'
        : 'Remove from favorite';
        
        changeFavorites(recipeDish._id);
      }
      
      // giveRatingBtn.addEventListener('click', handlerClickReting(recipeDish._id));
      

      closeBtn.addEventListener('click', handlerCloseBtn);

      function handlerCloseBtn() {
        closeModal();
      }

      overlay.addEventListener('click', handlerOverlayClick);

      function handlerOverlayClick(evt) {
        const modalWindow = evt.target.closest('.js-recipe-modal');
        if (!modalWindow) {
          closeModal();
        }
      }

      document.addEventListener('keydown', handlerEsc);

      function handlerEsc({ code }) {
        if (code === 'Escape') {
          closeModal();
        }
      }

      function closeModal() {
        changeFavoriteBtn.removeEventListener('click', handlerFavorite);
        // giveRatingBtn.addEventListener('click', handlerClickReting(recipeDish._id));
        closeBtn.removeEventListener('click', handlerCloseBtn);
        overlay.removeEventListener('click', handlerOverlayClick);
        document.removeEventListener('keydown', handlerEsc);
        overlay.remove();
      }
    })
    .catch(err => console.log(err));
}
