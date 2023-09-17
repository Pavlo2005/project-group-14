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
                    <img class="chief-avatar" src="${event.chiefAvatar}" alt="chief" />
                </div>
                <div class="dish">
                    <img class="dish-img" src="${event.dishImg}" alt="dish" />
                    <h2 class="dish-title">${event.dishTitle}</h2>
                    <p class="dish-origin">${event.dishOrigin}</p>
                </div>
                <div class="preview">
                    <img class="preview-img" src="${event.previewImg}" alt="preview" />
                </div>
            `;

            swiperWrapper.appendChild(slide);
        });


        const swiper = new Swiper(".swiper", {

            slidesPerView: 1,
        });



    })
    .catch(error => {
        console.error("Помилка при отриманні даних з бекенду:", error);
    });
