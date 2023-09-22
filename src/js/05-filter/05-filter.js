import SlimSelect from 'slim-select';

import '../../../node_modules/slim-select/dist/slimselect.css';

import { servicesList } from './services-list';
import { createListArea } from './create-list';
import { createListIngredients } from './create-list';
import { refreshDich } from '../06-dishes/06-dishes';
import { appearanceCategory } from '../03-categories/03-categories';
import { appearancePopRecipes } from '../04-popular-recips/04-popular-recips';

const elements = {
  loader: document.querySelector('.filter-loader'),
  searchForm: document.getElementById('searchForm'),
  input: document.getElementById('search'),
  time: document.getElementById('time'),
  area: document.getElementById('area'),
  ingredients: document.getElementById('ingredients'),
  clearButton: document.getElementById('clearButton'),
};

export let dataElements = {
  time: '',
  ingredient: '',
  value: '',
  area: '',
};

// Оголошення SlimSelect зміних

let timeSelect = new SlimSelect({
  select: time,
  settings: {
    showSearch: false,
    placeholderText: 'time',
    disabled: false,
  },
  events: {
    afterChange: () => {
      handlerChange();
    },
  },
});

let areaSelect;
let ingredientsSelect;

// Створення випадаючих списків

addAreas();

async function addAreas() {
  try {
    const data = await servicesList('areas');

    elements.area.insertAdjacentHTML('beforeend', await createListArea(data));

    areaSelect = new SlimSelect({
      select: area,
      settings: {
        showSearch: false,
        placeholderText: 'area',
      },
      events: {
        afterChange: () => {
          handlerChange();
        },
      },
    });
  } catch (err) {
    console.log(err);
  }
}

addIngredients();

async function addIngredients() {
  try {
    const data = await servicesList('ingredients');

    elements.ingredients.insertAdjacentHTML(
      'beforeend',
      await createListIngredients(data)
    );

    ingredientsSelect = new SlimSelect({
      select: ingredients,
      settings: {
        showSearch: false,
        placeholderText: 'ingredients',
      },
      events: {
        afterChange: () => {
          handlerChange();
        },
      },
    });
  } catch (err) {
    console.log(err);
  }

  // прибирання лоадера після загрузки контенту

  elements.searchForm.hidden = false;
  appearanceCategory();
  appearancePopRecipes();
  elements.loader.classList.replace('filter-loader', 'filter-loader-hidden');
  refreshDich();
}

elements.searchForm.addEventListener('change', handlerChange);

// функція відслідковування змін в полях воду

function handlerChange() {
  dataElements.value = elements.input.value;
  dataElements.time = elements.time.value;
  dataElements.area = elements.area.value;
  dataElements.ingredient = elements.ingredients.value;

  refreshDich();
}

elements.clearButton.addEventListener('click', handlerClickClear);

// функція видалення вмісту з полів воду

function handlerClickClear() {
  timeSelect.destroy();
  ingredientsSelect.destroy();
  areaSelect.destroy();

  elements.area.value = '';
  elements.ingredients.value = '';
  elements.input.value = '';
  elements.time.value = '';

  dataElements.value = '';
  dataElements.time = '';
  dataElements.area = '';
  dataElements.ingredient = '';

  refreshDich();

  timeSelect = new SlimSelect({
    select: time,
    settings: {
      showSearch: false,
      placeholderText: 'time',
      allowDeselect: true,
    },
    events: {
      afterChange: () => {
        handlerChange();
      },
    },
  });

  areaSelect = new SlimSelect({
    select: area,
    settings: {
      showSearch: false,
      placeholderText: 'area',
    },
    events: {
      afterChange: () => {
        handlerChange();
      },
    },
  });

  ingredientsSelect = new SlimSelect({
    select: ingredients,
    settings: {
      showSearch: false,
      placeholderText: 'ingredients',
    },
    events: {
      afterChange: () => {
        handlerChange();
      },
    },
  });
}
