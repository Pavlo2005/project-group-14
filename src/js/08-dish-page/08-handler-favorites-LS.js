function changeFavorites(dishId) {
  const favoritesLS = JSON.parse(localStorage.getItem('favorites')) ?? [];
  const idx = favoritesLS.indexOf(dishId);
  if (!!~idx) {
    favoritesLS.splice(idx, 1);
    
    !favoritesLS.length
      ? localStorage.removeItem("favorites")
      : localStorage.setItem("favorites", JSON.stringify(favoritesLS));
    
    return;
    }
  
    favoritesLS.push(dishId);
     
  localStorage.setItem("favorites", JSON.stringify(favoritesLS));
}
  
export { changeFavorites };