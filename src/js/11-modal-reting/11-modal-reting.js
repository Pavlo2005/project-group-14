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
        <h2 class="reting-modal-title">Rating</h2>
        <form class="reting-form-input" name="modal-form">
        <div>
          <p>0.0</p>
           <ul class="reting-list-personal">                
                <li class="reting-item-personal">
                  <svg class="buy-modal-form-icon buy-icon-mastercard">
                    <use href="/img/icons.svg#icon-mastercard"></use>
                  </svg>                    
                </li>
                <li class="reting-item-personal">
              
                </li>
                <li class="reting-item-personal">
            
                </li>
                <li class="reting-item-personal">
               
                </li>
                <li class="reting-item-personal">
               
                </li>
            </ul>
        </div>
        
      
           
              <label class="reting-modal-label" for="modal-comment">Comment</label>
            <textarea class="reting-modal-form-comment" name="comment" id="modal-comment" rows="6">
            </textarea>
           
            <button type="submit" class="reting-button-submit reting-item-personal">Send</button>
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
    modal: document.querySelector('[data-modal-reting]'),
  };

  // refs.btnGiveRating.addEventListener('click', toggleModal);
  // refs.closeModalBtn.addEventListener('click', toggleModal);
  toggleModal();

  function toggleModal() {
    refs.modal.classList.toggle('reting-modal-is-hidden');
  }
})();
