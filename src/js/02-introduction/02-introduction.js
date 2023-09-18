import Swiper from 'swiper';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
    const swiperWrapper = document.querySelector('.swiper-wrapper');

    const baseUrl = 'https://tasty-treats-backend.p.goit.global/api';

    // Дані із сервера
    fetch(`${baseUrl}/events`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            // Метод map та шаблон
            const slidesHTML = data.map(event => {
                return `
          <div class="swiper-slide">
            <div class="chief">
              <img class="chief-avatar" src="${event.cook.imgUrl}" alt="${event.cook.name}" />
            </div>
            <div class="preview">
              <img class="preview-img" src="${event.topic.previewUrl}" alt="${event.topic.name} Preview" />
              <h2 class="dish-title">${event.topic.name}</h2>
              <p class="dish-origin">${event.topic.area}</p>
            </div>
            <div class="dish">
              <img class="dish-img" src="${event.topic.imgUrl}" alt="${event.topic.name}" />
            </div>
          </div>
        `;
            });


            swiperWrapper.innerHTML = slidesHTML.join('');

            // Ініціалізація Swiper
            new Swiper(".swiper-container", {
                slidesPerView: 1,
                pagination: {
                    el: '.swiper-pagination',
                },
            });
        })
        .catch(error => {
            console.error("Помилка при отриманні даних з бекенду:", error);
        });
});
