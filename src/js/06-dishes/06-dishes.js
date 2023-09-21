import { createMarkupRecipe } from "../11-recipe-card/recipe-card";
import { dataElements } from "../05-filter/05-filter";
import { servicesAddDich } from "./services-add-dich";

let currentPageDich = 1;

const element = document.querySelector('.js-dich-container');
const guard = document.querySelector('.js-dich-block-gward');

// Observer

const options = {
    rootMargin: "100px",
}

const observer = new IntersectionObserver(payload => {
    console.log(payload);
    if (payload[0].isIntersecting) {
        addDich(dataElements);
    }
}, options);


function refreshDich() {
    element.innerHTML = '';
    currentPageDich = 1;
    observer.observe(guard);
    console.log('+');
}

// функція додавання блюд

async function addDich({ time, ingredient, value, area }) {
    try {
        const data = await servicesAddDich(time, ingredient, value, area, currentPageDich);

        if (currentPageDich < data.totalPages) {
            currentPageDich += 1;
        } else {
            observer.unobserve(guard);
            console.log('-');
        }

        element.insertAdjacentHTML('beforeend', createMarkupRecipe(data.results));
    } catch (err) {
        console.log(err);
    }
}


export { refreshDich };