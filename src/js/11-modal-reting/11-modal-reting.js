const btnGiveRating = document.querySelector('.js-open-rating-button');
const windowPlace = document.querySelector('body');

const modalWindovs = `
<div class="reting-overlay-modal overlay js-reting-overlay-modal" data-modal-reting>
    <div class="reting-modal modal" data-modal="1">
        <button type="button" class="reting-modal-close-btn js-modal-close">
            <svg class="reting-modal-close-icon">
                <use href="/img/icon.svg#icon-x"></use>
            </svg>
        </button>
        <form class="reting-form-input" name="modal-form">
            <ul class="reting-list-personal">
                <label class="" for="username">Name</label>
                <li class="reting-item-personal">
                    <input class="reting-modal-form-input" type="text" name="username"
                        id="modal-name" placeholder="Name" pattern="\D{1,}" />
                </li>
                <li>
                    <label class="reting-modal-label" for="modal-phone">Phone number</label>
                    <input class="reting-modal-form-input reting-phon" type="tel"
                        pattern="[0-9\s]{13,19}" maxlength="19" name="userphon" id="modal-phone"
                        placeholder="Phone number" />
                </li>
                <li>
                    <label class="reting-modal-label" for="modal-email">Email</label>
                    <input class="reting-modal-form-input" type="email" name="email"
                        id="modal-email" placeholder="Enter your email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                </li>
            </ul>
            <label class="reting-modal-label" for="modal-comment">Comment</label>
            <textarea class="reting-modal-form-comment" name="comment" id="modal-comment" rows="6"
                placeholder="Enter text"></textarea>
            <button type="submit" class="reting-button-submit">Send</button>
        </form>
    </div>
</div>`;

// btnGiveRating.addEventListener('click', handlerClick);

handlerClick();

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
    modal: document.querySelector('[data-modal-buy]'),
  };

  refs.btnGiveRating.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
