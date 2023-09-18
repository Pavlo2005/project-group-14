/* 
TODO: reading recipes id from localStorage
TODO: clicking on card opens the recipe popup
TODO: adding and removing from favorites on heart click
TODO: 
*/

// const favoriteRecipes = ["6462a8f74c3d0ddd288980d4", "6462a8f74c3d0ddd28897fc1", "6467fb9d3d8125271a59219e", "6462a8f74c3d0ddd28897fbc", "6462a8f74c3d0ddd28897fb9", "6462a8f74c3d0ddd28897fdf", "6462a8f74c3d0ddd28897fc2"]
// localStorage.setItem("favorites", JSON.stringify(favoriteRecipes));

const localFavorites = JSON.parse(localStorage.getItem('favorites'))
const elements = {
  recipes: document.querySelector(".fav-recipes"),
  noFavs: document.querySelector(".fav-none"),
  hero: document.querySelector(".fav-hero-container"),
  categories: document.querySelector(".fav-categories")
}

serviceFavorites(localFavorites)

async function serviceFavorites(favs) {
  // checking if there's any data in localStorage
  if (!favs || !favs[0]) {
    console.log("nothing here");
    return;
  }
  elements.noFavs.classList.add('visually-hidden');
  elements.hero.style.display = "flex";
  elements.categories.style.display = "flex";

  try {
    const data = await getRecipesByID(favs);
    // console.log(data);

    elements.recipes.insertAdjacentHTML("beforeend", renderFavorites(data))
    elements.categories.insertAdjacentHTML("beforeend", renderCategories(data))

  } catch (error) {
    console.log(error);
  }
}


async function getRecipesByID(arr) {
  const responses = arr.map(async id => {
    const resp = await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${id}`);
    if (!resp.ok) {
      return Promise.reject(resp.statusText);
    }
    return resp.json();
  })
  const data = await Promise.allSettled(responses);

  return data
    .filter(({ status }) => status === "fulfilled")
    .map(({ value }) => value);
}



async function getRecipeByID(id) {
  const resp = await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${id}`);
  if (!resp.ok) {
    throw new Error("Error");
  }
  return resp.json();
}

function renderCategories(data) {
  const markup = data.map(({ category }) =>
    `<li class="fav-categories-item">
        <a href="#" class="fav-category cat-inactive">${category}</a>
      </li>`).filter((category, idx, arr) => arr.indexOf(category) === idx).join('')
  return markup;
}

function renderFavorites(data) {
  console.log(data);
  const markup = data.map(({ description, preview, rating, title }) =>
    `<div class="card">
    <img src="${preview}">
    <p>${title}</p>
    <p>${description}</p>
    <p>${rating}</p>
    </div>`
  ).join('')

  return markup;
}
