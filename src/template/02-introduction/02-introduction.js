import Swiper from 'swiper/swiper-bundle.min.js';
import 'swiper/swiper-bundle.min.css';

fetch("https://tasty-treats-backend.p.goit.global/api/events")
    .then(response => response.json())
    .then(data => {

        const swiperWrapper = document.querySelector(".swiper-wrapper");

        data.forEach(event => {
            const slide = document.createElement("div");
            slide.classList.add("swiper-slide");

            slide.innerHTML = `
                <div class="chief">
                    <img class="chief-avatar" src="${event.cook.imgUrl}" alt="${event.cook.name}" />
                </div>
                <div class="dish">
                    <img class="dish-img" src="${event.topic.imgUrl}" alt="${event.topic.name}" />
                    <h2 class="dish-title">${event.topic.name}</h2>
                    <p class="dish-origin">${event.topic.area}</p>
                </div>
                <div class="preview">
                    <img class="preview-img" src="${event.topic.previewUrl}" alt="${event.topic.name} Preview" />
                </div>
            `;


            swiperWrapper.appendChild(slide);
        });


        const swiper = new Swiper(".swiper", {
            // Налаштування Swiper
            slidesPerView: 1,
        });

        setInterval(() => {
            swiper.slideNext();
        }, 3000);

    })
    .catch(error => {
        console.error("Помилка при отриманні даних з бекенду:", error);
    });
