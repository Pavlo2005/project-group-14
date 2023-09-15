import { servicesList } from "./services-list";
import { createList } from "./create-list";

const elements = {
    searchForm: document.getElementById('searchForm'),
    input: document.getElementById('search'),
    time: document.getElementById('time'),
    area: document.getElementById('area'),
    ingredients: document.getElementById('ingredients')
}

addAreas();

async function addAreas() {
    const data = await servicesList('areas');

    elements.area.insertAdjacentHTML('beforeend', await createList(data));
}

addIngredients();

async function addIngredients() {
    const data = await servicesList('ingredients');

    elements.ingredients.insertAdjacentHTML('beforeend', await createList(data));
}


elements.searchForm.addEventListener('change', handlerChange);

function handlerChange() {
    const inputValue = elements.input.value;
    const timeValue = elements.time.value;
    const areaValue = elements.area.value;
    const ingredientsValue = elements.ingredients.value;

    console.log(`Пошук: ${inputValue}, Час: ${timeValue}, Регіон: ${areaValue}, Інгредієнти: ${ingredientsValue}`);
}