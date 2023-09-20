import SlimSelect from 'slim-select';

import '../../../node_modules/slim-select/dist/slimselect.css';

import { servicesList } from './services-list';
import { createList } from './create-list';

const elements = {
  loader: document.querySelector('.filter-loader'),
  searchForm: document.getElementById('searchForm'),
  input: document.getElementById('search'),
  time: document.getElementById('time'),
  area: document.getElementById('area'),
  ingredients: document.getElementById('ingredients'),
  clearButton: document.getElementById('clearButton'),
};

// Оголошення SlimSelect зміних

let timeSelect = new SlimSelect({
  select: time,
  settings: {
    showSearch: false,
    placeholderText: 'time',
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

    elements.area.insertAdjacentHTML('beforeend', await createList(data));

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
      await createList(data)
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
  elements.loader.classList.replace('filter-loader', 'filter-loader-hidden');
}

elements.searchForm.addEventListener('change', handlerChange);

// функція відслідковування змін в полях воду

function handlerChange() {
  const inputValue = elements.input.value;
  const timeValue = elements.time.value;
  const areaValue = elements.area.value;
  const ingredientsValue = elements.ingredients.value;

  console.log(
    `Пошук: ${inputValue}, Час: ${timeValue}, Регіон: ${areaValue}, Інгредієнти: ${ingredientsValue}`
  );
}

elements.clearButton.addEventListener('click', handlerClickClear);

// функція видалення вмісту з полів воду

function handlerClickClear() {
  elements.area.value = '';
  timeSelect.destroy();
  ingredientsSelect.destroy();
  areaSelect.destroy();
  elements.ingredients.value = '';
  elements.input.value = '';
  elements.time.value = '';

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
