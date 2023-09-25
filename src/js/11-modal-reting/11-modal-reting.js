import Notiflix from 'notiflix';

const windowPlace = document.querySelector('body');
let statStyle = '';
// const areaInput = document.querySelector();
let refs;
let idForRatingRecips;
let selectedRating = 1;

const elemInput = [];

const modalWindovs = `
<div class="js-rating-overlay-modal rating-overlay-modal overlay" data-modal-rating>
    <div class="rating-modal modal" data-modal="1">
        <button type="button" class="js-modal-close rating-modal-close-btn">
            <svg class="rating-modal-close-icon">
                <use href="/img/icon.svg#icon-cross"></use>
            </svg>
        </button>
        <h2 class="rating-modal-title">Rating</h2>
        <form class="js-rating-form-input rating-form-input " name="modal-form">
          <div class="rating-form-star">

              <p class="js-rating-number rating-number">
                ${selectedRating.toFixed(2)}
              </p>
               <ul class="js-rating-list rating-list"></ul>
             
          </div>              
            <input class="js-rating-email rating-modal-form-input" type="email" name="email"
                  id="modal-email" placeholder="Enter email" required />
            
            <button type="submit" class="js-rating-submit rating-button-submit rating-item-personal">Send</button>
        </form>
    </div>
</div>`;

// ============================функція розмітки та виводу модального викна

// const id = '6462a8f74c3d0ddd28897fc1'; // для перевірки тимчасово
// handlerClickReting(id); // для перевірки тимчасово

// /img/icon.svg
// /project-group-14/assets/icon-3c492b1f.svg

function handlerClickReting(id) {
  idForRatingRecips = id;

  windowPlace.insertAdjacentHTML('beforeend', modalWindovs);

  refs = {
    close: document.querySelector('.js-modal-close'),
    modal: document.querySelector('[data-modal-rating]'),
    rating: document.querySelector('.js-rating-form-input'),
    send: document.querySelector('.js-rating-submit'),
    email: document.querySelector('.js-rating-email'),
    ratingDisplay: document.querySelector('.js-rating-number'),
    retingSelector: document.querySelector('.js-rating-list'),
  };
  ratingStar();
  // for (let i = 1; i < 6; i++) {
  //   let elemStar = ` <li class="rating-item-personal">
  //                   <input class="star-rating-input" id="star-rating-${i}" type="radio" name="rating"
  //                       value="${i}">
  //                   <label class="js-star-rating-${i} star-rating-ico .star-rating-ico-active" for="star-rating-${i}"
  //                       title="${i} out of 5 stars"><svg class="rating-modal-star-icon">
  //                           <use href="/img/icon.svg#icon-star"></use>
  //                       </svg>
  //                   </label>
  //               </li>`;
  //   refs.retingSelector.insertAdjacentHTML('beforeend', elemStar);
  // }

  const elements = {
    1: document.querySelector('.js-star-rating-1'),
    2: document.querySelector('.js-star-rating-2'),
    3: document.querySelector('.js-star-rating-3'),
    4: document.querySelector('.js-star-rating-4'),
    5: document.querySelector('.js-star-rating-5'),
  };

  refs.modal.classList.toggle('rating-modal-is-hidden');

  refs.retingSelector.addEventListener('click', retingWrite);
  refs.send.addEventListener('click', handlerClickRet);
  refs.close.addEventListener('click', handlerClickClose);
}

// ==================функція відображення зірочок
function ratingStar() {
  for (let i = 1; i < 6; i++) {
    //замінити for  на map і добавити  innerHTML
    if (i <= selectedRating) {
      statStyle = 'star-rating-ico-active';
    } else {
      statStyle = '';
    }
    let elemStar = ` <li class="rating-item-personal">
                    <input class="star-rating-input" id="star-rating-${i}" type="radio" name="rating"
                        value="${i}">
                    <label class="js-star-rating-${i} star-rating-ico ${statStyle}" for="star-rating-${i}"
                        title="${i} out of 5 stars"><svg class="rating-modal-star-icon">
                            <use href="/img/icon.svg#icon-star"></use>
                        </svg>
                    </label>
                </li>`;
    refs.retingSelector.insertAdjacentHTML('beforeend', elemStar);
  }
}

// ==================функція відображення вибраного рейтингу
function retingWrite(elem) {
  if (document.querySelector("input[name='rating']:checked")) {
    selectedRating = Number(
      document.querySelector("input[name='rating']:checked").value
    );
  } else {
    selectedRating = 1;
    console.log('selectedRating', selectedRating);
  }
  ratingStar();

  console.log(selectedRating);

  // refs.ratingDisplay.innerHTML = `<p class="js-rating-number rating-number">
  //    ${selectedRating.toFixed(2)}
  // </p>`;
}

// =================функція запиту на бекенд

async function serviceRating(Id, rating, email) {
  const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
  const END_POINT = `/recipes/${Id}/rating`;
  const postToUpdate = {
    rate: rating,
    email: email,
  };

  // console.log('rating', postToUpdate.rate);
  // console.log('email', postToUpdate.email);

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

// ==================функція повернення вибору рейтингу

async function handlerClickRet(evt) {
  // console.log(4234234);
  if (document.querySelector("input[name='rating']:checked")) {
    selectedRating = Number(
      document.querySelector("input[name='rating']:checked").value
    );
  } else {
    selectedRating = 1;
    console.log('selectedRating', selectedRating);
  }

  // selectedRating = Number(
  //   document.querySelector("input[name='rating']:checked").value
  // );
  const emailRating = refs.email.value;

  evt.preventDefault();

  serviceRating(idForRatingRecips, selectedRating, emailRating)
    .then(data => {
      console.log(data.message);
      Notiflix.Notify.failure(data.message);
    })
    .catch(err => console.log(err));

  handlerClickClose();
}

// ==================функція закриття модалки
function handlerClickClose() {
  refs.modal.classList.toggle('rating-modal-is-hidden');
  refs.modal.remove();
}

export { handlerClickReting };
