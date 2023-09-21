// // core version + navigation, pagination modules:
// import Swiper from 'swiper';
// import '../../../node_modules/swiper/swiper.css';
// import { Navigation, Pagination } from 'swiper/modules';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';





// document.addEventListener('DOMContentLoaded', () => {
//     const swiperWrapper = document.querySelector('.swiper-wrapper');

//     const baseUrl = 'https://tasty-treats-backend.p.goit.global/api';

//     // Дані із сервера
//     fetch(`${baseUrl}/events`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             return response.json();
//         })
//         .then(data => {
//             // Метод map та шаблон
//             const slidesHTML = data.map(event => {
//                 return `
//           <div class="swiper-slide">
//             <div class="chief">
//               <img class="chief-avatar" src="${event.cook.imgUrl}" alt="${event.cook.name}" />
//             </div>
//             <div class="preview">
//               <img class="preview-img" src="${event.topic.previewUrl}" alt="${event.topic.name} Preview" />
//               <h2 class="dish-title">${event.topic.name}</h2>
//               <p class="dish-origin">${event.topic.area}</p>
//             </div>
//             <div class="dish">
//               <img class="dish-img" src="${event.topic.imgUrl}" alt="${event.topic.name}" />
//             </div>
//           </div>
//         `;
//             });


//             swiperWrapper.innerHTML = slidesHTML.join('');

//             // Ініціалізація Swiper
//             new Swiper(".swiper", {
//                 slidesPerView: 1,
//                 modules: [Navigation, Pagination],
//                 pagination: {
//                     el: '.swiper'
//                 },
//             });
//         })
//         .catch(error => {
//             console.error("Помилка при отриманні даних з бекенду:", error);
//         });
// });







import Swiper from 'swiper';
import '../../../node_modules/swiper/swiper.css';

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

            // Ініціалізація Swiper з тим самим селектором
            new Swiper(".swiper", {
                slidesPerView: 1,
                pagination: {
                    el: '.swiper-pagination'
                },
            });
        })
        .catch(error => {
            console.error("Помилка при отриманні даних з бекенду:", error);
        });
});
