/* 
TODO: adding and removing from favorites on heart click
TODO: spread the categories to the screen edge
*/

import { createMarkupRecipe } from "../11-recipe-card/recipe-card"
import { getRecipesByID } from "./09-favorites-api"
import spritesheet from "../../img/icon.svg";
import '../08-dish-page/08-dish-page';
import { changeFavorites } from '../08-dish-page/08-handler-favorites-LS';

// sample localStorage recipes
// const favoriteRecipes = ["6462a8f74c3d0ddd288980d4", "6462a8f74c3d0ddd28897fc1", "6467fb9d3d8125271a59219e", "6462a8f74c3d0ddd28897fbc", "6462a8f74c3d0ddd28897fb9", "6462a8f74c3d0ddd28897fdf", "6462a8f74c3d0ddd28897fc2"]
// localStorage.setItem("favorites", JSON.stringify(favoriteRecipes));

const localFavorites = JSON.parse(localStorage.getItem('favorites'));
const elements = {
  recipes: document.querySelector(".fav-recipes"),
  noFavs: document.querySelector(".fav-none"),
  hero: document.querySelector(".fav-hero-container"),
  categories: document.querySelector(".fav-categories"),
  favNoneImg: document.querySelector(".fav-none-icon"),
  homeNav: document.querySelector(".js-home-link"),
  favNav: document.querySelector(".js-fav-link")
}

// adding relative path to icons
elements.favNoneImg.insertAdjacentHTML('beforeend', `<use href="${spritesheet}#icon-favorites"></use>`);

// switching active link 
elements.homeNav.classList.replace('home-link', 'favlink');
elements.favNav.classList.replace('fav-link', 'home-link');

serviceFavorites(localFavorites);

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

    const allHearts = document.querySelectorAll('.recipe-icon-heart');
   
    for (const heart of [...allHearts]) {
      heart.classList.add("active-heart");
    }

    elements.recipes.addEventListener('click', handlerFavorite);
    function handlerFavorite(evt) {
      const currentHeart = evt.target.closest('.recipe-icon-heart');
      currentHeart.classList.toggle("active-heart");
      const currentDish = evt.target.closest('.js-open-dish');
      changeFavorites(currentDish.dataset.id);
    }

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
