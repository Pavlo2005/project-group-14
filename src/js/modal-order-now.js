const modal = document.querySelector('#ModalOrderNow');
const openModalButton = document.getElementById('openModalButton');

openModalButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

const closeButton = modal.querySelector('.modal-order-close-btn');
closeButton.addEventListener('click', () => {
  closeModal();
});

function closeModal() {
  modal.style.display = 'none';
}

const form = modal.querySelector('.modal-order-form');
const sendButton = form.querySelector('.modal-order-btn');

function isFormValid() {
  const name = form.querySelector('#name').value;
  const phone = form.querySelector('#phone').value;
  const email = form.querySelector('#email').value;
  const comment = form.querySelector('#modal_comment').value;

  return name && phone && email && comment;
}

form.addEventListener('input', () => {
  
  const isValid = isFormValid();
  
  sendButton.disabled = !isValid;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

    const name = form.querySelector('#name').value;
    const phone = form.querySelector('#phone').value;
    const email = form.querySelector('#email').value;
    const comment = form.querySelector('#modal_comment').value;

    if (isFormValid()) {
    
    sendOrderToBackend(name, phone, email, comment);

    form.reset();
  } else {
    console.error('Будь ласка, заповніть всі поля форми');
  }
});

function sendOrderToBackend(name, phone, email, comment) {
  const backendUrl = 'https://tasty-treats-backend.p.goit.global/api/orders';

  const data = {
    name: name,
    phone: phone,
    email: email,
    comment: comment,
  };

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  fetch(backendUrl, requestOptions)
    .then((response) => {
      if (response.ok) {
        console.log('Замовлення успішно відправлено на бекенд');
        closeModal();
      } else {
        console.error('Помилка при відправці замовлення на бекенд');
      }
    })
    .catch((error) => {
      console.error('Помилка при відправці замовлення на бекенд', error);
    });
}