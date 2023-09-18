/* 
TODO: adding and removing from favorites on heart click
*/

import { createMarkupRecipe } from "../11-recipe-card/11-recipe-card"
import { getRecipesByID } from "./09-favorites-api"

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
    elements.recipes.insertAdjacentHTML("beforeend", createMarkupRecipe(data))
    elements.categories.insertAdjacentHTML("beforeend", renderCategories(data))

  } catch (error) {
    console.log(error);
  }
}

function renderCategories(data) {
  const markup = data.map(({ category }) =>
    `<li class="fav-categories-item">
        <a href="#" class="fav-category cat-inactive">${category}</a>
      </li>`).filter((category, idx, arr) => arr.indexOf(category) === idx).join('')
  return markup;
}
