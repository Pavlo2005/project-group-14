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

toot(localFavorites)

function toot(favs) {
  // checking if there's any data in localStorage
  if (!favs || !favs[0]) {
    console.log("nothing here");
    return;
  }
  elements.noFavs.classList.add('visually-hidden');
  elements.hero.style.display = "flex";
  elements.categories.style.display = "flex";

  favs.forEach(recipe =>
    getRecipeByID(recipe)
      .then((data) => {
        console.log(data);
        elements.recipes.insertAdjacentHTML("beforeend", renderFavorites(data))
      })
      .catch((err) => console.log(err))
  )
}


async function getRecipeByID(id) {
  const resp = await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${id}`);
  if (!resp.ok) {
    throw new Error("Error");
  }
  return resp.json();
}

function renderFavorites(data) {
  const { description, preview, rating, title } = data;
  const markup =
    `<div class="card">
    <img src="${preview}">
    <p>${title}</p>
    <p>${description}</p>
    <p>${rating}</p>`
  return markup;
}
