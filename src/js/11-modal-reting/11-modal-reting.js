import Notiflix from 'notiflix';

const windowPlace = document.querySelector('body');
let refs;
let idForratingRecips;
let selectedRating = 1.0;

const modalWindovs = `
<div class="js-rating-overlay-modal rating-overlay-modal overlay " data-modal-rating>
    <div class="rating-modal modal" data-modal="1">
        <button type="button" class="js-modal-close rating-modal-close-btn">
            <svg class="rating-modal-close-icon">
                <use href="/img/icon.svg#icon-cross"></use>
            </svg>
        </button>
        <h2 class="rating-modal-title">Rating</h2>
        <form class="js-rating-form-input rating-form-input " name="modal-form">
          <div class="rating-form-star">

              <p class="js-rating-number rating-number">${selectedRating}</p>
               <ul class="js-rating-list rating-list">
                <li class="rating-item-personal">
                    <input class="star-rating__input" id="star-rating-5" type="radio" name="rating"
                        value="5" required >
                    <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-5"
                        title="5 out of 5 stars"><svg class="rating-modal-star-icon ">
                            <use href="/img/icon.svg#icon-star"></use>
                        </svg>
                    </label>
                </li>
                <li class="rating-item-personal">
                    <input class="star-rating__input" id="star-rating-4" type="radio" name="rating"
                        value="4">
                    <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-4"
                        title="4 out of 5 stars"><svg class="rating-modal-star-icon ">
                            <use href="/img/icon.svg#icon-star"></use>
                        </svg></label>
                </li>
                <li class="rating-item-personal">
                    <input class="star-rating__input" id="star-rating-3" type="radio" name="rating"
                        value="3">
                    <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-3"
                        title="3 out of 5 stars"><svg class="rating-modal-star-icon ">
                            <use href="/img/icon.svg#icon-star"></use>
                        </svg></label>
                </li>
                <li class="rating-item-personal">
                    <input class="star-rating__input" id="star-rating-2" type="radio" name="rating"
                        value="2">
                    <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-2"
                        title="2 out of 5 stars"><svg class="rating-modal-star-icon ">
                            <use href="/img/icon.svg#icon-star"></use>
                        </svg></label>
                </li>
                <li class="rating-item-personal">
                    <input class="star-rating__input" id="star-rating-1" type="radio" name="rating"
                        value="1" checked >
                    <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-1"
                        title="1 out of 5 stars"><svg class="rating-modal-star-icon ">
                            <use href="/img/icon.svg#icon-star"></use>
                        </svg></label>
                </li>
            </ul>
             
          </div>              
            <input class="js-rating-email rating-modal-form-input" type="email" name="email"
                  id="modal-email" placeholder="Enter email" required/>
            
            <button type="submit" class="js-rating-submit rating-button-submit rating-item-personal">Send</button>
        </form>
    </div>
</div>`;

// btnGiveRating.addEventListener('click', handlerClickReting);

// ============================функція розмітки та виводу модального викна

const id = '6462a8f74c3d0ddd28897fc1';
// для проработки тимчасово
handlerClickReting(id);
// для проработки тимчасово

function handlerClickReting(id) {
  // btnGiveRating.dataset.id;
  //   const btnGiveRating = document.querySelector('.js-open-rating-button');
  idForratingRecips = id;

  windowPlace.insertAdjacentHTML('beforeend', modalWindovs);
  refs = {
    // openModalBtn: document.querySelector('dataset.'),
    close: document.querySelector('.js-modal-close'),
    modal: document.querySelector('[data-modal-rating]'),
    rating: document.querySelector('.js-rating-form-input'),
    send: document.querySelector('.js-rating-submit'),
    email: document.querySelector('.js-rating-email'),
    ratingDisplay: document.querySelector('.js-rating-number'),
    retingSelector: document.querySelector('.js-rating-list'),
    //   close: document.querySelector('.js-modal-close'),
    //   modalArea: document.querySelector('.js-rating-overlay-modal'),
  };

  //   toggleModal();
  refs.modal.classList.toggle('rating-modal-is-hidden');

  refs.retingSelector.addEventListener('click', retingWrite);
  // selectedRating = document.querySelector("input[name='rating']:checked").value;

  refs.send.addEventListener('click', handlerClickRet);
  refs.close.addEventListener('click', handlerClickClose);
}

// ==================функція відображення вибраного рейтингу
function retingWrite(elem) {
  selectedRating = document.querySelector("input[name='rating']:checked").value;
  console.log(selectedRating);

  refs.ratingDisplay.innerHTML = `<p class="js-rating-number rating-number">${selectedRating}</p>`;
}
// ================================================================

// =================функція запиту на бекенд
// serviceRating('6462a8f74c3d0ddd28897fbc')
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => console.log(err));
// Запит на бекенд - щоразу потрібно міняти email або Id
// інакше приходить повідомлення {message: 'Such email already exists'}
// а якщо міняти зростає значення ключа whoRated, в об'єкті, що повертається

async function serviceRating(Id, rating, email) {
  const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
  const END_POINT = `/recipes/${Id}/rating`;
  const postToUpdate = {
    rate: rating,
    email: email,
  };

  console.log('rating', postToUpdate.rate);
  console.log('email', postToUpdate.email);

  const options = {
    method: 'PATCH',
    body: JSON.stringify(postToUpdate),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const resp = await fetch(`${BASE_URL}${END_POINT}`, options);
  if (!resp.statusText === 'OK') {
    throw new Error('Error');
  }
  return await resp.json();
}
// ================================================

// ==================функція повернення вибору рейтингу

async function handlerClickRet(evt) {
  console.log(4234234);

  selectedRating = Number(
    document.querySelector("input[name='rating']:checked").value
  );
  // const email = document.querySelector('.js-rating-email').value;
  const emailRating = refs.email.value;

  console.log('rating', selectedRating);
  console.log(typeof selectedRating);
  console.log('email', emailRating);
  console.log('id', idForratingRecips);

  evt.preventDefault();

  serviceRating(idForratingRecips, selectedRating, emailRating)
    .then(data => {
      console.log(data.message);
      Notiflix.Notify.failure(data.message);
    })
    .catch(err => console.log(err));

  // const resp = await fetch(
  //   `https://tasty-treats-backend.p.goit.global/api/recipes/${idForratingRecips}/rating`
  // );

  // if (!resp.ok) {
  //   return Promise.reject(resp.statusText);
  // }

  handlerClickClose();
  //   data = await resp.json();
  //   return data;
  //   return inputrating;
}

// ==================================================

//  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"

// ==================функція закриття модалки
function handlerClickClose() {
  refs.modal.classList.toggle('rating-modal-is-hidden');
  refs.modal.innerHTML = '';
}

export { handlerClickReting };
