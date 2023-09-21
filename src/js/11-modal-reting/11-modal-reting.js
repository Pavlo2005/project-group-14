const btnGiveRating = document.querySelector('.js-open-rating-button');
const windowPlace = document.querySelector('body');

const modalWindovs = `
<div class="js-reting-overlay-modal reting-overlay-modal overlay " data-modal-reting>
    <div class="reting-modal modal" data-modal="1">
        <button type="button" class="js-modal-close reting-modal-close-btn">
            <svg class="reting-modal-close-icon">
                <use href="/img/icon.svg#icon-cross"></use>
            </svg>
        </button>
        <h2 class="reting-modal-title">Rating</h2>
        <form class="js-reting-form-input reting-form-input " name="modal-form">
          <div class="reting-form-star">

              <p class="reting-number">0.0</p>
               <ul class="reting-list">
                <li class="reting-item-personal">
                    <input class="star-rating__input" id="star-rating-5" type="radio" name="rating"
                        value="5" required >
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
                  id="modal-email" placeholder="Enter email" required  />
            
            <button type="submit" class="js-reting-submit reting-button-submit reting-item-personal">Send</button>
        </form>
    </div>
</div>`;

// btnGiveRating.addEventListener('click', handlerClick);

// ============================функція розмітки модального викна

handlerClick();

function handlerClick() {
  // btnGiveRating.dataset.id;

  windowPlace.insertAdjacentHTML('beforeend', modalWindovs);
}

// ==================функція включення модального вікна
const refs = {
  // openModalBtn: document.querySelector('dataset.'),
  closeModalBtn: document.querySelector('.js-modal-close'),
  modal: document.querySelector('[data-modal-reting]'),
  reting: document.querySelector('.js-reting-form-input'),
  send: document.querySelector('.js-reting-submit'),
  //   close: document.querySelector('.js-modal-close'),
  modalArea: document.querySelector('.js-reting-overlay-modal'),
};
(() => {
  //   const refs = {
  //     openModalBtn: document.querySelector('dataset.'),
  //     closeModalBtn: document.querySelector('.js-modal-close'),
  //     modal: document.querySelector('[data-modal-reting]'),
  //   };

  // refs.btnGiveRating.addEventListener('click', toggleModal);
  //   refs.closeModalBtn.addEventListener('click', toggleModal);
  toggleModal();

  function toggleModal() {
    refs.modal.classList.toggle('reting-modal-is-hidden');
  }
})();

const enterReting = {
  reting: document.querySelector('.js-reting-form-input'),
  send: document.querySelector('.js-reting-submit'),
  close: document.querySelector('.js-modal-close'),
  modalArea: document.querySelector('.js-reting-overlay-modal'),
};

// enterReiting.reting.addEventListener();

// const selectedReting = document.querySelector("input[name='rating']:checked");
// console.log('se', selectedReting);
// handlerClickReting();

enterReting.send.addEventListener('click', handlerClickReting);
enterReting.close.addEventListener('click', handlerClickClose);

// ==================функція повернення вибору рейтингу
function handlerClickReting(evt) {
  console.log(4234234);
  const selectedReting = document.querySelector(
    "input[name='rating']:checked"
  ).value;
  console.log('se', selectedReting);
  evt.preventDefault();
  if (!selectedReting) {
    console.log('Error data');
    return 'Error data';
  }

  console.log(selectedReting);
  //   return inputReting;
}
//  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"

// ==================функція закриття модалки
function handlerClickClose() {
  refs.modal.classList.toggle('reting-modal-is-hidden');
  refs.modalArea.innerHTML = '';
}
