const btnGiveRating = document.querySelector('.js-open-rating-button');
const windowPlace = document.querySelector('body');

const modalWindovs = `
<div class="reting-overlay-modal overlay js-reting-overlay-modal" data-modal-reting>
    <div class="reting-modal modal" data-modal="1">
        <button type="button" class="reting-modal-close-btn js-modal-close">
            <svg class="reting-modal-close-icon">
                <use href="/img/icon.svg#icon-cross"></use>
            </svg>
        </button>
        <h2 class="reting-modal-title">Rating</h2>
        <form class="reting-form-input js-reting-form-input" name="modal-form">
          <div class="reting-form-star">

              <p class="reting-number">0.0</p>
               <ul class="reting-list">
                <li class="reting-item-personal">
                    <input class="star-rating__input" id="star-rating-5" type="radio" name="rating"
                        value="5">
                    <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-5"
                        title="5 out of 5 stars"><svg class="reting-modal-star-icon ">
                            <use href="/img/icon.svg#icon-star"></use>
                        </svg>
                    </label>
                </li>
                <li class="reting-item-personal">
                    <input class="star-rating__input" id="star-rating-4" type="radio" name="rating"
                        value="4">
                    <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-4"
                        title="4 out of 5 stars"><svg class="reting-modal-star-icon ">
                            <use href="/img/icon.svg#icon-star"></use>
                        </svg></label>
                </li>
                <li class="reting-item-personal">
                    <input class="star-rating__input" id="star-rating-3" type="radio" name="rating"
                        value="3">
                    <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-3"
                        title="3 out of 5 stars"><svg class="reting-modal-star-icon ">
                            <use href="/img/icon.svg#icon-star"></use>
                        </svg></label>
                </li>
                <li class="reting-item-personal">
                    <input class="star-rating__input" id="star-rating-2" type="radio" name="rating"
                        value="2">
                    <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-2"
                        title="2 out of 5 stars"><svg class="reting-modal-star-icon ">
                            <use href="/img/icon.svg#icon-star"></use>
                        </svg></label>
                </li>
                <li class="reting-item-personal">
                    <input class="star-rating__input" id="star-rating-1" type="radio" name="rating"
                        value="1">
                    <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-1"
                        title="1 out of 5 stars"><svg class="reting-modal-star-icon ">
                            <use href="/img/icon.svg#icon-star"></use>
                        </svg></label>
                </li>
            </ul>
             
          </div>              
            <input class="reting-modal-form-input" type="email" name="email"
                  id="modal-email" placeholder="Enter email"  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
            
            <button type="submit" class="reting-button-submit reting-item-personal js-reting-submit">Send</button>
        </form>
    </div>
</div>`;

// btnGiveRating.addEventListener('click', handlerClick);

// handlerClick();

// ============================функція розмітки модального викна
function handlerClick() {
  // btnGiveRating.dataset.id;

  windowPlace.insertAdjacentHTML('beforeend', modalWindovs);
}

// ==================функція включення модального вікна
(() => {
  const refs = {
    // openModalBtn: document.querySelector('dataset.'),
    closeModalBtn: document.querySelector('[data-modal-buy-close]'),
    modal: document.querySelector('[data-modal-reting]'),
  };

  // refs.btnGiveRating.addEventListener('click', toggleModal);
  // refs.closeModalBtn.addEventListener('click', toggleModal);
  toggleModal();

  function toggleModal() {
    refs.modal.classList.toggle('reting-modal-is-hidden');
  }
})();

// ==================функція повертання вибору рейтингу
const enterReiting = {
  reting: document.querySelector('.js-reting-form-input'),
  send: document.querySelector('.js-reting-submit'),
};

// enterReiting.reting.addEventListener();

const selectedReting = document.querySelector("input[name='rating']:checked");
// console.log(selectedReting.volue);

enterReiting.send.addEventListener('submit', handlerClickReiting);

function handlerClickReiting() {
  console.log(4234234);
  enterReiting.send.preventDefault();
  if ((selectedReting.volue = 0)) {
    console.log('Error data');
    return 'Error data';
  }
  console.log(selectedReting.value);
  const inputReting = selectedReting.volue;
  return inputReting;
}
