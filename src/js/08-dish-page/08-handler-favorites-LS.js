function changeFavorites(dish) {
  const favoritesLS = JSON.parse(localStorage.getItem('favorites')) ?? [];
  const idx = favoritesLS.findIndex(({ _id }) => _id === dish._id);

  if (!!~idx) {
    favoritesLS.splice(idx, 1);
    
    !favoritesLS.length
      ? localStorage.clear()
      : localStorage.setItem("favorites", JSON.stringify(favoritesLS));
    
    return;
    }
  const { _id, thumb = '', title = '', description = '', rating = 0 } = dish;
    favoritesLS.push({_id, thumb, title, description, rating });
     
  localStorage.setItem("favorites", JSON.stringify(favoritesLS));
}
  
export { changeFavorites };