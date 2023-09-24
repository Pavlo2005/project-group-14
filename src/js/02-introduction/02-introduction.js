import Swiper from 'swiper';
import '../../../node_modules/swiper/swiper.css';

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 300,
    pagination: true,
    scrollbar: true,
    loop: true,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    autoplay: {
        delay: 2000,
    },
});